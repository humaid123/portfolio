import React, { useState, useRef, useEffect } from "react";
import Card from "../components/Card";
import Lottie from "lottie-web";
import animation from "../animations/work.json";

function Research() {
  return (
    <div>
      <Card
        title={"Research Assitant - Numerical Analysis"}
        where={"Saint Mary's University, Halifax, NS"}
        bullets={[
          "Researched how discontinuities affect IVODE and PDE solvers in R, Python, Matlab and Scilab.",
          "Improved the performance of the popular BVODE solver, BVP_SOLVER2, used for instance in scipy.integrate.solve_bvp by using Parallel Computing (Fortran OpenMP)",
          "Created Python wrappers for BVODE and PDE solvers to be used in scipy.integrate.",
          "Supervised by Dr. Paul Muir",
        ]}
      />
      <Card
        title={"Research Assitant - Business Intelligence"}
        where={"Saint Mary's University, Halifax NS"}
        bullets={[
          "Optimised segmented linear regression algorithm with Dynamic Programming (Python/Numpy, Java/Apache Common Maths)",
          "Reported on the current state of No/Low Code platforms, Machine Learning (decision trees, segmented linear regression) and agile (Kanban) ",
          "Supervised by Dr. Hai Wang.",
        ]}
      />
    </div>
  );
}

function SoftwareDevelopment() {
  return (
    <div>
      <Card
        title={"Coop Software Developer"}
        where={"The Discovery Centre, Halifax, NS"}
        bullets={[
          "Automated the contents of screens in the centre with a MERN App based on a calendar. " +
            "First, I created a basic CMS to upload files and create templates (Multer). " +
            "A socket.io server uses CRON jobs to schedule and display these templates based on an office " +
            "calendar for each screen, queried by MS graph API. Also, added a way to monitor the screens using WebRTC.",
          "Improved design process by building tools to make virtual copies of exhibits before physical mock-ups are made (Unreal Engine)",
          "Collaborated with graphic designers to create an interactive butterfly app where users can colour " +
            "butterflies and submit them to be animated on a big atrium display. Used: Three.js, Express, WebSocket and other SVG and Canvas APIs.",
          "Built micro-controller game where users match wires where correct matches makes a model airplane move. (C teensy libraries)",
        ]}
      />
      <Card
        title={"IT Security intern"}
        where={"Bank One, Port Louis, Mauritius"}
        bullets={[
          "Obtained Security incidence response Training.",
          " Main Project was to create data visualisation tool to improve resource allocations using MS Power BI.",
        ]}
      />
    </div>
  );
}

export default function Work() {
  const [showResearch, setShowResearch] = useState(false);
  const animationRef = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: animationRef.current,
      animationData: animation,
      autoplay: true,
      renderer: "svg",
      loop: true,
      rendererSettings: {
        progressiveLoad: true,
      },
    });
    return () => {
      Lottie.destroy();
    };
  }, []);

  return (
    <>
      <div className="left slider-nav">
        <div style={{ display: "flex" }}>
          <div style={{ width: "15rem", height: "10rem" }} ref={animationRef} />
        </div>
        <div
          onClick={() => setShowResearch(false)}
          className="button1-container"
        >
          <div className={showResearch ? "button1" : "button1 selectedButton"}>
            Software Development
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
      <div style={{ paddingTop: "5vh" }}>
        {showResearch ? <Research /> : <SoftwareDevelopment />}
      </div>
    </>
  );
}
