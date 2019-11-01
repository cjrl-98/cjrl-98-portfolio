import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import AlertCard from '../AlertCard/AlertCard';
import './HomePage.scss';
import CnTowerSkyline from '../../images/svg/CnTowerSkyline.svg';
class HomePage extends React.Component {
     render() {
        return (
            <React.Fragment>
            <div className="home">
                <div className="home__text-wrapper">
                    <h1 className="home__h1">Hello.</h1>
                    <h1 className="home__h1">{`I'm ${this.props.shortName}`}</h1>
                    <h2 className="home__h2">a <span>{` ${this.props.role}`}</span></h2>
                    <h2 className="home__h2">based in <span> {` ${this.props.location}`}</span></h2>
                    <h2 className="home__h2">{`who loves `}  
                    <span>     
                        <ReactRotatingText items={this.props.interest}/>
                    </span>
                    </h2>
                    <AlertCard alertMsg="Redesigning the site to showcase my Bootcamp journey over at BrainStation !"/>
                </div>
                <div className="home__img-container">
                    <img className= "home__img" src={CnTowerSkyline} alt="a minimalistic illustration of CN Tower"></img>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export default HomePage;