import React from "react";

import logo from './images/logo.jpg';

const Navbar = () => {
  return (


    <nav className="container-fluid bg navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <img className="logo-img" alt="logo" src={logo} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>

          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#faq">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-warning" type="submit">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;