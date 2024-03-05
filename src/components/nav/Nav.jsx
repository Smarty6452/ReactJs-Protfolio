import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 100;
      setShowNavbar(!isScrolledDown);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={showNavbar ? 'show' : 'hide'}>
      <div className="desktop-nav">
        <div className="nav-links">
          <a
            href="#"
            onClick={() => setActiveNav('#')}
            className={activeNav === '#' ? 'active' : ''}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}
          >
            Experience
          </a>
          <a
            href="#portfolio" 
            onClick={() => {
              setActiveNav('#projects'); 
            }}
            className={activeNav === '#projects' ? 'active' : ''}
          >
            Projects
          </a>
        
          <a
            href="#contact"
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="mobile-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`mobile-nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a
          href="#"
          onClick={() => {
            setActiveNav('#');
            toggleMobileMenu();
          }}
          className={activeNav === '#' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
            setActiveNav('#about');
            toggleMobileMenu();
          }}
          className={activeNav === '#about' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#experience"
          onClick={() => {
            setActiveNav('#experience');
            toggleMobileMenu();
          }}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          Experience
        </a>
        <a
          href="#portfolio" 
          onClick={() => {
            setActiveNav('#projects'); 
            toggleMobileMenu();
          }}
          className={activeNav === '#projects' ? 'active' : ''}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActiveNav('#contact');
            toggleMobileMenu();
          }}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
