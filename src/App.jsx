import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
function App() {

  return (
    <>
    <Login/>

    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
      
    </Router>
      
    </>
  )
}

export default App
