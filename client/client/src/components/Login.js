import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate("/songs");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">Musix</h1>
      <form className="loginForm" onSubmit={handleSignIn}>
        <input type="text" className="loginInput" placeholder="Username" />
        <input type="password" className="loginInput" placeholder="Password" />
        <button type="submit" className="loginButton">SIGN IN</button>
      </form>
      <a href="/forgot-password" className="forgotPasswordLink">
        Forgot Password?
      </a>
      <button onClick={handleRegister} className="registerButton2">
        Register
      </button>
    </div>
  );
};

export default Login;
