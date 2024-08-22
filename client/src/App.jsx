import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Sign from "./sigup";
import Login from "./login";
import Home from "./home";

function App() {

  return (
    <>
  <BrowserRouter>

<Routes>
  <Route path="/" element={<Sign/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
</Routes>

  </BrowserRouter>

    </>
     
  )
}

export default App
