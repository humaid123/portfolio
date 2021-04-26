import React, { useState, useEffect } from "react";

const home_style = {
  display: "flex",
  width: "90vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

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
    </div>
  );
}
