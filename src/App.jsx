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
import HomePage from './Pages/Home';
import NewSponsors from './Pages/NewSponsors';
function App() {

    return (
      <>


        <Router>
          {/* <Navbar/>  */}
          <Routes>
            <Route path="/" element={< HomePage/>} />
            <Route path="/Find" element={<FindSponsor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/register" element={<ApplicationForm />} />
            <Route path="/Opportunites" element={<NewSponsors />} />

          </Routes>

        </Router>

      </>
    )
  }

export default App
