import React from 'react';

import './OpeningAnimation.css';

import cjrlLogo from '../../images/svg/cjrlLogo.png';

const OpeningAnimation = () => {
    return(
        <div className="opening-animation-container">
            <img className="opening-animation" src={cjrlLogo} alt="Personal Portfolio Logo"/>
        </div>
    );

}

export default OpeningAnimation;