// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from './logo.jpg';

function Navbar() {
  return (
    <div className="topnav">
      <a href="/"><img src={logo} alt='' width={'35px'} height={'35px'}/></a>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
