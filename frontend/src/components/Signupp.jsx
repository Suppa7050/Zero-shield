import React, { useState } from 'react';
import './Signupp.css';
import { useNavigate } from 'react-router-dom';

const Signupp = ({ handlelogin }) => {
  const navigate = useNavigate();
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://zero-backend.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: signupEmail,
          password: signupPassword,
        }),
      });
      const Data = await response.json();
      if (Data.message === true) {
        console.log('Registered');
        alert('User registered. Please login now');
      } else {
        console.error('Signup failed', Data.message);
        window.alert('User already exists. Please login now');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://zero-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginEmail,
          password: loginPassword,
        }),
      });
      const data = await response.json();
      if (data.message === true) {
        console.log(data);
        handlelogin(data);
        alert('Login Successful.');
        navigate('/scan');
      } else {
        alert('Invalid credentials');
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="login">
        <form className="form" onSubmit={handleLoginSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Log in
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
      <div className="register">
        <form className="form" onSubmit={handleSignupSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Register
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={signupEmail}
            onChange={(event) => setSignupEmail(event.target.value)}
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={signupPassword}
            onChange={(event) => setSignupPassword(event.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signupp;
