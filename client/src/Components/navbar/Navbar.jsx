
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">AlgoQuest</h1>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/rules" className="nav-link">RULES</Link>
        <Link to="/leaderboard" className="nav-link">LEADER BOARD</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;

