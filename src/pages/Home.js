import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const home_style = {
  display: "flex",
  width: "90vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function LinkedInLink() {
  return (
    <div>
      <a
        className="contactLink"
        href="https://www.linkedin.com/in/humaid-muhammad-agowun/"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

function GithubLink() {
  return (
    <div>
      <a className="contactLink" href="https://github.com/humaid123/">
        <FaGithub />
      </a>
    </div>
  );
}

function Contact() {
  return (
    <div className="contacts">
      <LinkedInLink />
      <GithubLink />
    </div>
  );
}

export default function Home() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimate(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    } else {
      setAnimate(false);
    }
  }, [animate]);

  return (
    <div className={animate ? "animated-home" : "home"} style={home_style}>
      <span className="name">Humaid M.</span>
      <span className="name">Agowun</span>
      <p className="title">Developer, Student, Researcher</p>
      <Contact />
    </div>
  );
}
