import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import logo from "./logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/signin"); 
  };

  return (
    <div className="container">
      <img src={logo} alt="Algo Quest Logo" className="logo" />
      <h2 className="sub-heading">DSA BATTLE</h2>
      <p className="text">CODE, COMPILE AND CONQUER</p>
      <button className="button" onClick={handleStartClick}>
        Let’s Start
      </button>
    </div>
  );
};

export default HomePage;
