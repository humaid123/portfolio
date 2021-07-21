import React, { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import Lottie from "lottie-web";
import animation from "../animations/projects.json";

function MachineLearning() {
  return (
    <div>
      <Card
        title={"Book Recommendation Engine using KNN"}
        where={"Personal"}
        bullets={[
          "Using the Book-Crossings dataset, we use a KNN to group related books together " +
            "and provide recommendations to a user based on the user's viewed/read book.",
        ]}
      />
      <Card
        title={"Healthcare Cost Predictor"}
        where={"Personal"}
        bullets={[
          "Given a dataset that contains information about different people including their BMI " +
            "and other health related factors as well as their healthcare costs, we train a model " +
            "which given a new person's health information will give us an estimated of their healthcare cost.",
        ]}
      />
      <Card
        title={"Spam Detector"}
        where={"Personal"}
        bullets={[
          "Neural network classifier project that is trained on a set of messages and whether each message " +
            "is a spam or not will predict if an incoming message is a spam.",
        ]}
      />
    </div>
  );
}

function SoftwareDevelopment() {
  return (
    <>
      <Card
        title={"MS Teams Clone - Work in Progress"}
        where={"Personal"}
        bullets={[
          "Building an MS teams clone that allows instant messaging with socket.io, video chatting with webRTC, " +
            "sharing documents with Multer and google docs like feature for multiple people to edit a file at the same time. " +
            "It showcases almost all modern web technologies short of PWAs and web assembly.",
        ]}
      />
      <Card
        title={"MS Outlook Clone"}
        where={"For Autism Nova Scotia - ANS"}
        bullets={[
          "Project written alongisde ANS to teach students on the spectrum to use emailing. " +
            "Used Mongo(Mongoose), Express, JQuery, JWT and Css grid/flex to give an MS outlook-like experience.",
        ]}
      />
      <Card
        title={"My Portfolio Website"}
        where={"Personal"}
        bullets={[
          "Simple React website where I display my skills and is what I used when asked for a virtual resume.",
        ]}
      />
      <Card
        title={"Other Projects"}
        where={"School and Personal"}
        bullets={[
          "Within the last few years, I have built an array of projects for school work and for personal use.",
          "Examples include: a LAMP car dealership landing page, a C# pong game, a Java Console Chess game, " +
            "a python Password cracker using multiple attack approaches and so on...",
        ]}
      />
    </>
  );
}

export default function Projects() {
  const [showML, setShowML] = useState(false);
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
    <div>
      <div className="left slider-nav">
        <div style={{ display: "flex" }}>
          <div style={{ width: "15rem", height: "10rem" }} ref={animationRef} />
        </div>
        <div onClick={() => setShowML(false)} className="button1-container">
          <div className={showML ? "button1" : "button1 selectedButton"}>
            Software Development
          </div>
        </div>
        <div onClick={() => setShowML(true)} className="button1-container">
          <div className={showML ? "button1 selectedButton" : "button1"}>
            Machine Learning
          </div>
        </div>
      </div>
      <div>{showML ? <MachineLearning /> : <SoftwareDevelopment />}</div>
    </div>
  );
}
