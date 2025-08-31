import React from 'react';
import "../styles/Homepage.css";
import topImage from '../../public/assets/overlay1.png'
import { Link } from 'react-router-dom'

function Title() {
  return (
    <div className="title-container">
      <div className="pitchers-text">THE PITCHERS</div>
      <div className="showdown-text">SHOWDOWN</div>
      <Link to='/login'>
        <button className="login-button">
          Log in
        </button>
      </Link>
    </div>
  );
}

export default Title;
