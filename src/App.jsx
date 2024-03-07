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
import PrivateRoute from './layout/PrivateRoute';
import AdminNavbar from './components/AdminNavbar';
import Table from './components/Table'
import Table1 from './components/Table1'
import Update from './Pages/Update';
import SponsorList from './components/SponsorList';
import NewSponsors from './Pages/NewSponsors';
import RegSponsor from './Pages/RegSponsor';
import Request from './Pages/Requests';
import YourEvents from './Pages/Events';
import MoreInfo from './Pages/MoreInfo';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Account from './Pages/Account';
import Analytic from './Pages/Analytic';
import Notifications from './Pages/Notifications';
function App() {

  return (
    <>


      <Router>
        {/* <Navbar/>  */}
        
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          {/* <Route path="/Find" element={<FindSponsor />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<FindSponsor />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/register" element={<ApplicationForm />} />
          <Route path="/AdminNavbar" element={<AdminNavbar />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Table1" element={<Table1 />} />
          <Route path="/update" element={<Update />} />
          <Route path="/Opportunites" element={<NewSponsors />} />
          <Route path="/RegSponsor" element={<RegSponsor />} />
          <Route path="/Requests" element={<Request />} />
          <Route path="/events" element={<YourEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/MoreInfo/:id" element={<MoreInfo />} />
          <Route path="/account" element={<Account />} />
          <Route path="/analytic" element={<Analytic  />} />
          <Route path="/notification" element={<Notifications  />} />

        </Routes>

      </Router>

    </>
  )
}

export default App;
