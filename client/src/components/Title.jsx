import React from 'react';
import "../styles/Homepage.css";
import topImage from '../../public/assets/overlay1.png'
function Title() {
  return (
    <div className="title-container">
      <div className="pitchers-text">THE PITCHERS</div>
      <div className="showdown-text">SHOWDOWN</div>
      <button 
        onClick={() => window.location.href = '/login'}
        className="login-button"
      >
        Log in
      </button>
    </div>
  );
}

export default Title;
