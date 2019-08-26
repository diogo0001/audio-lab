import React from "react";
import styles from "styled-components";

export default function Navbar() {
  return (
    <nav
      className=" header navbar navbar-expand-lg navbar-dark bg-dark  "
      style={{
        padding: "12px 0px 12px 30px",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        index: "9"
      }}
    >
      <img src={"../assets/icons/audio-icon.ico"}></img>
      <a
        className="navbar-brand "
        href="#"
        style={{ fontSize: "24px", marginLeft: "20px" }}
      >
        Audio Tech Lab
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ fontSize: "18px" }}>
          <li className="nav-item active">
            <a className="nav-link ml-4" href="#">
              Products
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link ml-4" href="#">
              Services
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link ml-4" href="#">
              Tutorials
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link ml-4" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link ml-4" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button type="button" className="btn btn-light ml-4 mr-2 sm ">
          Sign In
        </button>
        <button type="button" className="btn btn-light ml-2 mr-4 sm">
          Login
        </button>
      </div>
    </nav>
  );
}
