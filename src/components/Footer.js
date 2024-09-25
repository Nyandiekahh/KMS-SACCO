import React from 'react';
import './Footer.css'; // Ensure you have a corresponding CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>KMS Sacco</h3>
          <p>Empowering financial futures since 2010.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <button onClick={() => window.open('https://facebook.com', '_blank')}>
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button onClick={() => window.open('https://twitter.com', '_blank')}>
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button onClick={() => window.open('https://linkedin.com', '_blank')}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
            <button onClick={() => window.open('https://instagram.com', '_blank')}>
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 KMS Sacco. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
