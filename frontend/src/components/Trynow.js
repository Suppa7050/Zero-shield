import React from 'react';
import './Trynow.css';

const Trynow = ({ user }) => {
  const href = user ? '/scan' : '/signup';

  return (
    <div className="trynow-container">
      <a href={href} className="trynow-button">
        Try now
      </a>
    </div>
  );
};

export default Trynow;
