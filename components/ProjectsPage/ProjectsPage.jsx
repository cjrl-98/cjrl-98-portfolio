import { useState, useEffect, useRef } from 'react';
import { TweenLite } from 'gsap';
import ProjectContent from "../ProjectContent/ProjectContent";

export default function ProjectsPage(props){
     const [project, setProject] = useState('statsiege');
     const [border, setBorder] = useState('statsiege');
     const prIcon = useRef(null);
     const jectsIcon = useRef(null);
     const projectBottomBorder = useRef(null);
     const projectContentBioBefore = useRef(null);

     useEffect(()=>{
               if(border === 'ottercart'){
                    TweenLite.to(projectBottomBorder.current, 1, {ease: "expo.out" ,x: -225})
               }
               if(border === 'inktistic'){
                    TweenLite.to(projectBottomBorder.current, 1, {ease: "expo.out" , x: -125})
               }
               if(border === 'statsiege'){
                    TweenLite.to(projectBottomBorder.current, 1, {ease: "expo.out" , x: -25})
               }
     },[border])

      useEffect(()=>{
          TweenLite.fromTo(projectContentBioBefore.current, 3, 
               {opacity: 0, x: 200},
               {ease: "expo.out", opacity: 1, x: 0})
     },[project])

     const projectContentBio = () => {
          if(project === 'ottercart'){
               return (
                    <>
                         <p>A Chrome extension that alerts Amazon users about how much carbon is being emitted from shipping your item, then provide options to lower the total carbon and environmental impact of the products you’re buying.</p>                         
                         <div className="content-bio__links">
                              <a href='https://github.com/cjrl-98/client-inktistic' target="_blank" rel="noopener noreferrer">
                                   <button className="content-bio__btn">Coming Soon</button>
                              </a>
                         </div>
                    </>
               )
          }
          if(project === 'inktistic'){
               return (
                    <>
                         <p>Inktistic is a social media application built to give clients and enthusiasts a platform to browse and save tattoos, follow their favourite artists, view their availability and schedule them all in one app.</p>
                         <div className="content-bio__links">
                              <a href='https://github.com/cjrl-98/client-inktistic' target="_blank" rel="noopener noreferrer">
                                   <button className="content-bio__btn">GitHub</button>
                              </a>
                              <a href='https://inktistic.ca' target="_blank" rel="noopener noreferrer">
                                   <button className="content-bio__btn">View Site</button>
                              </a>
                         </div>
                    </>
               );
          }
          if(project === 'statsiege'){
               return (
                    <>
                         <p>Statsiege is a web app that allows users to track their favourite NBA team throughout the season. The project is still on going and features are continuously being released. Follow the projects progress at GitHub! </p>
                         <div className="content-bio__links">
                              <a href='https://github.com/cjrl-98/statsiege-client' target="_blank" rel="noopener noreferrer">
                                   <button className="content-bio__btn">GitHub</button>
                              </a>
                              <a href='https://statsiege.live' target="_blank" rel="noopener noreferrer">
                                   <button className="content-bio__btn">View Site</button>
                              </a>
                         </div>
                    </>
               );
          }
     }

     return(
          <>
               <div className="projects">
                    <img ref={prIcon} className="projects__icon--pr" src="/pr.svg" alt="projects icon" />
                         <ProjectContent project={project}/>
                    <img ref={jectsIcon} className="projects__icon--jects" src="/jects.svg" alt="projects icon" />
                    <div className="projects__info-container" onMouseLeave={ () => setBorder(project)}>
                         <h1 onClick={ () => setProject('ottercart') } onMouseEnter={ () => setBorder('ottercart')} className="project__name">Ottercart</h1>
                         <h1 onClick={ () => setProject('inktistic')} onMouseEnter={ () => setBorder('inktistic')} className="project__name">Inktistic</h1>
                         <h1 onClick={ () => setProject('statsiege')} onMouseEnter={ () => setBorder('statsiege')} className="project__name">Statsiege</h1>
                    </div>
                    <div ref={projectContentBioBefore}  className="content-bio">
                         {projectContentBio()}
                    </div>
                    <div ref={projectBottomBorder} className="projects__border"/>
               </div>

               <style jsx>{`
                    .projects {
                         position: relative;
                         display: none;
                         align-items: center;
                         margin-bottom: 120px;
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
                    .projects__border{
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
                    .content-bio{
                         font-size: 14px;
                         width: 40%;
                         max-width: 680px;
                         position: absolute;
                         right: 0;
                         overflow: hidden;
                         text-align: end;
                         margin-right: 24px;
                         line-height: 24px;
                    }
                    .content-bio__before{
                         position: absolute;
                         width: 100%;
                         height: 100%;
                         background-color: #D4737E;
                    }
                    .content-bio__links{
                         display: flex;
                         justify-content: flex-end;
                         margin-top: 16px;
                    }
                    :global(.content-bio__btn){
                         width: 91px;
                         height: 24px;
                         margin-left: 16px;
                         border: none;
                         border-radius: 25px;
                         background-color: #62bd9d;
                         font-size: 10px;
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
                         .content-bio{
                              width: 450px;
                         }
                         .content-bio{
                              bottom: -170px;
                         }
                    }
                    @media (min-width: 1440px){
                         .content-bio{
                              width: 550px;
                         }
                         .content-bio{
                              bottom: -150px;
                         }
                    }
                    @media (min-width: 1920px){
                         .content-bio{
                              width: 650px;
                         }
                    }
               `}</style>
          </>
     );
}