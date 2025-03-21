
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h2 className="logo">AlgoQuest</h2>
      </div>

      <div className="nav-links">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/rules" className="nav-link">Rules</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
