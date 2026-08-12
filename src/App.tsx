import { Routes, Route } from "react-router";
import {Navigate} from 'react-router';

import Layout from "./layout";
import Home from "./pages/home";
import Login from "./pages/login";
import BookDetails from "./pages/bookDetails";

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='details' element={<BookDetails />}/>
      </Route>
      <Route path="login">
        <Route index element={<Login />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}