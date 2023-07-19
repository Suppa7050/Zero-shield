import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup({ handlelogin }) {
  const navigate = useNavigate();
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    if (!signupEmail.endsWith('@gmail.com')) {
      alert('Email must end with "@gmail.com"');
      return;
    }
    if (signupPassword === '') {
      alert('Password cannot be empty');
      return;
    }

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
        console.log("Registered");
        alert("User registered. Please login now");
      } else {
        console.error("Signup failed", Data.message);
        window.alert("User already exists. Please login now");
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (!loginEmail.endsWith('@gmail.com')) {
      alert('Email must end with "@gmail.com"');
      return;
    }
    if (loginPassword === '') {
      alert('Password cannot be empty');
      return;
    }

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
        alert("Login Successful.");
        navigate('/scan');
      } else {
        alert("Invalid credentials");
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <div className='handleboth'>
        <div className='register'>
          <form className='registerform' onSubmit={handleSignupSubmit}>
            <p className="registertitle">Sign up for an account</p>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter email"
                value={signupEmail}
                onChange={(event) => setSignupEmail(event.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter password"
                value={signupPassword}
                onChange={(event) => setSignupPassword(event.target.value)}
              />
            </div>
            <p></p>
            <button type="submit" className="submit">Sign up</button>
          </form>
        </div>
        <div className="xyz">
          <img
            src="https://www.seekpng.com/png/full/10-104124_line-transparent-shadow-white-vertical-line-transparent.png"
            style={styles.xyz}
            alt="Vertical Line"
          />
        </div>
        <div className='login'>
          <form className='loginform' onSubmit={handleLoginSubmit}>
            <p className="logintitle">Log in to your account</p>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
              />
            </div>
            <p></p>
            <button type="submit" className="submit">Log in</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="contact-details">
          <span>Github</span>
        </div>
      </footer>
    </div>
  );
};

export default Signup;

const styles = {
  xyz: {
    width: "70%"
  },
};
