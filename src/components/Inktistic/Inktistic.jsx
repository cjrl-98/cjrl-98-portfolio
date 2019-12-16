import React from "react";
import { motion } from "framer-motion";
import "./Inktistic.scss";

export default function Inktistic(props) {
  return (
    <React.Fragment>
      <motion.section className="ottercart">
        <div className="inktistic__card">
          <input type="checkbox" id="inktistic-card" className="inktistic__read-more" aria-hidden="true"/>
          <div className="content">
            <div className="inktistic__front">
              <div className="inktistic__inner">
                <h2 className="inktistic__title--neon">Inktistic</h2>
                <div className="inktistic-short__description">
                  The only social media platform you will ever need for all your Tattoo needs from browsing to scheduling your favourite artists.
                </div>
                <label htmlFor="inktistic-card" className="inktistic__button" aria-hidden="true">
                  read more
                </label>
              </div>
            </div>
            <div className="inktistic__back">
              <div className="inktistic__inner">
                <div className="inktistic__back__header">
                  <h2 className="inktistic__back__project-name">Inktistic</h2>
                  <p>Dec 2019</p>
                </div>
                <div className="inktistic__back__info-container">
                  <p className="inktistic__back__project-description">
                    The social media application built to give clients and
                    enthusiasts a platform to browse and save tattoos, follow
                    their favourite artists, view their availability and
                    schedule them all in one app. Inktistic also gives tattoo
                    artists a dashboard application to handle scheduling and
                    expanding their brand as well as connecting with their
                    clients.
                  </p>
                  <p className="inktistic__back__project-tech-stack"> MongoDB | Express | React | Node.JS | Apollo GraphQL | Firebase </p>
                </div>
                <div className="inktistic__back__button-container">
                  <label
                    htmlFor="inktistic-card"
                    className="inktistic__button inktistic__button--return"
                    aria-hidden="true"
                  >
                    go back
                  </label>
                  <a href="https://www.inktistic.ca/" target="_blank" rel="noopener noreferrer">
                    <label
                      className="inktistic__button inktistic__button--return"
                      aria-hidden="true"
                    >
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
