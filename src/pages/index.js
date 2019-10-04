import React from "react";



import "../css/reset.css";
import "../css/main.css";
import "../css/animations.scss";

import PortfolioHelmet from "../PortfolioHelmet/PortfolioHemlmet";
import LayoutContainer from "../layout-container/layout-container";

const IndexPage = () => (
  <React.Fragment>
      <PortfolioHelmet/> 
      <LayoutContainer/>
  </React.Fragment>
);

export default IndexPage;