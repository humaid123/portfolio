import React, { useState, useRef, useEffect } from "react";
import Card from "../components/Card";
import Lottie from "lottie-web";
import animation from "../animations/work.json";

function Research() {
  return (
    <div>
      <Card
        title={"Research Assistant - Scientific Computing"}
        where={"Saint Mary's University, Halifax, NS"}
        description={"May 2021 - Present"}
        bullets={[
          "Researched how discontinuities affect IVODE solvers in R, Python, Matlab, Scilab and Fortran code.",
          "Improved the performance of the popular BVODE solver, BVP_SOLVER2, used in scipy.integrate.solve_bvp, by using Parallel Computing (Fortran, OpenMP).",
          "Supervised by Dr. Paul Muir.",
        ]}
      />
      <Card
        title={"Research Assistant - Business Intelligence"}
        where={"Saint Mary's University, Halifax NS"}
        description={"June 2020 - August 2020"}
        bullets={[
          "Optimised segmented linear regression algorithm with Dynamic Programming (Python/Numpy, Java/Apache Common Maths).",
          "Reported on the current state of No/Low Code platforms, Machine Learning (decision trees, segmented linear regression) and agile (Kanban).",
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
        description={"Jan 2022 - Present"}
        bullets={[
          "Improved MERN CMS built during previous internship by adding new graphical elements, doing bug fixes and adding new socket.io based live messaging feature to broadcast automatic messages to visitors based on a calendar.",
          "(Ongoing) Automating monitoring, turning on and off exhibit at the centre with a MERN app.",
        ]}
      />
      <Card
        title={"Coop Software Developer"}
        where={"The Discovery Centre, Halifax, NS"}
        description={"May 2021 - August 2021"}
        bullets={[
          "Streamlined Content Management by building a MERN CMS. It uses fs and Multer to do file management and uploading, allows creating dynamic playlists by using the uploaded assets and is secured via LDAP authentication.",
          "Automated the screens around the centre using a MERN App that syncs the screens in the centre with an MS Office Calendar. Uses socket.io to do the syncing and fetches playlists and other data from the above CMS’s database.",
          "Collaborated with graphic designers to create an interactive butterfly app where users can colour butterflies and submit them to be animated on a big atrium display. Used: three.js, Express, WebSocket and other SVG APIs.",
          "Built micro-controller game where users match wires, correct matches animate a model airplane. (C teensy libraries).",
        ]}
      />
      <Card
        title={"IT Security intern"}
        where={"Bank One, Port Louis, Mauritius"}
        description={"July 2019 - August 2019"}
        bullets={[
          "Obtained Security incidence response Training.",
          "Improved resource allocations through data analysis with MS Power BI.",
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
