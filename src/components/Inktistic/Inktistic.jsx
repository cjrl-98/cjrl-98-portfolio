import React from "react";
import { motion } from "framer-motion";
import "./Inktistic.scss";

export default function Inktistic(props) {
  return (
    <React.Fragment>
      <motion.section className="ottercart">
        <div class="inktistic__card">
          <input type="checkbox" id="inktistic-card" class="inktistic__read-more" aria-hidden="true"/>
          <div class="content">
            <div class="inktistic__front">
              <div class="inktistic__inner">
                <h2 className="inktistic__title--neon">Inktistic</h2>
                <div class="inktistic-short__description">
                  The only social media platform you will ever need for your Tattoo needs.
                </div>
                <label for="inktistic-card" class="inktistic__button" aria-hidden="true">
                  read more
                </label>
              </div>
            </div>
            <div class="inktistic__back">
              <div class="inktistic__inner">
                <div className="inktistic__back__header">
                  <h2 className="inktistic__back__project-name">Inktistic</h2>
                  <p>Dec 2019</p>
                </div>
                <div className="inktistic__back__info-container">
                  <p class="inktistic__back__project-description">
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
                    for="inktistic-card"
                    class="inktistic__button inktistic__button--return"
                    aria-hidden="true"
                  >
                    go back
                  </label>
                  <a href="https://www.inktistic.ca/" target="_blank">
                    <label
                      class="inktistic__button inktistic__button--return"
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
