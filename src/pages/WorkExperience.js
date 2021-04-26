import React from "react";

import { FaChevronCircleRight } from "react-icons/fa";

function BIResearchAssistant({ order }) {
  return (
    <div className="entrance" style={{ "--animation-order": order }}>
      <div className="workCard">
        <h1>Research Assitant - Business Intelligence</h1>
        <p>
          <FaChevronCircleRight style={{ fontSize: "0.8rem" }} />
          {"   "}
          Optimised segmented linear regression algorithm with Dynamic
          Programming
        </p>
        <p>
          <FaChevronCircleRight style={{ fontSize: "0.8rem" }} />
          {"   "}
          Used Python (Numpy) and Java (Apache Common Maths) to implement final
          version
        </p>
        <p>
          <FaChevronCircleRight style={{ fontSize: "0.8rem" }} />
          {"   "}
          Supervised by Dr. Hai Wang
        </p>
      </div>
    </div>
  );
}

function ITSecurityIntern({ order }) {
  return (
    <div className="entrance" style={{ "--animation-order": order }}>
      <div className="workCard">
        <h1>IT Security intern</h1>
        <p>
          <FaChevronCircleRight style={{ fontSize: "0.8rem" }} />
          {"   "}Obtained Security incidence response Training
        </p>
        <p>
          <FaChevronCircleRight style={{ fontSize: "0.8rem" }} />
          {"   "}
          Main Project was to create data visualisation tool to improve resource
          allocations
        </p>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <div className="workMain">
      <BIResearchAssistant order={2} />
      <ITSecurityIntern order={1} />
    </div>
  );
}
