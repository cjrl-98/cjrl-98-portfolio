import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import './home-page.scss';
import '../css/main.css'
import CnTowerSkyline from '../images/svg/CnTowerSkyline.svg';
import ExclamationCircleSolid from '../images/svg/exclamation-circle-solid.svg';
class HomePage extends React.Component {
    render() {
        return (

            <div className="home-container">
    <div className="home-text-wrapper">
        <h1>Hello.</h1>
        <h1>I'm Chris</h1>
        <h2>a <span> Software Developer</span></h2>
        <h2>based in <span> Toronto</span></h2>
        <h2>who loves 
                            <span>     
                                <ReactRotatingText items={[' Art',' Design',' Minimalism', ' Solving problems', ' Collaborative work', ' Curating playlists', ' Concerts']} />
                             </span>
                        </h2>
        <div className="alert-card fade-in">
            <img src={ExclamationCircleSolid} alt="alert icon" className="fa-exclamation-circle"></img>
            <p>Redesigning the site to showcase my Bootcamp journey over at BrainStation !</p>
        </div>
    </div>
    <div className="image-container">
        <img src={CnTowerSkyline} alt="a minimalistic illustration of CN Tower"></img>
    </div>
</div>
        );
    }
}
export default HomePage;