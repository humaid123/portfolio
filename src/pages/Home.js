import React, { useState, useEffect } from "react";

const home_style = {
  display: "flex",
  width: "90vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const name_style = { padding: 0, margin: 0, marginLeft: 20, fontSize: "5rem" };

const title_style = { marginLeft: "10rem", fontSize: "2rem" };
export default function Home() {
  return (
    <div className="home" style={home_style}>
      <p style={name_style}>Humaid M. Agowun</p>
      <p style={title_style}>Developer, Student, Researcher</p>
    </div>
  );
}
