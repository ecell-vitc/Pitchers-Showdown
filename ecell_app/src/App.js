import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './containers/Home'
import About from './containers/About'
import SignUp from './containers/Signup'
import Leaderboard from './containers/Leaderboard'

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business_about" element={<About />} />
        <Route path="/login" element={<SignUp /> } />
        <Route path="/admin/login" element={<SignUp admin="true" />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
