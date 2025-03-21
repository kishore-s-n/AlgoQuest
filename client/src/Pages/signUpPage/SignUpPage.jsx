import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">SIGN UP</h1>
        <p className="signup-subtitle">ENTER YOUR EMAIL AND PASSWORD</p> 
        <form className="signup-form">
          <input type="name" placeholder="Enter Name" className="signup-input" />
          <input type="email" placeholder="Enter your email" className="signup-input" />
          <input type="password" placeholder="Enter your password" className="signup-input" />
          <input type="password" placeholder="Confirm password" className="signup-input" />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-footer">
          <span className="or-text">or</span>
          <Link to="/signin" className="signup-text">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
