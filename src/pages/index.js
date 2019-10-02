import React from "react";
import {Link} from "gatsby";

import "../css/reset.css";
import "../css/main.css";

import PortfolioHelmet from "../PortfolioHelmet/PortfolioHemlmet";
import Header from "../header-nav/header-nav";
import HomePage from "../home-page/home-page";
import SocialBar from "../social-bar/social-bar";
import BackgroundEffect from "../background-effect/background-effect";

const IndexPage = () => (
    <div className="content-container flex-container flex-direction-column flex-space-between">
      <PortfolioHelmet/>
      <BackgroundEffect/>
      <Header/>
      <HomePage/>
      <SocialBar/>
    </div>
)

export default IndexPage;