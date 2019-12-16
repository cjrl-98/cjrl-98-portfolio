import React from 'react';
import { motion } from 'framer-motion';

import "../../css/main.scss";
import './LandingPage.scss';

import PortfolioHelmet from "../PortfolioHelmet/PortfolioHemlmet";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import BackgroundEffect from '../BackgroundEffect/BackgroundEffect';
import SocialBar from "../SocialBar/SocialBar";
import Header from "../Header/Header";

const LandingPage = () => (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", stiffness: 100, delay: 2.5 }}>
    <Header/>
    <PortfolioHelmet/> 
    <div className="background-container"> 
      <BackgroundEffect/>
      <BackgroundEffect/>
    </div>
    <motion.div>
      <LayoutContainer/>
    </motion.div>
    <footer className="footer">
      <SocialBar 
                linkedin='https://www.linkedin.com/in/christian-lagasca-5a1625186/'
                dribbble='https://dribbble.com/cjrl_'
                github='https://github.com/cjrl-98'
      />    
    </footer>
  </motion.div>
);

export default LandingPage;
