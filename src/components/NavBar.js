import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaLightbulb,
  FaFeatherAlt,
  FaGreaterThan,
  FaStar,
} from "react-icons/fa";

export default function NavBar() {
  const [darkTheme, setDarkTheme] = useState(true);

  function changeTheme() {
    if (darkTheme) {
      document.documentElement.style.setProperty("--text-primary", "#23232e");
      document.documentElement.style.setProperty("--text-secondary", "#141418");
      document.documentElement.style.setProperty("--bg-primary", "white");
      document.documentElement.style.setProperty("--bg-secondary", "lightgrey");
      document.documentElement.style.setProperty("--highlight", "purple");
      document.documentElement.style.setProperty("--shadow", "lightgrey");
      document.documentElement.style.setProperty("--high", "#008ac5");
      document.documentElement.style.setProperty(
        "--medium",
        "rgb(199, 15, 199)"
      );
      document.documentElement.style.setProperty("--introductory", "#0b1d78");
      setDarkTheme(false);
    } else {
      document.documentElement.style.setProperty("--text-primary", "#b6b6b6");
      document.documentElement.style.setProperty("--text-secondary", "#ececec");
      document.documentElement.style.setProperty("--bg-primary", "#23232e");
      document.documentElement.style.setProperty("--bg-secondary", "#141418");
      document.documentElement.style.setProperty("--highlight", "lightskyblue");
      document.documentElement.style.setProperty("--shadow", "black");
      document.documentElement.style.setProperty("--high", "#03dac6");
      document.documentElement.style.setProperty("--medium", "#bb86fc");
      document.documentElement.style.setProperty("--introductory", "#3700b3");
      setDarkTheme(true);
    }
  }

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <FaGreaterThan />
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <FaHome className="icon" />
            <span className="link-text">Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">
            <FaCode className="icon" />
            <span className="link-text">Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/work">
            <FaBriefcase className="icon" />
            <span className="link-text">Work</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            <FaLightbulb className="icon" />
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/education">
            <FaFeatherAlt className="icon" />
            <span className="link-text">Education</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            id="theme-nav-link"
            onClick={changeTheme}
            to="#"
          >
            <FaStar className="icon" />
            <span className="link-text">Theme</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
