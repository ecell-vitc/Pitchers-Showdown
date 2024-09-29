import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
        <Route path="/business_about" element={<About />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/admin/login" element={<Login admin="true" />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/BusinessDashboard" element={<BusinessDashboard />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
