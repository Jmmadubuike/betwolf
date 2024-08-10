import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>Reach out to us via WhatsApp or Twitter for available Subscription Packages.</h2>
      <div className="contact-details">
        <div className="contact-item">
          <h3>WhatsApp</h3>
          <p>
            <a href="https://wa.me/2349160274000" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="whatsapp-link">
              Chat Me Up
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Twitter</h3>
          <p>
            <a href="https://x.com/The_BetWolf" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="twitter-link">
              Follow Me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
