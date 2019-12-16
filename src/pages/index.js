import React from 'react';
import {motion} from 'framer-motion';
import LandingPage from "../components/LandingPage/LandingPage";
import Logo from "../images/svg/cjrlLogo.png";

const IndexPage = () => (
  <React.Fragment>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{ type: "spring", stiffness: 100, delay: 3 }}>
      <div className="landing-page__logo-container">
          <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{ type: "spring", stiffness: 100, delay: 0.5 }} src={Logo}/>
      </div>
    </motion.div>
    <div className="entrance-animate entrance-animation__leftTOright entrance-animation__in">
      <LandingPage/>
    </div>
  </React.Fragment>
);

export default IndexPage;
