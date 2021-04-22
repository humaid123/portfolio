import React from "react";

function BIResearchAssistant() {
  return (
    <div>
      <h1>Research Assitant - Business Intelligence</h1>
      <p>
        Optimised segmented linear regression algorithm with Dynamic Programming
      </p>
      <p>
        Used Python (Numpy) and Java (Apache Common Maths) to implement final
        version
      </p>
      <p>Supervised by Dr. Hai Wang</p>
    </div>
  );
}

function ITSecurityIntern() {
  return (
    <div>
      <h1>IT Security intern</h1>
      <p>Obtained Security incidence response Training</p>
      <p>
        Main Project was to create data visualisation tool to improve resource
        allocations
      </p>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <div>
      <BIResearchAssistant />
      <ITSecurityIntern />
    </div>
  );
}
