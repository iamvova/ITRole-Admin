import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Error from "./components/Error";

const App = () =>{
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />          
          <Route path='/error' element={<Error />} />          
      </Routes>
    </Router>
  )
}

export default App
