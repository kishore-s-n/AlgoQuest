import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';  
import Hero from './Components/hero/Hero'; 
import SignInPage from './Pages/signInPage/SignInPage';
import SignUpPage from './Pages/signUpPage/SignUpPage';
import Levels from './Pages/levels/Levels';
import CodingPage from './Pages/codingPage/CodingPage';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Hero section is displayed on the Home page */}
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/rules" element={<div>Rules Page</div>} />
        <Route path="/leaderboard" element={<div>Leaderboard Page</div>} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/coding" element={<CodingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
