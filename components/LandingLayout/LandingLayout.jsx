import {useState} from 'react';
import {motion, AnimatePresence } from 'framer-motion';
import EntranceAnimation from '../EntranceAnimation/EntranceAnimation';
import Header from '../Header/Header';
import SocialBar from '../SocialBar/SocialBar';
import Home from '../Home/Home';
import HomeV1 from '../Home/Homev1';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ComingSoon from './ComingSoon';

const contentTransition = {
     transition : {duration: 1, ease: [.26,.75,0,.99]},
     initial : {
          scale: 0.8,
          opacity: 0
     },
     animate : {
          scale: 1,
          opacity: 1
     },
     exit : {
          scale: 0.8,
          opacity: 0,
          transition: {
               duration: 0.3
          } 
     } 
}

export default function LandingLayout () {
     const [content, setContent] = useState('home')

     const currentContent = () => {
          if(content === 'home'){
               return (
                    <motion.div className="landing-layout" key="home"{...contentTransition}>
                         <Header setContent={setContent} content={content}/>
                         <motion.section className="content__container">
                              <Home setContent={setContent} content={content}/>
                              <HomeV1/>
                         </motion.section>
                         <SocialBar/> 
                    </motion.div>
          )}
          if(content === 'projects'){
               return (
                    <motion.div className="landing-layout" key="projects" {...contentTransition}>
                         <Header isNav={true} setContent={setContent} content={content}/>
                         <motion.section className="content__container">
                              <ProjectsPage/>
                         </motion.section>
                         <SocialBar/> 
                    </motion.div>
          )}
          if(content === 'showreel'){
               return (
                    <motion.div className="landing-layout" key="showreel" {...contentTransition}>
                         <Header isNav={true} setContent={setContent} content={content}/>
                         <motion.section className="content__container">
                              <ComingSoon/>
                         </motion.section>
                         <SocialBar/> 
                    </motion.div>
          )}
     }

     return(
          <>   
               <EntranceAnimation/>
               <AnimatePresence exitBeforeEnter>
                    {currentContent()}
               </AnimatePresence>
               <style jsx>{`
                    :global(.landing-layout) {
                         position: relative;
                         width: 100vw;
                         height: 85vh;
                         overflow: hidden;
                    }
                    :global(.content__container){
                         position: relative;
                         display: flex;
                         justify-content: space-between;
                         align-items: center;
                         justify-content: center;
                         width: 100vw;
                         height: 85vh;
                    }
                    @media (min-width: 768px){
                         :global(.landing-layout) {
                              position: relative;
                              width: 100vw;
                              height: 100vh;
                              overflow: hidden;
                         }
                         :global(.content__container){
                              height: 100vh;
                         }
                    }
               `}</style>
          </>
     );
}