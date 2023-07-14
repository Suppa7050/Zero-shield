import React from "react";
import "./Front.css";
import { useNavigate } from "react-router-dom";

const Navbarpr = ({ handleLogout, user }) => {
  const navigate = useNavigate();

  const handleWhatsAppShare = () => {
    const url = window.location.href;
    const encodedUrl = encodeURIComponent(url);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleLogoutClick = () => {
    if (user) {
      handleLogout();
    }
    navigate("/signup");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a href="/" className="logo">
          <img
            src="https://i.ibb.co/SrWrG53/bd4122c30b46f86ac77b03c1d3aea208.jpg"
            alt="LOGO"
            height="30px"
            width="30px"
          />
        </a>
        <a className="navbar-brand" href="#">
          ZEROSHIELD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex">
              <a className="nav-link active" href="/about">
                About
              </a>

              {user ? (
                <div className="nav-link dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.username}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li> */}
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleLogoutClick}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <a className="nav-link active" href="/signup">
                  Signup
                </a>
              )}

              <a className="nav-link active" onClick={handleWhatsAppShare}>
                Share
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarpr;
