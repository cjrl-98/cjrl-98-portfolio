import React from "react";
import {Link} from "gatsby";

import "../css/reset.css";
import "../css/main.css";
import "../css/animations.css";


import PortfolioHelmet from "../PortfolioHelmet/PortfolioHemlmet";
import BackgroundEffect from "../background-effect/background-effect";
import OpeningAnimation from "../opening-animation/opening-animation";
import Header from "../header-nav/header-nav";
import HomePage from "../home-page/home-page";
import SocialBar from "../social-bar/social-bar";

const IndexPage = () => (
  <React.Fragment>
      <OpeningAnimation/>
      <BackgroundEffect/>
    <div className="content-container fade-in">
      <PortfolioHelmet/>     
      <Header/>
      <HomePage/>
      <SocialBar/>
    </div>
  </React.Fragment>
);

export default IndexPage;