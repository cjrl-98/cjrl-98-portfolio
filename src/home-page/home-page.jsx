import React from 'react';

import './home-page.css';

import CnTowerSkyline from '../images/svg/CnTowerSkyline.svg';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-container">
                    <div className="home-text-wrapper">
                        <h1>Hello.</h1>
                        <h1>I'm Chris</h1>
                        <h2>a <span> Software Developer</span></h2>
                        <h2>based in <span> Toronto</span></h2>
                        <h2>who loves purposeful <span> Designs</span></h2>
                        
                        <div className="alert-card">
                            <i class="fas fa-exclamation-circle"></i>
                            <p>Redesigning the site to showcase my Bootcamp journey over at BrainStation !</p>
                        </div>
                    </div>
                    <div>
                    </div>
            </div>
        );
    }
}

export default HomePage;