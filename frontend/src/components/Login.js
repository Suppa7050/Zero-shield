import React from 'react';
import "./Login.css"
const Login= () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='Login'>
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-span">
        <label htmlFor="email" className="label">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="input-span">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div className="span">
        <a href="#">Forgot password?</a>
      </div>
      <input className="submit" type="submit" value="Log in" />
      <div className="span">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </form>
    </div>
  );
};

export default Login;
