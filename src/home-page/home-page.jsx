import React from 'react';
import ReactRotatingText from 'react-rotating-text';

import './home-page.css';
import '../css/main.css'

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
                                <ReactRotatingText items={[' Art',' Design', ' Solving problems', ' Collaborative work', ' Curating playlists', ' Concerts']} />
                             </span>
                        </h2>
                        <div className="alert-card fade-in">
                            <i className="fas fa-exclamation-circle"></i>
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