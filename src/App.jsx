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
import Room from './Pages/Room';
import RoomPage from './Pages/RoomPage';
function App() {

  return (
    <>


      <Router>
        {/* <Navbar/>  */}
        
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/Find" element={<PrivateRoute><FindSponsor /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<PrivateRoute><FindSponsor /></PrivateRoute>} />
          <Route path="/signUp" element={<SignUp />} />
<<<<<<< HEAD
          <Route path="/register" element={<ApplicationForm />} />
          <Route path="/AdminNavbar" element={<AdminNavbar />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Table1" element={<Table1 />} />
          <Route path="/update" element={<Update />} />
          <Route path="/Opportunites" element={<NewSponsors />} />
          <Route path="/RegSponsor" element={<RegSponsor />} />
          <Route path="/Requests" element={<Request />} />
          {/* <Route path="/events" element={<YourEvents />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/MoreInfo/:id" element={<MoreInfo />} />
          <Route path="/account" element={<Account />} />
          <Route path="/analytic" element={<Analytic  />} />
          <Route path="/notification" element={<Notifications  />} />
          <Route path="/room" element={<Room  />} />
          <Route path="/room/:roomId" element={<RoomPage  />} />
=======
          <Route path="/register" element={<PrivateRoute><ApplicationForm /></PrivateRoute>} />
          <Route path="/AdminNavbar" element={<PrivateRoute><AdminNavbar /></PrivateRoute>} />
          <Route path="/Table" element={<PrivateRoute><Table /></PrivateRoute>} />
          <Route path="/Table1" element={<PrivateRoute><Table1 /></PrivateRoute>} />
          <Route path="/update" element={<PrivateRoute><Update /></PrivateRoute>} />
          <Route path="/Opportunites" element={<PrivateRoute><NewSponsors /></PrivateRoute>} />
          <Route path="/RegSponsor" element={<PrivateRoute><RegSponsor /></PrivateRoute>} />
          <Route path="/Requests" element={<PrivateRoute><Request /></PrivateRoute>} />
          <Route path="/events" element={<PrivateRoute><YourEvents /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/MoreInfo/:id" element={<PrivateRoute><MoreInfo /></PrivateRoute>} />
          <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
          <Route path="/analytic" element={<PrivateRoute><Analytic  /></PrivateRoute>} />
          <Route path="/notification" element={<PrivateRoute><Notifications  /></PrivateRoute>} />
          <Route path="/room" element={<PrivateRoute><Room  /></PrivateRoute>} />
          <Route path="/room/:roomId" element={<PrivateRoute><RoomPage  /></PrivateRoute>} />
>>>>>>> c01764b3341d7753382c13709cf5cf7130009518

        </Routes>

      </Router>

    </>
  )
}

export default App;
