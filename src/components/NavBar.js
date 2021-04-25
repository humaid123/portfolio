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
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <FaGreaterThan />
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/">
            <FaHome className="icon" />
            <span class="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">
            <FaCode className="icon" />
            <span class="link-text">Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/work">
            <FaBriefcase className="icon" />
            <span class="link-text">Work Experience</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            <FaLightbulb className="icon" />
            <span class="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/education">
            <FaFeatherAlt className="icon" />
            <span class="link-text">Education</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacts">
            <FaShareAlt className="icon" />
            <span class="link-text">Contacts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
