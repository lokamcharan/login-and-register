
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sign from "./sigup";
import Login from "./login";
import Home from "./home";
import EditEmployee from "./EditEmployee";

function App() {
  return (

    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit/:id" element={<EditEmployee />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
