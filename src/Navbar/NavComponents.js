import React from "react";
import "./NavbarDesign.css";
import SustLogo from "../images/sust2.PNG";
import { NavLink } from "react-router-dom";

function NavComponents() {
  return (
    <nav className="mynav navbar navbar-expand-md navback navbar-dark sticky-top">
      <img className="navbar-brand logo" src={SustLogo} alt="App Logo" />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/books">
              Books
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              SignUp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponents;
