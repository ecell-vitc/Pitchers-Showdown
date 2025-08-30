import React from 'react';
import "../styles/Homepage.css";
function Navbar() {
  return (
    <div className="bg">
      <nav className="navbar">
        <a href="/leaderboard" className="navbar-link">Leaderboard</a>
        <a href="/teams" className="navbar-link">Teams</a>
        <a href="/investments" className="navbar-link">Investments</a>
      </nav>
    </div>
  );
}

export default Navbar;
