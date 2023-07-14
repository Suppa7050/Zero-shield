import React from "react";
import "./Front.css";
const Footer = () => {
  return (
    <div class="Footer">
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>
                We are Hackers <br /> A team from KMIT Project School
              </p>
            </div>
            <div className="col-md-4">
              <h3>Contact</h3>
              <p>Email: detectivezeroday@gmail.com</p>
              <p>Phone: 6300569470</p>
            </div>
            <div className="col-md-4 " >
              <h3>Follow Us</h3>
              <div >
                {/* <a href="#">
                  <i className="fa fa-facebook mr-3"></i>{" "}
                </a>
                <a href="#">
                  <i className="fa fa-twitter mr-3"></i>
                </a> */}
                <a
                  href="https://www.instagram.com/useful.idiotss/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram">detectivezeroday</i> 
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark text-light text-center py-3">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
