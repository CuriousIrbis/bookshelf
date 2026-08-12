import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

interface IAccessInfo{
    country: string
    epub: {isAvailable: boolean}
    pdf: {isAailable: boolean}
    webReaderLink: string
}
interface ISaleInfo{
    country: string
    isEbook: boolean
    saleability: string
}
interface IVolumeInfo{
    authors: Array<string>
    canonicalVolumeLink: string
    categories: Array<string>
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
    infoLink: string
    language: string
    pageCount: number
    previewLink: string
    publishedDate: string
    readingModes: {
        text: boolean
        image: boolean
    }
    title: string
}

interface IBook{
    accessInfo: IAccessInfo
    id: string
    saleInfo: ISaleInfo
    selfLink: string
    volumeInfo: IVolumeInfo
    searchInfo: {textSnippet: string}
}

async function GetBooks(ev: React.MouseEvent<HTMLInputElement, MouseEvent>, text: string, setBooks: React.Dispatch<React.SetStateAction<IBook[]>>){
    ev.preventDefault();
    const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

    const title: string = text.split(' ').join('');

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${title}&key=${apiKey}`);

        if(response.data.totalItems == 0) 
            throw new Error("Таких книг нет");

        toast.success("Ура, данные пришли!", response.data.items);
        setBooks(response.data.items);
    } catch (error: Error) {
        const errorMsg: string = error.toString().split(': ')[1]
        toast.error(`Ошибка: ${errorMsg}`)
    }
}

export default function Home(){
    const [books, setBooks] = useState<Array<IBook>>(new Array<IBook>);
    const [bookName, setBookName] = useState<string>("");

    return (
        <div>
            <Toaster />
            <form>
                <label>Поиск книги: </label>
                <input 
                    type="text" 
                    value={bookName} 
                    onChange={(ev) => setBookName(ev.currentTarget.value)}
                />
                <input 
                    type="submit" 
                    value="Поиск..." 
                    onClick={(ev) => GetBooks(ev, bookName, setBooks)}
                />
            </form>

            <ol className="book-list">
                {books.map ? books.map((book: IBook) => (
                    <li key={book.id}>
                        <h3>{book.volumeInfo.title}</h3>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                        <p dangerouslySetInnerHTML={{__html: book.searchInfo?.textSnippet || 'Описание отсутствует'}} />
                        <a href={book.selfLink}>Ссылка на книгу</a>
                    </li>
                )) : ""}
            </ol>
        </div>
    )
}