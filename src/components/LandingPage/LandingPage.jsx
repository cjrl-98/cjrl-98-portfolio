import React from 'react';
import { motion } from 'framer-motion';

import "../../css/main.scss";
import './LandingPage.scss';

import PortfolioHelmet from "../PortfolioHelmet/PortfolioHemlmet";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import BackgroundEffect from '../BackgroundEffect/BackgroundEffect';
import SocialBar from "../SocialBar/SocialBar";
import Header from "../Header/Header";
import Logo from "../../images/svg/cjrlLogo.png";

const LandingPage = () => (
  <React.Fragment>
    <Header/>
    <PortfolioHelmet/> 
    <div className="background-container"> 
      <BackgroundEffect/>
      <BackgroundEffect/>
    </div>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{ type: "spring", stiffness: 100, delay: 2.5 }}>
        <div className="landing-page__logo-container">
            <img src={Logo}/>
        </div>
    </motion.div>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", stiffness: 100, delay: 2.5 }}>
      <LayoutContainer/>
    </motion.div>
    <footer className="footer">
      <SocialBar 
                linkedin='https://www.linkedin.com/in/christian-lagasca-5a1625186/'
                dribbble='https://dribbble.com/cjrl_'
                github='https://github.com/cjrl-98'
      />    
    </footer>
  </React.Fragment>
);

export default LandingPage;
