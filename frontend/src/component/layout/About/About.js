import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
           
            <Typography>Tanaya Kulkarni</Typography>
            
            <span>
              This is a sample wesbite made by Tanaya. Only with the
              purpose to learn MERN Stack.
            </span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
