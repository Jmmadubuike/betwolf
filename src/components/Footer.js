import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>WinBig</h2>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/records">Records</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="footer-social">
          <a href="https://twitter.com/The_BetWolf" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://wa.me/2349160274000" target="_blank" rel="noopener noreferrer" className="whatsapp-link">Chat Me Up</a>
        </div>
        <p>&copy; BetWolf. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
