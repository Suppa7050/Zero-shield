import React from 'react';
import "./Logintoggle.css"
const Logintoggle = () => {
  const handleToggle = () => {
    // Handle toggle logic here
  };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" onChange={handleToggle} />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" action="">
                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                <button className="flip-card__btn">Let's go!</button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" action="">
                <input className="flip-card__input" placeholder="Name" type="name" />
                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Logintoggle;
