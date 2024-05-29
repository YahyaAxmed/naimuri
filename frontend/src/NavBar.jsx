import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css'; // Import the CSS file

const Navbar = () => {
  return (
    // <div className="navbar">
    //   <Link to="/" className="nav-item">Home</Link>
    //   <Link to="/reservation" className="nav-item">Reservation</Link>
    //   <Link to="/history" className="nav-item">History</Link>
    //   <Link to="/setting" className="nav-item">Settings</Link>
    // </div>
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
      <NavLink to="/reservation" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Reservation</NavLink>
      <NavLink to="/history" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>History</NavLink>
      <NavLink to="/setting" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Settings</NavLink>
    </div>
  );
};

export default Navbar;
