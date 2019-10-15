import React from "react";

import "./social-bar.scss";

import DribbleIcon from "../images/png/dribbble-ball-icon.png";
import LinkedInIcon from "../images/png/linkedin-icon.png";
import GitHubIcon from "../images/png/git-hub-icon.png";


const SocialBar = () => {
    return (
        <div className="social-bar">
          <a href="https://www.linkedin.com/in/christian-lagasca-5a1625186/" target="_blank" rel="noopener noreferrer">
            <img className="social-bar__icon" src={LinkedInIcon} alt="linkedIN icon"/>
          </a>
          <a href="https://dribbble.com/cjrl_" target="_blank" rel="noopener noreferrer">
            <img className="social-bar__icon" src={DribbleIcon} alt = "dribbble icon"/>
          </a>

          <a href="https://github.com/cjrl-98" target="_blank" rel="noopener noreferrer">
            <img className="social-bar__icon" src={GitHubIcon} alt="git hub icon"/>
          </a>
        </div>
    );
};

export default SocialBar;