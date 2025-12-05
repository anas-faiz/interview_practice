import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
