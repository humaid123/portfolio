import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function LinkedInLink() {
  return (
    <span>
      <a href="https://www.linkedin.com/in/humaid-muhammad-agowun/">
        <FaLinkedin /> Linked in
      </a>
    </span>
  );
}

function GithubLink() {
  return (
    <span>
      <a href="https://github.com/humaid123/">
        <FaGithub /> Github
      </a>
    </span>
  );
}

export default function About() {
  return (
    <div>
      <h1>Get in touch</h1>
      <LinkedInLink />
      <GithubLink />
    </div>
  );
}
