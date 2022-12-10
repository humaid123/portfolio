import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animation from "../animations/theme.json";
import { FaChevronCircleRight } from "react-icons/fa";

function High() {
  return <div className="high" />;
}

function Medium() {
  return <div className="medium" />;
}

function Introductory() {
  return <div className="introductory" />;
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
    <div className="card unclickableCard">
      <h1>
        <em>Languages</em>
      </h1>
      <div>
        <Row text="Java" order={1} level="High" />
        <Row text="JavaScript" order={2} level="High" />
        <Row text="TypeScript" order={3} level="High" />
        <Row text="Python" order={4} level="Medium" />
        <Row text="Kotlin" order={5} level="Introductory" />
      </div>
    </div>
  );
}

function WebDevelopment() {
  return (
    <div className="card unclickableCard">
      <h1>
        <em>Web Development</em>
      </h1>
      <div>
        <Row text="Guice/Guava" order={1} level="High" />
        <Row text="React" order={2} level="High" />
        <Row text="MERN" order={3} level="High" />
        <Row text="Spring" order={4} level="Medium" />
        <Row text="Websocket" order={5} level="Medium" />
        <Row text="Three.js" order={6} level="Introductory" />
      </div>
    </div>
  );
}

function MachineLearning() {
  return (
    <div className="card unclickableCard">
      <h1>
        <em>Data Science</em>
      </h1>
      <div>
        <Row text="NumPy" order={1} level="High" />
        <Row text="SciPy" order={2} level="High" />
        <Row text="Pandas" order={3} level="Medium" />
        <Row text="Matplotlib" order={4} level="Medium" />
        <Row text="Scikit-Learn" order={5} level="Introductory" />
        <Row text="TensorFlow" order={6} level="Introductory" />
      </div>
    </div>
  );
}

function OtherSkills() {
  return (
    <div className="card unclickableCard">
      <h1>
        <em>Other Strong Skills</em>
      </h1>
      <div>
        <Row text="Github" order={1} level="High" />
        <Row text="Linux" order={2} level="High" />
        <Row text="OOP" order={3} level="Medium" />
        <Row text="AWS" order={4} level="Medium" />
        <Row text="Docker" order={5} level="Medium" />
        <Row text="SQL" order={6} level="Medium" />
        <Row text="Matlab/Scilab" order={7} level="Introductory" />
      </div>
    </div>
  );
}

function Interpretation() {
  return (
    <div className="card unclickableCard">
      <h1>
        <em>Barchart Interpretation</em>
      </h1>
      <div>
        <Row text="Proficient" order={1} level="High" />
        <Row text="Skilled" order={2} level="Medium" />
        <Row text="Introductory" order={3} level="Introductory" />
      </div>
    </div>
  );
}

function Intro() {
  const animationRef = useRef();
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationRef.current,
      animationData: animation,
      autoplay: false,
      renderer: "svg",
      loop: true,
      rendererSettings: {
        progressiveLoad: true,
      },
    });
    setTimeout(() => {
      anim.play();
    }, 100);
    return () => {
      Lottie.destroy();
    };
  }, []);

  return (
    <div className="left">
      <div style={{ display: "flex" }}>
        <div style={{ width: "10em", height: "10rem" }} ref={animationRef} />
        <div>
          <h2>
            <em>Demonstrated aptitude for:</em>
          </h2>
          <p>
            <FaChevronCircleRight
              style={{
                fontSize: "0.8rem",
                color: "var(--highlight)",
                marginRight: "0.5rem",
              }}
            />
            <em>Problem solving</em> through participation in Computer Science
            and Mathematics research and independent projects.
          </p>
          <p>
            <FaChevronCircleRight
              style={{
                fontSize: "0.8rem",
                color: "var(--highlight)",
                marginRight: "0.5rem",
              }}
            />
            <em>Active Learning</em> though extensive self-learning via online
            bootcamp, research papers and tech tutorials.
          </p>
          <p>
            <FaChevronCircleRight
              style={{
                fontSize: "0.8rem",
                color: "var(--highlight)",
                marginRight: "0.5rem",
              }}
            />
            <em>Team working</em> by collaborating with the Bank One, Discovery
            Center, research and student project teams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <Intro />
      <div>
        <Interpretation />
        <Languages />
        <WebDevelopment />
        <MachineLearning />
        <OtherSkills />
      </div>
    </>
  );
}
