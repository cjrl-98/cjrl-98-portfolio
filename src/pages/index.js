import React from "react";
import { Link } from "gatsby";

import "../css/index.css";

import PortfolioHelmet from "../PortfolioHelmet/PortfolioHemlmet";
import Header from "../header-nav/header-nav";
import HomePage from "../home-page/home-page";
import SocialBar from "../social-bar/social-bar";
import BackgroundEffect from "../background-effect/background-effect";

const IndexPage = () => (
    <React.Fragment>
      <PortfolioHelmet/>
      <BackgroundEffect/>
      <Header/>
      <div class="container">    
        <div className="element">
          <HomePage/>
        </div>
      </div>
      <SocialBar/>
    </React.Fragment>
)

export default IndexPage;
