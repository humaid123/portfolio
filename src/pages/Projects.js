import React, { useState } from "react";

function ProjectCard({ title, paragraph }) {
  return (
    <section className="card projectCard">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </section>
  );
}
function MachineLearning() {
  return (
    <div>
      <ProjectCard
        title={"Book Recommendation Engine using KNN"}
        paragraph={
          "Using the Book-Crossings dataset, we use a KNN to group related books together and provide recommendations to a user based on the book they entered."
        }
      />
      <ProjectCard
        title={"Healthcare Cost Predictor"}
        paragraph={
          "Given a dataset that contains information about different people including their healthcare costs, we predict based on certain factors what would be the healthcare cost for that person."
        }
      />
      <ProjectCard
        title={"Spam Detector"}
        paragraph={
          "Neural network classifier project that given a training set of data that contains messages and whether that messagge is span or not will predict if an incoming message is a spam."
        }
      />
    </div>
  );
}

function SoftwareDevelopment() {
  return (
    <>
      <ProjectCard
        title={"MS Teams Clone - Work in Progress"}
        paragraph={
          "Building an MS teams clone that allows instant messaging with socket.io, video chatting with webRTC, sharing documents with Multer and google docs like feature for multiple people to edit a file at the same time."
        }
      />
      <ProjectCard
        title={"MS Outlook Clone - Autism Nova Scotia"}
        paragraph={
          "Project written alongisde ANS to teach students on the spectrum to use emailing. Used Mongo(Mongoose), Express, JQuery, JWT and Css grid/flex to give an MS outlook-like experience."
        }
      />
      <ProjectCard
        title={"Car Dealership Page"}
        paragraph={
          "Project during database course where I built the backend for a Car dealership. the database was normalised to 3NF and the website was coded in PHP, MYSQL and styled with CSS."
        }
      />
      <ProjectCard
        title={"My Portfolio Website"}
        paragraph={
          "Website used to diplay my skills. Uses React and CSS including react transitions, animations and media queries."
        }
      />
    </>
  );
}

export default function Projects() {
  const [showML, setShowML] = useState(false);
  return (
    <div className="workMain">
      <div className="left">
        <div
          onClick={() => setShowML(false)}
          className={showML ? "button1" : "button1 selectedButton"}
        >
          Software Development
        </div>
        <div
          onClick={() => setShowML(true)}
          className={showML ? "button1 selectedButton" : "button1"}
        >
          Machine Learning
        </div>
      </div>
      <div>{showML ? <MachineLearning /> : <SoftwareDevelopment />}</div>
    </div>
  );
}
