// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../styles/Header.css';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? 'active' : '';
//   };

//   return (
//     <header className="header">
//       <div className="container-header">
//         <div className="logo">
//           <Link to="/">Vedanth R Kumar</Link>
//         </div>
//         <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
//           <ul>
//             <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//             <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link></li>
//             <li><Link to="/skills" className={isActive('/skills')} onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
//             <li><Link to="/projects" className={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
//             <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
//           </ul>
//         </nav>
//         <div className="hamburger" onClick={toggleMenu}>
//           {/* <a>SWITCH</a> */}
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu  = () => setIsMenuOpen(false);
  const isActive   = (path) => (location.pathname === path ? 'active' : '');

  return (
    <header className="header">
      <div className="container-header">
        {/* hamburger (left-most) */}
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* logo (left, after hamburger) */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Vedanth&nbsp;R&nbsp;Kumar</Link>
        </div>

        {/* centred desktop navigation */}
        <nav className="nav desktop-nav">
          <ul>
            <li><Link to="/"         className={isActive('/')}         onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about"    className={isActive('/about')}    onClick={closeMenu}>About</Link></li>
            <li><Link to="/skills"   className={isActive('/skills')}   onClick={closeMenu}>Skills</Link></li>
            <li><Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact"  className={isActive('/contact')}  onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* mobile sidebar */}
      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/"         className={isActive('/')}         onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about"    className={isActive('/about')}    onClick={closeMenu}>About</Link></li>
          <li><Link to="/skills"   className={isActive('/skills')}   onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/contact"  className={isActive('/contact')}  onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* overlay */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
