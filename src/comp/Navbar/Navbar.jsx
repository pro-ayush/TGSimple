import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src={require("../../resources/logo.png")}
            alt="Logo"
          />
        </a>



        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto px-">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="https://triplegemsbuilders.ca/services">
              Services
            </a>
            <a className="nav-link" href="https://triplegemsbuilders.ca/projects">
              Projects
            </a>
            <a className="nav-link" href="https://triplegemsbuilders.ca/contact">
              About
            </a>
          </div>
        </div>

        
      </div>
    </nav>
  );
}
