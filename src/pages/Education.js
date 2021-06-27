import React, { useState } from "react";

function EducationCard({ education, where, paragraph, accomplishments }) {
  return (
    <div className="card">
      <h2>
        <em>{education}</em>
      </h2>
      <h4>{where}</h4>
      <p>{paragraph}</p>
      <ul>
        {accomplishments.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h1 className="left">Education</h1>
      <EducationCard
        education={"Bsc - Double Honours Maths and Computer Science"}
        where={"Saint Mary's University, Halifax, NS"}
        paragraph={
          "I am a COOP Double Honours in Computer Science and Mathematics Student. My GPA is 4.28/4.3 and my notable accomplishments at SMU are: "
        }
        accomplishments={[
          "SMU Presidential Scholarship, which is the major entrance scholarship at SMU based on high school grades and extracurriculars.",
          "I was placed on the Dean's list every year at SMU.",
          "I received Research Awards for research during the summer term of my Second and Third year.",
        ]}
      />
      <EducationCard
        education={"JavaScript and Python Certificates"}
        where={"FreeCodeCamp"}
        paragraph={
          "I participated in an online bootcamp during the pandemic with the goal of improving on all my JavaScript, Python and related libraries and framework skills."
        }
        accomplishments={[
          "Learnt more about MERN, Sass, socket.io, web security, responsive design and data visualisation (D3.js) through projects.",
          "Learnt more about the Python's data analysis and machine learning ecosystem (Pandas, Matplotlib, SKLearn, Tensorflow) through projects.",
        ]}
      />
    </div>
  );
}

function PublicationCard({ topic, where, bullets, supervisor }) {
  return (
    <div className="card">
      <h2>
        <em>{topic}</em>
      </h2>
      <h4>{where}</h4>
      <p>{supervisor}</p>
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

function Publications() {
  return (
    <div>
      <h1 className="left">Publications</h1>
      <PublicationCard
        topic={"Parallellisation of BVP_SOLVER"}
        where={" Saint Mary's University"}
        supervisor={"Dr. Paul Muir"}
        bullets={[
          "Addded Parallelisation to the famous BVODE solver, used in scipy.integrate.solve_bvp, by using Fortran OMP and parallel sparse matrix LU factorisations packages.",
        ]}
      />
      <PublicationCard
        topic={"Covid-19 modelling with ODEs and PDEs"}
        where={"Saint Mary's University"}
        supervisor={"Dr. Paul Muir"}
        bullets={[
          "Looked into discontinuity problems in ODES and PDEs and how they affect Covid-19  models.",
          "Did a survey of popular ODE solvers in Python, R, Scilab and Matlab on how they react to discontinuities.",
          "Discussed methods to improve the accuracy and performance of these popular ODE solvers with event detection.",
        ]}
      />
      <PublicationCard
        topic={"Business Intelligence"}
        where={"Saint Mary's University"}
        supervisor={"Dr. Hai Wang"}
        bullets={[
          "Optimised a segmented linear regression algorithm using Dynamic Programming and Restricted growth strings.",
          "Reported on the state of agile (Kanban), No/Low code platforms and decision trees for future work from Dr. Hai Wang.",
        ]}
      />
    </div>
  );
}

export default function MoreAboutMe() {
  const [showPublications, setShowPublications] = useState(false);
  return (
    <>
      <div className="left">
        <div
          onClick={() => setShowPublications(false)}
          className={showPublications ? "button1" : "button1 selectedButton"}
        >
          Education
        </div>
        <div
          onClick={() => setShowPublications(true)}
          className={showPublications ? "button1 selectedButton" : "button1"}
        >
          Publications
        </div>
      </div>
      <div>{showPublications ? <Publications /> : <Education />}</div>
    </>
  );
}
