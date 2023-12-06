// landing.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Landing.css';
import Register from './Register';

const Login = () => <div>Login Page</div>;

const Landing = () => {
  return (
    <div className="landing-body"> {/* Add the landing-body class here */}
      <div className="header">
        <div className="buttons-container">
          <Link to="/login" className="button">
            Login
          </Link>
          <Link to="/register" className="button">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="landing-container"> {/* Keep the landing-container class here */}
        <h1>MUSIX</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
