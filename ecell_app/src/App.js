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
        <Route path="/business_about" element={<About  team_name="Team Name" team_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />} />
        <Route path="/business_about/invest" element={<About invest="true" team_name="Team Name" team_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/admin/login" element={<Login admin="true" />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/BusinessDashboard" element={<BusinessDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
