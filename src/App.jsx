import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import { UserProvider } from './feature/userslice';
import ApplicationForm from './components/ApplicationForm';
import FindSponsor from './Pages/FindSponsor';
function App() {

    return (
      <>


        <Router>
          {/* <Navbar/>  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Find" element={<FindSponsor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/register" element={<ApplicationForm />} />

          </Routes>

        </Router>

      </>
    )
  }

export default App
