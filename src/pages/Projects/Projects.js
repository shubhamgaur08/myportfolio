import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import Button from '@mui/material/Button';
const Projects = () => {
  return (
    <div className="whole">
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          MY RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Throughout my academic journey , I've consistently pursued
          opportunities to expand my knowledge and refine my skills in
          MERN-stack development.  
           I have Developed Some profeciant projects to
          practice my skills and as a show case
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN STACK</span>
                  <img
                    src={require("../../assets/images/BEARNOTE.png")}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
               
                  {/* <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      BEARNOTE - Notes on cloud.
                    </h5>
                  </div> */}
                  {/* <a target="_blank"
                    className="ad-btn"
                    rel="noreferrer"
                    href="https://bearnote.vercel.app/"
                  >
                    View
                  </a> */}
                <div className="card-bottom">
                <div className="title">
                    <h5 className="text-uppercase">
                      BEARNOTE - Notes on cloud.
                    </h5>
                    
                  </div>
                  
                 </div>

                 <div className="buttons">
                  <a target="_blank"
                    
                    rel="noreferrer"
                    href="https://bearnote.vercel.app/"
                  >
                     <Button className="button" variant="contained">LIVE</Button>
                  </a>
                  <a target="_blank"
                    
                    rel="noreferrer"
                    href="https://github.com/shubhamgaur08/bearnote--code"
                  >
                     <Button className="button" variant="contained">code</Button>
                  </a>
                 

                   
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">WEB APP</span>
                  <img
                    src={require("../../assets/images/PICSBEAR.png")}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Express js</span>

                  <span className="card-detail-badge">Node js</span>
                  <span className="card-detail-badge">openai-API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">PICSBEAR- image generation.</h5>
                  </div>
                  <a target="_blank"
                    className="ad-btn"
                    href="https://pics-bear.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">WEB APP</span>
                  <img
                    src={require("../../assets/images/BEARPANEL.png")}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>

                  <span className="card-detail-badge">Material UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">BEARPANEL - an admin panel</h5>
                  </div>
                  <a className="ad-btn" target="_blank" href="https://bear-panel.vercel.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </div>
  );
};

export default Projects;
