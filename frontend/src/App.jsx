import { useState } from 'react'
import Navbar from './routes/Navbar';
import Home from './routes/Home';
import Register from './routes/Register';
import Login from './routes/Login';
import Users from './routes/Users';
import Notfound from './routes/Notfound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './routes/Navbar';
import ContextProvider from './Context';
// import './App.css'

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/Users" element={<Users />}></Route>
              <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
