import Header from './UIcomponents/header';
import Footer from './UIcomponents/footer';
import { Outlet } from 'react-router';

export default function Layout(){
    return(
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}