import React from "react";

function High() {
  return <div style={{ background: "#03DAC6", width: "80%", height: "1em" }} />;
}

function Medium() {
  return <div style={{ background: "#BB86FC", width: "60%", height: "1em" }} />;
}

function Introductory() {
  return <div style={{ background: "#3700B3", width: "40%", height: "1em" }} />;
}

function Row(props) {
  let level;
  if (props.level === "High") level = <High />;
  else if (props.level === "Medium") level = <Medium />;
  else if (props.level === "Introductory") level = <Introductory />;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
      <div className="item">{props.text}</div>
      <div
        className="level skillsRow"
        style={{ "--animation-order": props.order }}
      >
        {level}
      </div>
    </div>
  );
}

function Languages() {
  return (
    <div className="skillsCard">
      <h1>Languages</h1>
      <div>
        <Row text="JavaScript (ES6+)" order={1} level="High" />
        <Row text="Python" order={2} level="High" />
        <Row text="C++" order={3} level="Medium" />
        <Row text="Java" order={4} level="Introductory" />
      </div>
    </div>
  );
}

function WebDevelopment() {
  return (
    <div className="skillsCard">
      <h1>Web Development</h1>
      <div>
        <Row text="React" order={1} level="High" />
        <Row text="MERN" order={2} level="High" />
        <Row text="jQuery" order={3} level="High" />
        <Row text="TypeScript" order={4} level="Medium" />
        <Row text="Sass" order={5} level="Medium" />
        <Row text="Firebase" order={6} level="Introductory" />
      </div>
    </div>
  );
}

function MachineLearning() {
  return (
    <div className="skillsCard">
      <h1>Data Analysis and Machine Learning</h1>
      <div>
        <Row text="Numpy/Scipy" order={1} level="High" />
        <Row text="Pandas" order={2} level="High" />
        <Row text="Matplotlib" order={3} level="High" />
        <Row text="Scikit Learn" order={4} level="Medium" />
        <Row text="TensorFlow" order={5} level="Introductory" />
      </div>
    </div>
  );
}

function OtherSkills() {
  return (
    <div className="skillsCard">
      <h1>Other Strong Skills</h1>
      <div>
        <Row text="OOP" order={1} level="High" />
        <Row text="SQL" order={2} level="High" />
        <Row text="Matlab/Scilab" order={3} level="Medium" />
      </div>
    </div>
  );
}

function SoftSkills() {
  return (
    <div className="skillsAdditionalInfo">
      <h1>Skills</h1>
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
    <div style={{ width: "95%" }}>
      <SoftSkills />
      <div className="skillsLayout">
        <Languages />
        <WebDevelopment />
        <MachineLearning />
        <OtherSkills />
      </div>
    </div>
  );
}
