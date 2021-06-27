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
          "Using the Book-Crossings dataset, we use a KNN to group related books together " +
          "and provide recommendations to a user based on the user's viewed/read book."
        }
      />
      <ProjectCard
        title={"Healthcare Cost Predictor"}
        paragraph={
          "Given a dataset that contains information about different people including their BMI " +
          "and other health related factors as well as their healthcare costs, we train a model " +
          "which given a new person's health information will give us an estimated of their healthcare cost."
        }
      />
      <ProjectCard
        title={"Spam Detector"}
        paragraph={
          "Neural network classifier project that is trained on a set of messages and whether each message " +
          "is a spam or not will predict if an incoming message is a spam."
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
          "Building an MS teams clone that allows instant messaging with socket.io, video chatting with webRTC, " +
          "sharing documents with Multer and google docs like feature for multiple people to edit a file at the same time. " +
          "It showcases almost all modern web technologies short of PWAs and web assembly."
        }
      />
      <ProjectCard
        title={"MS Outlook Clone - Autism Nova Scotia"}
        paragraph={
          "Project written alongisde ANS to teach students on the spectrum to use emailing. " +
          "Used Mongo(Mongoose), Express, JQuery, JWT and Css grid/flex to give an MS outlook-like experience."
        }
      />
      <ProjectCard
        title={"Computer Science showcase"}
        paragraph={
          "This is a website where I talk about the different technologies that are gaining traction around the globe. " +
          "It is basically my blog. It is code in React but my main focus here was to add animations to make it more fun."
        }
      />
      <ProjectCard
        title={"My Portfolio Website"}
        paragraph={
          "Simple React website where I display my skills and is what I used when asked for a virtual resume."
        }
      />
    </>
  );
}

export default function Projects() {
  const [showML, setShowML] = useState(false);
  return (
    <div>
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
