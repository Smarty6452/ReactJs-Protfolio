import React from 'react';
import './footer.css';
import {FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsMessenger} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="#"><FaTwitter/></a>
        <a href="#"><FiInstagram/></a>
        <a href="#"><BsMessenger /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Smarty. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
