// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>
    </div>
  );
};

export default Navbar;
