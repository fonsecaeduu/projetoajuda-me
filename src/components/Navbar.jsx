import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Ajuda-me Estudos
        </Link>
        
        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
          </li>
        </ul>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 