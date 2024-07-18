import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/upload" className="nav-link">Upload</Link>
      <Link to="/mypage" className="nav-link">마이페이지</Link>
      <Link to="/budget" className="nav-link">달력</Link>
      <Link to="/calendar" className="nav-link">달력그림</Link>
    </nav>
  );
};

export default NavBar;
