import React from "react";

import "./social-bar.css";

import DribbleIcon from "../images/png/dribbble-ball-icon.png";
import LinkedInIcon from "../images/png/linkedin-icon.png";
import GitHubIcon from "../images/png/git-hub-icon.png";


const SocialBar = () => {
    return (
        <div className="social-side-bar">
          <a href="https://www.linkedin.com/in/christian-lagasca-5a1625186/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="linkedIN icon"/>
          </a>
          <a href="https://dribbble.com/cjrl_" target="_blank" rel="noopener noreferrer">
            <img src={DribbleIcon} alt = "dribbble icon"/>
          </a>

          <a href="https://github.com/cjrl-98" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="git hub icon"/>
          </a>
        </div>
    );
};

export default SocialBar;