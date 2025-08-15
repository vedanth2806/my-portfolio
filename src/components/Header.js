import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <Link to="/">Vedanth R Kumar</Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/skills" className={isActive('/skills')} onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link to="/projects" className={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          {/* <a>SWITCH</a> */}
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
