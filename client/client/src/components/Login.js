import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-box">
      <h1 className="login-title">Spotify</h1>
      <form className="login-form" onSubmit={handleSignIn}>
        <input type="text" className="login-input" placeholder="Username" />
        <input type="password" className="login-input" placeholder="Password" />
        <button type="submit" className="login-button">
          SIGN IN
        </button>
      </form>
      <a href="/forgot-password" className="login-forgot-password">
        Forgot Password?
      </a>
      <a href="/register" className="login-register-button">
        Register
      </a>
    </div>
  );
};

export default Login;
