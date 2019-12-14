import React from 'react';
import { motion } from 'framer-motion';

import "../css/main.css";
import "../scss/index.scss"

import PortfolioHelmet from "../components/PortfolioHelmet/PortfolioHemlmet";
import LayoutContainer from "../components/LayoutContainer/LayoutContainer";
import BackgroundEffect from '../components/BackgroundEffect/BackgroundEffect';
import SocialBar from "../components/SocialBar/SocialBar";
import Header from "../components/Header/Header";

const IndexPage = () => (
  <React.Fragment>
    <Header/>
    <PortfolioHelmet/> 
    <div className="background-container"> 
      <BackgroundEffect/>
      <BackgroundEffect/>
    </div>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", stiffness: 100, delay: 0.5 }}>
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

export default IndexPage;
