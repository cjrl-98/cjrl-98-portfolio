import React from "react";

import "./LayoutContainer.scss";

import BackgroundEffect from "../BackgroundEffect/BackgroundEffect";
import OpeningAnimation from "../OpeningAnimation/OpeningAnimation";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import SocialBar from "../SocialBar/SocialBar";


const LayoutContainer = () => (
    <React.Fragment>  
          <OpeningAnimation/>
          <BackgroundEffect/>
        <div className="content-container fade-in">    
          <Header/>
          <HomePage 
            shortName = "Chris" 
            role = "Software Developer"
            location = "Toronto"
            interest = {['Art','Design','Minimalism', 'Solving problems', 'Collaborative work', 'Curating playlists', 'Concerts']}
          />  
          <SocialBar 
                    linkedin='https://www.linkedin.com/in/christian-lagasca-5a1625186/'
                    dribbble='https://dribbble.com/cjrl_'
                    github='https://github.com/cjrl-98'
          />  
        </div>
    </React.Fragment>
  );

  export default LayoutContainer;