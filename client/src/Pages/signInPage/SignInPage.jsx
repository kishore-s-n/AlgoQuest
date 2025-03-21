import React from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">SIGN IN</h1>
        <p className="signin-subtitle">ENTER YOUR EMAIL AND PASSWORD</p> {/* Updated subtitle */}
        <form className="signin-form">
          <input type="email" placeholder="Enter your email" className="signin-input" />
          <input type="password" placeholder="Enter your password" className="signin-input" />
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <div className="signin-footer">
          <span className="or-text">or</span>
          <Link to="/signup" className="signin-text">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
