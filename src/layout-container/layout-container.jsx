import React from "react";

import "./layout-container.scss";

import BackgroundEffect from "../background-effect/background-effect";
import OpeningAnimation from "../opening-animation/opening-animation";
import Header from "../header-nav/header-nav";
import HomePage from "../home-page/home-page";
import SocialBar from "../social-bar/social-bar";

const LayoutContainer = () => (
    <React.Fragment>
        <OpeningAnimation/> 
        <BackgroundEffect/>
      <div className="content-container fade-in">   
        <Header/>
        <HomePage/>
        <SocialBar 
        linkedin='https://www.linkedin.com/in/christian-lagasca-5a1625186/'
        dribbble='https://dribbble.com/cjrl_'
        github='https://github.com/cjrl-98'
        />
      </div>
    </React.Fragment>
  );

  export default LayoutContainer;