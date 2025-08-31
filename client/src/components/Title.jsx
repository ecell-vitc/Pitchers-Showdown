import React from 'react';
import "../styles/Homepage.css";
import topImage from '../../public/assets/overlay1.png'
import { Link } from 'react-router-dom'

function Title() {
  return (
    <div className="title-container min-h-[60vh] peralta-regular flex flex-wrap justify-center content-center">
      <div className="pitchers-text">THE PITCHER&apos;S</div>
      <div className="showdown-text">SHOWDOWN!</div>
      <Link to='/login'>
        <button className="login-button">
          Log in
        </button>
      </Link>
    </div>
  );
}

export default Title;
