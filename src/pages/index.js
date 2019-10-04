import React from "react";
import ReactGA from 'react-ga';


import "../css/reset.css";
import "../css/main.css";
import "../css/animations.scss";

import PortfolioHelmet from "../PortfolioHelmet/PortfolioHemlmet";
import LayoutContainer from "../layout-container/layout-container";

function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1');
  ReactGA.pageview('/homepage');
}

const IndexPage = () => (
  <React.Fragment>
      <initializeReactGA/>
      <PortfolioHelmet/> 
      <LayoutContainer/>
  </React.Fragment>
);

export default IndexPage;