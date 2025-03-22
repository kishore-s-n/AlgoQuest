import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate(); 

  const handleStartClick = () => {
    navigate('/signin');  
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">DSA BATTLE</p>
        <p className="hero-description">CODE, COMPILE AND CONQUER</p>
        <button className="hero-button" onClick={handleStartClick}>
          Let’s Start <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
