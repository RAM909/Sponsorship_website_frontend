import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import { UserProvider } from './feature/userslice';
import ApplicationForm from './components/ApplicationForm';
// import FindSponsor from './Pages/FindSponsor';
import HomePage from './Pages/Home';
import PrivateRoute from './layout/PrivateRoute';
import AdminNavbar from './components/AdminNavbar';
import Table from './components/Table';
import Table1 from './components/Table1'
function App() {

  return (
    <>


      <Router>
        {/* <Navbar/>  */}
        <Routes>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          {/* <Route path="/Find" element={<FindSponsor />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/register" element={<ApplicationForm />} />
          <Route path="/admin" element= {< AdminNavbar/>}/>
          <Route path='/Table' element={<PrivateRoute><Table/></PrivateRoute>}/>
          <Route path='/Table1' element= {<Table1/>}/>
        </Routes>

      </Router>

    </>
  )
}

export default App;
