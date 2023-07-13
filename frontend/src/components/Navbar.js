import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container-fluid">
      <img src="https://i.ibb.co/SrWrG53/bd4122c30b46f86ac77b03c1d3aea208.jpg" alt="logo" width="40px" height="40px" />
      <a className="navbar-brand" href="#">
        <span style={{ marginLeft: '5px' }}>ZEROSHIELD</span>
      </a>
      
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
         <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="Home.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Yield.html">
              Predict Yield
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
        {/*
        <form class="d-flex ms-auto order-5">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
          </form>*/ }
      </div> 
      
          <button class="ms-auto"
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
          </div>
    </nav>
  );
};

export default Navbar;
