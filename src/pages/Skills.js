import React from "react";

function High() {
  return <div style={{ backgroundColor: "green", width: "5em" }} />;
}

function Medium() {
  return <div style={{ BackgroundColor: "orange", width: "4em" }} />;
}

function Introductory() {
  return <div style={{ BackgroundColor: "yellow", width: "3em" }} />;
}

function Row(props) {
  let level;
  if (props.level === "High") level = <High />;
  else if (props.level === "Medium") level = <Medium />;
  else if (props.level === "Introductory") level = <Introductory />;
  return (
    <div>
      <div className="item">{props.text}</div>
      <div className="level">{level}</div>
    </div>
  );
}

function Languages() {
  return (
    <div>
      <h1>Languages</h1>
      <div className="table">
        <Row text="JavaScript (ES6+)" level="High" />
        <Row text="Python" level="High" />
        <Row text="C++" level="Medium" />
        <Row text="Java" level="Introductory" />
      </div>
    </div>
  );
}

function WebDevelopment() {
  return (
    <div>
      <h1>Web Development</h1>
      <div className="table">
        <Row text="React" level="High" />
        <Row text="MERN" level="High" />
        <Row text="jQuery" level="High" />
        <Row text="TypeScript" level="Medium" />
        <Row text="Sass" level="Medium" />
        <Row text="Firebase" level="Introductory" />
      </div>
    </div>
  );
}

function MachineLearning() {
  return (
    <div>
      <h1>Data Analysis and Machine Learning</h1>
      <div className="table">
        <Row text="Numpy/Scipy" level="High" />
        <Row text="Pandas" level="High" />
        <Row text="Matplotlib" level="High" />
        <Row text="Scikit Learn" level="Medium" />
        <Row text="TensorFlow" level="Introductory" />
      </div>
    </div>
  );
}

function OtherSkills() {
  return (
    <div>
      <h1>Other Strong Skills</h1>
      <div className="table">
        <Row text="OOP" level="High" />
        <Row text="SQL" level="High" />
        <Row text="Matlab/Scilab" level="Medium" />
      </div>
    </div>
  );
}

function SoftSkills() {
  return (
    <div>
      <h1>Important Soft Skills</h1>
      <p>
        Strong <em>problem solving skills</em> being a Maths major and doing
        research.
      </p>
      <p>
        Strong <em>Active learning skills</em> by constantly learning new
        technologies, software development, algorithms and so on.
      </p>
      <p>
        Strong <em>Time management skills</em> by keeping up high academic
        performance while working, coding personal projects and researching.
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <div>
      <Languages />
      <WebDevelopment />
      <MachineLearning />
      <OtherSkills />
      <SoftSkills />
    </div>
  );
}
