import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const handleClick = (buttonName) => {
    alert(`Test alert: You clicked on ${buttonName}`);
  };

  return (
    <nav className="navbar">
      <img className="navbar-logo" src={logo} alt="Logo" />
      <ul className="navbar-links">
        <li>
          <a href="#about" onClick={() => handleClick("About")}>
            About
          </a>
        </li>
        <li>
          <a href="#project" onClick={() => handleClick("Project")}>
            Project
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleClick("Contact")}>
            Contact
          </a>
        </li>
        <li>
          <a href="#download" onClick={() => handleClick("Download")}>
            Download
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
