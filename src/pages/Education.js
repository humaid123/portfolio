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
        importantNote={"Graduated May 2022"}
        description={
          "I was a COOP Double Honours in Computer Science and Mathematics Student. My GPA is 4.28/4.3 and my notable accomplishments at SMU are: "
        }
        bullets={[
          "I graduated summa cum laude and received the Faculty of Science - Gold Medal, an award given to the 2022 graduate with the highest academic achievement.",
          "SMU Presidential Scholarship, which is the major entrance scholarship at SMU based on high school grades and extracurriculars.",
          "I was placed on the Dean's list every year at SMU.",
          "I received Research Awards for research during the summer term of my Second, Third and Fourth year.",
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
        title={"Parallellisation of BVP_SOLVER - Ongoing"}
        where={" Saint Mary's University"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Addded Parallelisation to the famous BVODE solver, used in scipy.integrate.solve_bvp, by using Fortran with OpenMP and parallel BABD solver, RSCALE.",
        ]}
      />
      <Card
        title={
          "Performance Analysis of ODE Solvers on Covid-19 Models with Discontinuities"
        }
        where={"Saint Mary's University"}
        importantNote={"Published Tech Report"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Further exploration of discontinous Covid-19 ODE models where we solve some of the issues discovered in my honors thesis and model a discontinuity using a sharply changing function (sigmoid and inverse sigmoid) instead of a sharp cutoff if-statement.",
        ]}
      />
      <Card
        title={
          "Further exploration into using Hermite-Birkhoff interpolants for continuous numerical differential equation solvers"
        }
        where={"Saint Mary's University"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Extension of previous work of using defect control with Hermite-Birkhoff interpolants by instead equiping a Runge-Kutta methods with two interpolants and doing error control based on the difference between them",
          "Also developed a 10th order interpolant and discussed the tradeoffs and problems of using this method as opposed to traditional CRKs.",
        ]}
      />
      <Card
        title={
          "Performance analysis on covid-19 models with discontinuities and efficient defect control for initial value ODE solvers"
        }
        where={"Saint Mary's University"}
        importantNote={"Honors Thesis"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "My honors thesis consisted of two parts:",
          "The first part was summarising the research into improving the accuracy and efficiency of ODE and PDE solvers for solving Covid-19 models.",
          "The second part was abou providing continuous solutions to numerical differential equations by using Hermite interpolants for defect control.",
        ]}
      />
      <Card
        title={"IVODE solver with defect control"}
        where={"Saint Mary's University"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Looked into optimizing defect control solvers using a new method using Hermite-Birkhoff interpolants instead of tradition CRK formulae.",
          "Coded a 6th and 8th order Runge-Kutta solver with interpolants of 6th and 8th order to show defect control capabilities of this new method as a proof of concept.",
        ]}
      />

      <Card
        title={"Covid-19 modelling with PDEs"}
        where={"Saint Mary's University"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Looked into discontinuity problems in PDES and how they affect Covid-19 PDE models.",
          "Used BACOLIKR, a PDE solver based on B-spline collocation with event detection capabilities, " +
            "to discuss methods to improve the accuracy and performance of solving discontinuous PDE problems.",
        ]}
      />
      <Card
        title={"Covid-19 modelling with ODEs"}
        where={"Saint Mary's University"}
        description={"Supervised by Dr. Paul Muir"}
        bullets={[
          "Looked into discontinuity problems in ODES and how they affect Covid-19 models.",
          "Did a survey of popular ODE solvers in Python, R, Scilab and Matlab on how they react to discontinuities.",
          "Discussed methods to improve the accuracy and performance of these popular ODE solvers with event detection.",
          "Later on",
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
