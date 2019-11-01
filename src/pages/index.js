import React from 'react';



import "../css/reset.css";
import "../css/main.css";
import "../css/animations.scss";

import PortfolioHelmet from "../components/PortfolioHelmet/PortfolioHemlmet";
import LayoutContainer from "../components/LayoutContainer/LayoutContainer";

const IndexPage = () => (
  <React.Fragment>
        <PortfolioHelmet/> 
        <LayoutContainer/>
  </React.Fragment>
);

export default IndexPage;