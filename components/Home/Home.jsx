import {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import StrokedText from '../StrokedText';

const picLinks = {
     home : "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
     projects : "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
     showreel : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1640&q=80",
     about : "https://images.unsplash.com/photo-1560185803-34becb7acecb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
}

const transition = { duration: 0.7, ease: [.26,.75,0,.99] };

export default function Home(props){
     const [background, setBackground] = useState({
          pic : picLinks.home,
          sidebar : "Home"
     });
     
     const backgroundImgVariants = {
          transition : { duration: 0.3, ease: [.26,.75,0,.99] },
          key : background.pic,
          initial : { 
               opacity : 0,
               filter : "blur(10px)"
          },
          animate : {
               opacity : 1,
               filter: "blur(0px)"
          },
          exit : { 
               opacity : 0,
               filter : "blur(10px)",
               transition: 
                    {
                         duration: 0.5
                    } 
               }, 
          className : "home__background home__background-picture", 
          src : background.pic,
          alt : `${background.sidebar} background image`,
     }

     const backgroundPicture = () => (
          <AnimatePresence exitBeforeEnter={false}>
               <motion.img {...backgroundImgVariants}/>
          </AnimatePresence>
     )

     return (
        <>
            <div className="home">
                <div className="home__text-container">
                    <StrokedText onMouseEnter={()=> setBackground({pic: picLinks.home, sidebar: "Home"}) } onClick={()=>props.setContent('home')} text="home" className="home__text"/>
                    <StrokedText onMouseEnter={()=> setBackground({pic: picLinks.projects, sidebar: "Projects"}) } onClick={()=> props.setContent('projects')} text="projects" className="home__text"/>
                    <StrokedText onMouseEnter={()=> setBackground({pic: picLinks.showreel, sidebar: "Showreel"}) } onClick={()=>props.setContent("showreel")} text="showreel" className="home__text"/>
                    <StrokedText onMouseEnter={()=> setBackground({pic: picLinks.about, sidebar: "About"}) }text="about" className="home__text"/>
                </div>
                {backgroundPicture()}
                <div className="home__sidebar">
                    <motion.p className="home__sidebar-text">{background.sidebar}</motion.p>
                </div>
            </div>
            <style jsx>{`
               .home {
                    position: relative;
                    display: none;
                    margin: 0 auto;
                    align-items: center;
                    justify-content: center;
               }
               .home::before{
                    z-index: -100;
                    position: fixed;
                    content: '';
                    width: 100%;
                    height: 100%;
                    display: block;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
               }
               .home__text-container{
                   display: flex;
                   flex-direction: column;
               }

              :global(.home__text){
                   font-size: 45px;
                   text-align: center;
                   margin-bottom: 48px;
                   -webkit-text-stroke: 1px #FFFFFF; 
              }
              :global(.home__text:nth-last-of-type(1)){
                    margin-bottom: 0px;
               }
               :global(.home__background){
                         position: absolute;
               }
               :global(.home__background-picture) {
                    width: 300px;
                    height: 220px;
                    filter: blur(10px);  
                    transition: 0.5s filter linear;
               }
               :global(.home__background-picture:hover) {
                    filter: blur(0px); 
               }
               .home__sidebar{
                    display: flex;
                    align-items:center;
                    height: 100vh;
               }
               :global(.home__sidebar-text){
                    position: fixed;
                    left: -18px;
                    font-weight: 900;
                    writing-mode: vertical-lr;
                    font-size: 7vw;
                    background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.1));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;                    
               }

              @media(min-width: 758px){
                    .home{
                         display: flex;
                    }
                    :global(.home__text){
                         font-size: 120px;
                    }
              }
              @media(min-width: 758px){
                    :global(.home__background-picture) {
                         width: 700px;
                         height: 400px;
                    }
              }
              @media(min-width: 1920px){
               :global(.home__background-picture) {
                    width: 1300px;
                    height: 700px;
               }
               :global(.home__text){
                    font-size: 200px;
                    margin-bottom: 72px;
               }
         }
            `}</style>
        </>
    );
}


