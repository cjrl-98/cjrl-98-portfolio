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
        <SocialBar/>
      </div>
    </React.Fragment>
  );

  export default LayoutContainer;