import React from 'react';
import "../styles/Homepage.css";

function Footer() {
  return (
    <footer className="footer acme-regular ">
      <div className="footer-column footer-col1">
        <div className="title text-start">E CELL, VIT CHENNAI</div>
        <div className="divider" />
        <div className="text-2xl text-start">Empowering Innovators. Fueling Ideas.</div>
      </div>
      <div className="footer-column footer-col2">
        <div className="title text-start">FOLLOW US ;)</div>
        <div className="divider" />
        <a
          href="https://in.linkedin.com/company/e-cell-vitchennai"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          &gt; &nbsp; LinkedIn
        </a>
        <a
          href="https://www.instagram.com/ecell_vitcc/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          &gt; &nbsp; Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
