import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Shubham Gound Resume new.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArticleIcon from '@mui/icons-material/Article';

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right className="heading">
            <h2>Hi 👋 I'm Shubham Gaur</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer!",
                    "React Native Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
            <Button className="hire" id="hire" variant="contained" size="large" href="https://api.whatsapp.com/send?phone=9118708250"
                rel="noreferrer"
                target="_blank" >
        HIRE ME
        <VerifiedIcon id="verified"/>

      </Button>
      <Button  id="resume" variant="contained" size="large" href={Resume} download="Shubham Gound Resume new.pdf">
       MY RESUME
        <ArticleIcon id="doc"/>

      </Button>
      
            </div>
          </Fade>

        </div>
      </div>
    </>
  );
};

export default Home;
