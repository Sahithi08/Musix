import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the registration logic
    navigate('/login');
  };

  return (
    <div className='registerContainer'>
      <h1 className='registerTitle'>Register</h1>
      <form className='registerForm' onSubmit={handleSubmit}>
        <input
          type='text'
          className='registerInput'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          className='registerInput'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='registerInput'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='tel'
          className='registerInput'
          placeholder='Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type='submit' className='registerButton'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
