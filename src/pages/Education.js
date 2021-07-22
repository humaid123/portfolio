import React, { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import Lottie from "lottie-web";
import animation from "../animations/new-education2.json";

function Education() {
  return (
    <div>
      <Card
        title={"Bsc - Double Honours Maths and Computer Science"}
        where={"Saint Mary's University, Halifax, NS"}
        description={
          "I am a COOP Double Honours in Computer Science and Mathematics Student. My GPA is 4.28/4.3 and my notable accomplishments at SMU are: "
        }
        bullets={[
          "SMU Presidential Scholarship, which is the major entrance scholarship at SMU based on high school grades and extracurriculars.",
          "I was placed on the Dean's list every year at SMU.",
          "I received Research Awards for research during the summer term of my Second and Third year.",
        ]}
      />
      <Card
        title={"JavaScript and Python Certificates"}
        where={"FreeCodeCamp"}
        description={
          "I participated in an online bootcamp during the pandemic with the goal of improving on all my JavaScript and Python skills (with the related libraries)."
        }
        bullets={[
          "Learnt more about MERN, Sass, socket.io, web security, responsive design and data visualisation (D3.js) through projects.",
          "Learnt more about the data analysis and machine learning (Pandas, Matplotlib, SKLearn, Tensorflow) through projects.",
        ]}
      />
    </div>
  );
}

function Research() {
  return (
    <div>
      <Card
        title={"Parallellisation of BVP_SOLVER"}
        where={" Saint Mary's University"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Addded Parallelisation to the famous BVODE solver, used in scipy.integrate.solve_bvp, by using Fortran with OpenMP and parallel BABD solver, RSCALE.",
        ]}
      />
      <Card
        title={"Covid-19 modelling with ODEs"}
        where={"Saint Mary's University"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Looked into discontinuity problems in ODES and how they affect Covid-19  models.",
          "Did a survey of popular ODE solvers in Python, R, Scilab and Matlab on how they react to discontinuities.",
          "Discussed methods to improve the accuracy and performance of these popular ODE solvers with event detection.",
        ]}
      />
      <Card
        title={"Business Intelligence Reports"}
        where={"Saint Mary's University"}
        description={"Supervised by Dr. Hai Wang"}
        bullets={[
          "Optimised a segmented linear regression algorithm using Dynamic Programming and Restricted growth strings.",
          "Reported on the state of agile (Kanban), No/Low code platforms and decision trees for future work from Dr. Hai Wang.",
        ]}
      />
    </div>
  );
}

export default function MoreAboutMe() {
  const [showResearch, setShowResearch] = useState(false);
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
    <>
      <div className="left slider-nav">
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "fit-content", height: "10rem" }}
            ref={animationRef}
          />
        </div>
        <div
          onClick={() => setShowResearch(false)}
          className="button1-container"
        >
          <div className={showResearch ? "button1" : "button1 selectedButton"}>
            Education
          </div>
        </div>
        <div
          onClick={() => setShowResearch(true)}
          className="button1-container"
        >
          <div className={showResearch ? "button1 selectedButton" : "button1"}>
            Research
          </div>
        </div>
      </div>
      <div>{showResearch ? <Research /> : <Education />}</div>
    </>
  );
}
