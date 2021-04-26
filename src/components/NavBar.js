import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaLightbulb,
  FaFeatherAlt,
  FaShareAlt,
  FaGreaterThan,
} from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <FaGreaterThan />
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <FaHome className="icon" />
            <span className="link-text">Home</span>
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
            <span className="link-text">Work Experience</span>
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
          <Link className="nav-link" to="/contacts">
            <FaShareAlt className="icon" />
            <span className="link-text">Contacts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
