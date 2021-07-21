import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Lottie from "lottie-web";
import animation from "../animations/new-home3.json";

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
  const animationRef = useRef();

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimate(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    } else {
      setAnimate(false);
    }
  }, [animate]);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationRef.current,
      animationData: animation,
      loop: true,
      renderer: "svg",
      rendererSettings: {
        progressiveLoad: true,
      },
    });
    return () => {
      Lottie.destroy();
    };
  }, []);

  return (
    <div className={animate ? "animated-home" : "home"} style={home_style}>
      <div
        style={{ width: "25em", height: "15em", marginLeft: "5em" }}
        ref={animationRef}
      />
      <p className="home-name">Humaid M. Agowun</p>
      <p className="title">Developer, Student, Researcher</p>
      <Contact />
    </div>
  );
}
