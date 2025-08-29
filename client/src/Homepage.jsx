import React, { useState, useEffect } from "react";
import bg from "../src/assets/Background.jpg";
import "./Homepage.css";
import topImage from "../src/assets/overlay1.png";
import burstImage from "../src/assets/halfvisible.png"
function Homepage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2025-09-01T09:00:00');
      const difference = target.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        const newTime = { hours, minutes };
        
        // Check if time changed to trigger flip animation
        if (timeLeft.hours !== hours || timeLeft.minutes !== minutes) {
          // Trigger flip animation on all digit boxes
          document.querySelectorAll('.countdown-digit-box').forEach((box, index) => {
            setTimeout(() => {
              box.classList.add('flip-animation');
              setTimeout(() => box.classList.remove('flip-animation'), 800);
            }, index * 150); // Stagger animations
          });
        }
        
        setTimeLeft(newTime);
      }
    };
  
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (num) => {
    return num.toString().padStart(2, '0').split('');
  };

  return (
    <div className="page-wrapper">
      <div className="sections-wrapper">
        {/* Overlay covers only the three background sections */}
        <div className="homepage-overlay" />

        {/* First section with navbar */}
        <div
          className="homepage-section"
          style={{ position: "relative", backgroundImage: `url(${bg})` }}
        >
          <nav className="navbar">
            <a
              href="/leaderboard"
              className="navbar-link"
              /* TODO: replace with React Router Link to Leaderboard page */
            >
              Leaderboard
            </a>
            <a
              href="/teams"
              className="navbar-link"
              /* TODO: replace with React Router Link to Teams page */
            >
              Teams
            </a>
            <a
              href="/investments"
              className="navbar-link"
              /* TODO: replace with React Router Link to Investments page */
            >
              Investments
            </a>
          </nav>

          <div className="pitchers-showdown-container">
            <div className="pitchers-text">THE PITCHERS</div>
            <div className="showdown-text">SHOWDOWN</div>
            <button 
              onClick={() => window.location.href = '/login'}
              className="login-button"
            >
              Log in
            </button>
          </div>

          {/* Countdown Timer */}
       {/* Countdown Timer with Flip Calendar Animation */}
{/* Countdown Timer - Simple 4 digit layout */}
{/* Countdown Timer with Top-to-Bottom Flip Animation */}
{/* Countdown Timer with Enhanced Paper Flip Effect */}
<div className="countdown-container">
  {/* Hours Section */}
  <div className="countdown-hours">
    <div className="countdown-digit-box" key={`h1-${formatTime(timeLeft.hours)[0]}`}>
      <div className="digit-top">
        <span className="hours-digit">{formatTime(timeLeft.hours)[0]}</span>
      </div>
      <div className="digit-bottom">
        <span className="hours-digit">{formatTime(timeLeft.hours)[0]}</span>
      </div>
      <div className="flip-panel">
        <span className="hours-digit">{formatTime(timeLeft.hours)[0]}</span>
      </div>
      <div className="divider-line"></div>
    </div>
    
    <div className="countdown-digit-box" key={`h2-${formatTime(timeLeft.hours)[1]}`}>
      <div className="digit-top">
        <span className="hours-digit">{formatTime(timeLeft.hours)[1]}</span>
      </div>
      <div className="digit-bottom">
        <span className="hours-digit">{formatTime(timeLeft.hours)[1]}</span>
      </div>
      <div className="flip-panel">
        <span className="hours-digit">{formatTime(timeLeft.hours)[1]}</span>
      </div>
      <div className="divider-line"></div>
    </div>
  </div>

  {/* Minutes Section */}
  <div className="countdown-minutes">
    <div className="countdown-digit-box" key={`m1-${formatTime(timeLeft.minutes)[0]}`}>
      <div className="digit-top">
        <span className="minutes-digit">{formatTime(timeLeft.minutes)[0]}</span>
      </div>
      <div className="digit-bottom">
        <span className="minutes-digit">{formatTime(timeLeft.minutes)[0]}</span>
      </div>
      <div className="flip-panel">
        <span className="minutes-digit">{formatTime(timeLeft.minutes)[0]}</span>
      </div>
      <div className="divider-line"></div>
    </div>
    
    <div className="countdown-digit-box" key={`m2-${formatTime(timeLeft.minutes)[1]}`}>
      <div className="digit-top">
        <span className="minutes-digit">{formatTime(timeLeft.minutes)[1]}</span>
      </div>
      <div className="digit-bottom">
        <span className="minutes-digit">{formatTime(timeLeft.minutes)[1]}</span>
      </div>
      <div className="flip-panel">
        <span className="minutes-digit">{formatTime(timeLeft.minutes)[1]}</span>
      </div>
      <div className="divider-line"></div>
    </div>
  </div>
</div>
<img 
  src={topImage} 
  alt="Top layer image"
  className="top-layer-image"
/>

<div className="why-register">
  WHY REGISTER?
</div>
<div className="pitchers-description">
  Pitchers Showdown is a launchpad for your ideas!<br />
  THIS IS YOUR CHANCE TO FUEL YOUR CREATIVITY!<br />
  GET A CHANCE TO:<br />
  Validate the ideas both as pitcher and judge<br />
  Enhance your critical thinking<br />
  
  <span className="highlight">
    Not into startups?<br />
    Don't worry
  </span>
  
  This event can help you in:<br />
  Networking<br />
  Exposure of idea relevancy in market<br />
  Helpful in building your confidence for placements and project in future!
</div>
{/* Comic burst images - only half visible on left and right */}
<div className="comic-bursts">
  <img 
    src={burstImage} 
    alt="Left burst"
    className="burst-left"
  />
  <img 
    src={burstImage} 
    alt="Right burst" 
    className="burst-right"
  />
</div>
<div className="rules-section">
  <div className="rules-heading">Rules</div>
  <div className="rules-description">
  <ul className="rules-list">
    <li>Participants will pitch their ideas to the panel and to other teams one by one</li>
    <li>While one team pitches their idea, the other teams will act like sharks and ask questions to them</li>
    <li>The participants will then continue to invest the virtual money allotted to them in the different ideas that they like in whatever proportion they want</li>
    <li>The winners will be decided based on the algorithm we made, calculating their score depending upon the investments made and investments received with varying weightages</li>
  </ul>
</div>

</div>




          {/* Add other first section content here if needed */}
        </div>

        {/* Second and third full-screen sections */}
        <div
          className="homepage-section"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div
          className="homepage-section"
          style={{ backgroundImage: `url(${bg})` }}
        />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-column footer-col1">
          <div className="title">E CELL, VIT CHENNAI</div>
          <div className="divider" />
        </div>
        <div className="footer-column footer-col2">
          <div className="title">FOLLOW US</div>
          <div className="divider" />
          <a
            href="https://in.linkedin.com/company/e-cell-vitchennai"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/ecell_vitcc/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/envizionvitc/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            YouTube
          </a>
        </div>
        <div className="footer-column footer-col3">
          <div className="title">GET NOTIFIED</div>
          <div className="divider" />
          <div className="description">
            Be the first to know about<br />
            the activities of E-Cell
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
