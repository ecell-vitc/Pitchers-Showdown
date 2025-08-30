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
  );
}

export default Footer;
