import React from 'react';
import logo from '../../assets/images/logo.png';
import "./header.css";

const Header = ({ onLoginClick }) => (
  <header className="navbar">
    <div className="logo">
      <img src={logo} alt="NexEther Logo" className="logo-img click" />
      <div className="navcontainer">
        <nav className="menu">
          <a href="#about" className="click">About Us</a>
          <a href="#products" className="click">Our Products</a>
          <a href="#contact" className="click">Contact Us</a>
          <a href="#login" className="click" onClick={onLoginClick}>Login</a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
