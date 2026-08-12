import { Routes, Route } from "react-router";

export default function App(){
  return (
    <Routes>
      <Route path='/'>
        <Route index/>
      </Route>
    </Routes>
  )
}