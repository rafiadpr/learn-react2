import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import "./App.css";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Member from "./pages/Member"
import Book from "./pages/Book"
import Borrow from "./pages/Borrow"
import History from "./pages/History"

function App (){
  return (
    <>
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Member" element={<Member/>}/>
        <Route path="Book" element={<Book/>}/>
        <Route path="Borrow" element={<Borrow/>}/>
        <Route path="History" element={<History/>}/>
      </Routes>
    </div>
    </>
  )
}
export default App