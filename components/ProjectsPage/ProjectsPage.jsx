import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation} from 'framer-motion';
import Button from '../Button';
import ProjectContent from '../ProjectContent/ProjectContent';
import {projectsData} from './ProjectsData';

const transition = { duration: 0.7, ease: [.26,.75,0,.99] };

export default function ProjectsPage(){
     const [project, setProject] = useState('statsiege');
     const [border, setBorder] = useState('statsiege');
     const bioBorderControl = useAnimation();

     useEffect(()=>{
          if(border === 'ottercart'){bioBorderControl.start({ x: -225, transition: transition })}
          if(border === 'inktistic'){bioBorderControl.start({ x: -125, transition: transition })}
          if(border === 'statsiege'){bioBorderControl.start({ x: -25, transition: transition })}
     },[border])

     const contentBioFormat = () => (
          <AnimatePresence>
               <motion.div transition={transition} key={projectsData[project].bio} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0, transition: {duration: 0.3} }} className="content-bio">
                    <p className="content__bio-text">{projectsData[project].bio}</p>                         
                    <div className="content-bio__links">
                         {projectsData[project].links.map( link =>
                              <a href={link.link} key={link.link} target="_blank" rel="noopener noreferrer">
                                  <Button text={link.name}/>
                              </a>
                         )}
                    </div>
               </motion.div>
          </AnimatePresence>
     )

     return(
          <>
               <div className="projects">
                    <img className="projects__icon--pr" src="/pr.svg" alt="projects icon" />
                         <ProjectContent project={project}/>
                    <img className="projects__icon--jects" src="/jects.svg" alt="projects icon" />
                    <div className="projects__info-container" onMouseLeave={ () => setBorder(project)}>
                         <h1 onClick={ () => setProject('ottercart')} onMouseEnter={ () => setBorder('ottercart')} className="project__name">Ottercart</h1>
                         <h1 onClick={ () => setProject('inktistic')} onMouseEnter={ () => setBorder('inktistic')} className="project__name">Inktistic</h1>
                         <h1 onClick={ () => setProject('statsiege')} onMouseEnter={ () => setBorder('statsiege')} className="project__name">Statsiege</h1>
                    </div>
                    {contentBioFormat()}
                    <motion.div animate={bioBorderControl} className="projects__border"/>
               </div>

               <style jsx>{`
                    .projects {
                         position: relative;
                         display: none;
                         align-items: center;
                         margin-bottom: 120px;
                         color: #FFFFFF;
                    }
                    .projects__icon--pr{
                         width: 23vw;
                         transform: translateX(8px);
                    }
                    .projects__icon--jects{
                         width: 52vw;
                         transform: translateX(-10px);
                    }
                    .projects__info-container{
                         display:flex;
                         position: absolute;
                         bottom: -30px;
                         right: 0;
                         cursor: pointer;
                    }
                    :global(.projects__border){
                         position: absolute;
                         bottom: -40px;
                         right: 0;
                         width: 82px;
                         border-bottom: 5px solid #D4737E;
                    }
                    .project__name{
                         font-weight: 900;
                         margin-right: 24px;
                    }
                    :global(.content-bio){
                         font-size: 14px;
                         width: 40%;
                         max-width: 680px;
                         position: absolute;
                         right: 0;
                         text-align: end;
                         margin-right: 24px;
                         line-height: 24px;
                    }
                    :global(.content-bio__links){
                         display: flex;
                         justify-content: flex-end;
                         margin-top: 16px;
                    }
                    :global(.content-bio__btn){
                         padding: 8px 40px;
                         margin-left: 14px;
                         border: none;
                         border-radius: 25px;
                         background-color: #62bd9d;
                         font-size: 12px;
                         font-weight: bold;
                         font-stretch: normal;
                         font-style: normal;
                         line-height: 1.25;
                         letter-spacing: normal;
                         text-align: center;
                         color: #fafafa;
                         cursor: pointer;
                         transition: all 1s ease;
                    }
                    :global(.content-bio__btn:hover){
                         background-color: #D4737E;
                    }
                    @media (min-width: 1024px){
                         .projects {
                              display: flex;
                         }
                         :global(.content-bio){
                              width: 450px;
                         }
                         :global(.content-bio){
                              bottom: -190px;
                         }
                    }
                    @media (min-width: 1440px){
                         :global(.content-bio){
                              width: 550px;
                              bottom: -170px;
                         }
                    }
                    @media (min-width: 1920px){
                         :global(.content-bio){
                              width: 680px;
                              bottom: -180px;
                              font-size: 18px;
                              line-height: 28px;
                         }
                    }
               `}</style>
          </>
     );
}


// .slide-buttons li a::before {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
//     font-family: 'Poppins', sans-serif;
// 	font-weight: 900;
// 	font-size: 100px;
// 	line-height: 1;
// 	overflow: hidden;
// 	text-transform: uppercase;
// 	padding: 0;
// 	max-height: 0;
// 	-webkit-text-stroke: transparent;
//     text-stroke: transparent;
//     -webkit-text-fill-color: var(--white);
//     text-fill-color: var(--white);
// 	color: var(--white);
// 	content: attr(data-hover);
// 	-webkit-transition: max-height 0.4s;
// 	-moz-transition: max-height 0.4s;
// 	transition: max-height 0.4s;
// }