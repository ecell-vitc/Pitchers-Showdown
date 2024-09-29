import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Listofbusiness from "./containers/ListOfBusiness"
import Home from './containers/Home'
import About from './containers/About'
import Login from './containers/Login'
import Leaderboard from './containers/Leaderboard'
import AdminPage from './components/AdminPage'
import BusinessDashboard from './components/BusinessDashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/list_of_business" element={<Listofbusiness />} />
        <Route path="/business_about/:teamId" element={<About />} />
        <Route path="/business_about/:teamId/invest" element={<About invest="true" />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/admin/login" element={<Login admin="true" />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/BusinessDashboard" element={<BusinessDashboard  />} />
      </Routes>
    </Router>
  );
};

export default App;
