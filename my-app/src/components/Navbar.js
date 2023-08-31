import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home 🏠
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/dance" className="navbar-link">
            Dance 🕺🏽
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/swimming" className="navbar-link">
            Swimming 🏊‍♂️
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/karate" className="navbar-link">
            Karate 🥋
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/progress" className="navbar-link">
            About Us 🩷
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            Contact ✉️
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
