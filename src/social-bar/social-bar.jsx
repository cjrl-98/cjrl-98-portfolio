import React from "react";

import "./social-bar.scss";

import DribbleIcon from "../images/svg/dribbble-ball-icon.svg";
import LinkedInIcon from "../images/svg/linkedin-icon.svg";
import GitHubIcon from "../images/svg/git-hub-icon.svg";

// props needed  :
//   profile links
//     github:
//     linkedin:
//     github:

class SocialBar extends React.Component{
  render(){
    return (
        <div className="social-bar">
          <a href={this.props.linkedin} target="_blank" rel="noopener noreferrer">
            <img className="social-bar__icon" src={LinkedInIcon} alt="linkedIN icon"/>
          </a>
          <a href={this.props.dribbble} target="_blank" rel="noopener noreferrer">
            <img className="social-bar__icon" src={DribbleIcon} alt = "dribbble icon"/>
          </a>

          <a href={this.props.github} target="_blank" rel="noopener noreferrer">
            <img className="social-bar__icon" src={GitHubIcon} alt="git hub icon"/>
          </a>
        </div>
    );
  }
}

export default SocialBar;