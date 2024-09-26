import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="header">
      <div className="container">
        <Link className="navbar-brand logo" to="/" onClick={() => setIsNavCollapsed(true)}>KMS Sacco</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsNavCollapsed(true)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#about" onClick={() => setIsNavCollapsed(true)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#services" onClick={() => setIsNavCollapsed(true)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#testimonials" onClick={() => setIsNavCollapsed(true)}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#contact" onClick={() => setIsNavCollapsed(true)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
