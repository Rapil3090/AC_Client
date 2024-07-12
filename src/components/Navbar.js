import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/upload" className="nav-link">Upload</Link>
    </nav>
  );
};

export default NavBar;
