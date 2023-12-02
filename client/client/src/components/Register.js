import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const history = useNavigate();
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();


    history("/login");
  };

  return (
    <div className="register-box">
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="register-input"
          placeholder="UserName"
          value={name}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="email"
          name="email"
          className="register-input"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          className="register-input"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="tel"
          name="phonenumber"
          className="register-input"
          placeholder="Phone Number"
          value={phonenumber}
          onChange={(event) => setPhonenumber(event.target.value)}
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
