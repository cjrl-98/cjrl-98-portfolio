import React from 'react'
import {motion} from 'framer-motion';
import './Inktistic.scss';

export default function Inktistic (props){
    
        return(
            <React.Fragment>
            <motion.section className="ottercart" >
            <div class="card">
            <input type="checkbox" id="inktistic-card" class="more" aria-hidden="true"/>
            <div class="content">
                <div class="front">
                    <div class="inner">
                        <h2 className="sign__word">Inktistic</h2>
                        <div class="inktistic-short__description">
                            The social media application built to give clients and enthusiasts a platform to browse and save tattoos, follow artists, view their availability and schedule them all in one app.
                        </div>
                        <label for="inktistic-card" class="button" aria-hidden="true">
                            read more
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
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
                        
                        <label for="inktistic-card" class="button return" aria-hidden="true">
                            go back
                        </label>
                    </div>
                </div>
            </div>
        </div> 
        </motion.section>
            </React.Fragment>
        );
}
