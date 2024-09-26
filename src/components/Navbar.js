import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className="navbar">
      <a href="#home">홈</a>
      <div 
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >

        <button className="dropbtn">
          메뉴 1
        </button>
        {showMenu && ( 

          <div className="dropdown-content">
          <a href="#submenu1">서브메뉴 1</a>
          <a href="#submenu2">서브메뉴 2</a>
          <a href="#submenu3">서브메뉴 3</a>
        </div>
        )}
        
      </div>
      <a href="#about">소개</a>
    </div>
  );
};

export default NavBar;