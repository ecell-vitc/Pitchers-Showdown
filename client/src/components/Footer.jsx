import React from 'react';
import "../styles/Homepage.css";

function Footer() {
  return (
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
      </div>
    </footer>
  );
}

export default Footer;
