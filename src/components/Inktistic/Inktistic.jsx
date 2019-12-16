import React from 'react'
import {motion} from 'framer-motion';
import './Inktistic.scss';

export default function Inktistic (props){
    
        return(
            <React.Fragment>
            <motion.section className="ottercart" >
            <div class="inktistic__card">
            <input type="checkbox" id="inktistic-card" class="more" aria-hidden="true"/>
            <div class="content">
                <div class="inktistic__front">
                    <div class="inktistic__inner">
                        <h2 className="sign__word">Inktistic</h2>
                        <div class="inktistic-short__description">
                            The social media application built to give clients and enthusiasts a platform to browse and save tattoos, follow artists, view their availability and schedule them all in one app.
                        </div>
                        <label for="inktistic-card" class="button" aria-hidden="true">
                            read more
                        </label>
                    </div>
                </div>
                <div class="inktistic__back">
                    <div class="inktistic__inner">
                        <div className="back-inktistic__header">
                            <h2 className="back-inktistic__project-name">Inktistic</h2>
                            <p>Dec 2019</p>
                        </div>
                        <div className="back-inktistic__info-container">
                            <p class="back-inktistic__project-description">
                                The social media application built to give clients and enthusiasts a platform to browse and save tattoos, follow their favourite artists, view their availability and schedule them all in one app.
                                Inktistic also gives tattoo artists a dashboard application to handle scheduling and expanding their brand as well as connecting with their clients.
                            </p>
                            <p className="back-inktistic__project-tech-stack"> MongoDB | Express | React | Node.JS | Apollo GraphQL | Firebase </p>
                        </div>
                        <div className="back-inktistic__button-container">
                            <label for="inktistic-card" class="button return" aria-hidden="true">
                                go back
                            </label>
                            <a href="https://www.inktistic.ca/"  target="_blank">
                                <label class="button return" aria-hidden="true">
                                    view site
                                </label>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </motion.section>
            </React.Fragment>
        );
}
