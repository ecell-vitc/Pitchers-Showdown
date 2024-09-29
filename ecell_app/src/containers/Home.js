import React from "react";
import './Home.css'; // Assuming you have a CSS file for styles
import { useNavigate } from 'react-router-dom'; // Updated import for navigation

import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page on click
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="logos">
          <div className="logo">Ecell Pitcher's Showdown</div>
        </div>
        <div className="content">
          <h1 className="headline">
            Unleash your vision and conquer the world of business. <br />
            Pitch, invest, and thrive at the <br />
            ultimate
          </h1>
          <img className="gif" src="./standard.gif" alt="Pitch Showdown" />
          <br />
          <br />
          <button className="btn" onClick={handleLoginClick}>
            LOGIN
          </button>
          <p className="call-to-action">READY TO WIN BIG?</p>
        </div>
      </div>
    </>
  );
}

export default Home;
