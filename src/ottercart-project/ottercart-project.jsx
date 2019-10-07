import React from 'react';


import "./ottercart-project.scss";

import otterCartOpeningGraphic from "../images/png/otter-cart-opening-graphic.png";
import RocketShip from "../images/png/rocket-ship.png";
import UserInterface from "../images/png/user-interface.png";



class OtterCartProject extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="test-container">
                    <div className="title-container">
                        <h1 className ="title-container_text green-text">OtterCart</h1>
                        <ul>
                            <li >Skills</li>
                            <li >UX/UI Design</li>
                            <li>UX Research</li>
                            <li>Branding</li>
                            <li>Front-End Development</li>
                            <li>React</li>
                        </ul>
                        <ul>
                            <li>Team</li>
                            <li>Linna Luo - Research & Engineer </li>
                            <li>Joelkyu Yu - Engineer</li>
                            <li>Christian Lagasca - UX/UI Designer & Front-End Dev</li>
                            <li>Tayef Shah - Back-End Engineer</li>
                        </ul>
                    </div>
                    <div className="project-content-container">
                        <div className="card">
                            <h2>Inspiration</h2>
                            <p>
                            Online shopping has become increasingly popular among the youth. In this day and age, convenience is highly valued. Luckily for us, Amazon Prime has free 2 day shipping - unluckily for us, prime shipping is allowing more carbon emissions to be emitted into our already suffering atmosphere. Our team wanted to make an impact with this consumer behaviour <span className="green-text_medium"> Enter OtterCart</span>
                            </p>
                            <div>
                                <img src={otterCartOpeningGraphic} alt="OtterCart Opening Graphic" className="otter-cart-opening-graphic"></img>
                            </div>
                        </div> 
                        <div className="card">
                            <h2>Research</h2>
                            <p>
                            Amazon says it wants half its shippments to be carbon neutral by 2030. This is a huge challenge to tackle considering that,<span className="green-text_medium"> Everyday in the US alone, E-Commerce packages travel the same distance from the moon and back, 133,000 times</span>, according to Etsy CEO Josh Silverman.                            </p>
                            <div>
                                <img src={RocketShip} alt="rocket ship flying to the moon graphic" className="rocket-ship"></img>
                            </div>
                            <p>However, there is strong evidence that suggests one very effective way to reduce the carbon emissions on e-commerce is by influencing consumer behavior to request later shipping dates. </p>
                            <div className="text-graphic">
                                <div>
                                    <p>Ship by tomorrow:</p>
                                    <p className="green-text_medium">50lbs Co2</p>
                                    <p>Ship in four days:</p>
                                    <p className="green-text_medium">8lbs Co2</p>
                                </div>
                                <div>
                                    <p>
                                    According to the research of Dr.Wendy Tate and Dr.Lisa M. Ellram, shipping by tomorrow with 
                                    </p>
                                </div>
                            </div>
                            <p>Amazon will cost you 50lbs of carbon dioxide, whereas shipping in 4 days will only cost you 8lbs of carbon dioxide. This extrordinary reduction in emissions due to the delayed shipping behavior is also supported in the research of Dr. Josué C. Velázquez Martínez; a sustainable logistics professor at MIT,<span className="green-text_medium"> Research shows that if you are willing to wait a week, you are killing 20 trees instead of 100 compared to express shipping.</span></p>
                        </div>
                        <div className="card">
                            <h2>Solution</h2>
                            <p>
                            This is why we started Otter Cart<br/>a  simple Google Chrome extension that alerts you about how much carbon is being emitted from shipping your item from the closest Amazon distribution centre to you along with the number of trees you’ve saved with your purchase.                            </p>
                            <div>
                                <img src={UserInterface} alt="OtterCart User Interface Design" className="user-interface-img"></img>
                            </div>
                        </div>
                         
                        
                    </div>
                </div>

                
            </React.Fragment>
        );
    }
}

export default OtterCartProject;