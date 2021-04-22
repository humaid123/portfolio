import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

function SMU() {
  return (
    <div>
      <h1>Bachelors at Saint Mary's University, Halifax, NS</h1>
      <p>
        I am a <em>Coop</em> Double Honours in <em>Computer Science</em> and{" "}
        <em>Mathematics</em> Student.
      </p>
      <p>My GPA is 4.28/4.3 and I have received the following awards:</p>
      <ul>
        <li>
          <em>SMU Presidential Scholarship</em>, which is the major entrance
          scholarship at SMU based on high school grades and extra curriculars.
        </li>
        <li>
          I was placed on the <em>Dean's list</em> every year at SMU.
        </li>
        <li>
          I have received a <em>Research Award</em> in my second and third year.
        </li>
      </ul>
    </div>
  );
}

function FCC() {
  return (
    <div>
      <h1>
        {" "}
        <FaFreeCodeCamp /> FreeCodeCamp certifications
      </h1>
      <p>
        I wanted to modernise the skills I have learnt at SMU during the
        coronavirus quarantine. To that effect, I have earned all{" "}
        <em>JavaScript and Python certificates</em> at FreeCodeCamp. This
        included coding challenges and projects in MERN with ES6, Sass and css
        flexbox and gridbox as well as in Python with Pandas, Matplotlib and
        Tensorflow. I have since improved upon those skills with additional
        peronal projects and tutorials.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h1>Education</h1>
      <SMU />
      <FCC />
    </div>
  );
}

function Research() {
  return (
    <div>
      <h1>Research</h1>
      <p>
        My Research is mostly Applied Mathematics based. I worked as a Research
        Assistant over the summer of my second year for a Business intelligence
        project. Over the summer of my third year, I worked on a Numerical
        Analysis Project. My research thesis will also be in Numerical Analysis
      </p>
    </div>
  );
}

export default function MoreAboutMe() {
  return (
    <div>
      <h1>More info about me</h1>
      <Education />
      <Research />
    </div>
  );
}
