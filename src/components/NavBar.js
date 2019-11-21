import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-md">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/resume" className="nav-link">Resume</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
    </div>
  );
}
 
export default NavBar;