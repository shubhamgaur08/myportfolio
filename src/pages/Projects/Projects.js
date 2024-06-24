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
                     <Button className="button" id="button" variant="contained">LIVE</Button>
                  </a>
                  <a target="_blank"
                     
                    rel="noreferrer"
                    href="https://github.com/shubhamgaur08/bearnote--code"
                  >
                     <Button className="button" id="button" variant="contained">code</Button>
                  </a>
                 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">ANDROID APP</span>
                  <img
                    src={require("../../assets/images/Capgram.jpg")}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>

                  <span className="card-detail-badge">Node js</span>
                  <span className="card-detail-badge">Express Js</span>
                </div>
                <div className="card-bottom">
                <div className="title">
                    <h5 className="text-uppercase">
                      CapGram AI - Caption Generator. 
                    </h5>
                    
                  </div>
                  
                 </div>

                 <div className="buttons">
                  <a target="_blank"
                     
                    rel="noreferrer"
                    href="https://drive.google.com/drive/folders/1jtKaWWU3_p86D98jsR_rj5HKVhzBF94w?usp=sharing"
                  >
                     <Button className="button" id="button" variant="contained">SCREENSHOTS</Button>
                  </a>
                  <a target="_blank"
                     
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/198Dt3FNx6cU-AfBCuLUxAorFA-iwjQgI/view?usp=sharing"
                  >
                     <Button className="button" id="button" variant="contained">APK</Button>
                  </a>
                 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">WEB APP</span>
                  <img
                    src={require("../../assets/images/BEARPANEL.jpg")}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>

                  <span className="card-detail-badge">Material UI</span>
                </div>
                <div className="card-bottom" id="panel">
                <div className="title">
                    <h5 className="text-uppercase">
                      BEAR-PANEL (pc) - admin Panel .
                    </h5>
                    
                  </div>
                  
                 </div>

                 <div className="buttons">
                  <a target="_blank"
                     
                    rel="noreferrer"
                    href="https://bear-panel.vercel.app/"
                  >
                     <Button className="button" id="button" variant="contained">LIVE</Button>
                  </a>
                  <a target="_blank"
                     
                    rel="noreferrer"
                    href="https://github.com/shubhamgaur08/Bear-Panel"
                  >
                     <Button className="button" id="button" variant="contained">code</Button>
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
