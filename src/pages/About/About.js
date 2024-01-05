import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump className="container">
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={require("../../assets/images/photo.jpg")}
                alt="shubham gaur photo"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1 className="neon-text">ABOUT ME</h1>
              
              <h5>    
              Commited and goal-oriented computer science graduate looking to pursue a career in the MERN Stack domain. posses excellent knowledge in HTML, CSS, JavaScript, React-js, Node-js,
Express-js, Mongodb, BootStrap,
Git And Github.
Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.
              </h5>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
