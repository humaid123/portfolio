import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/work">Work Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
}
