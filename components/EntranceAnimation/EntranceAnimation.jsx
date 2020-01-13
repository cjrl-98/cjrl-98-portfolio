import { motion, useCycle } from "framer-motion";

const parentVariant = {
     open: {
          transition: {
               delayChildren: 3.2,
               staggerChildren: 0.1
          },
     }
}
const variants = {
     navbox : {
          open : {
               y: '100vh',
               transition: {
                    y: {duration: 1, ease: [.83,.01,.02,1]}
               }
          }
     }
}
export default function EntranceAnimation () {
     const [destroy, setDestroy] = useCycle(false, true)
     return(
          <>
               {    destroy ? null :  
                         <motion.div variants={parentVariant}  animate="open" onAnimationComplete={setDestroy} className="nav__container">
                              <motion.img animate={{opacity: [0, 0, 1, 1, 0]}} transition={{duration: 3, type: "spring"}} className="nav__logo" src="/cjrlLogo.png" alt="cjrl strawberry logo"/>
                              <motion.div  variants={variants.navbox} className="nav__box nav__box--1"/>
                              <motion.div  variants={variants.navbox} className="nav__box nav__box--2"/>
                              <motion.div  variants={variants.navbox} className="nav__box nav__box--3"/>
                              <motion.div  variants={variants.navbox} className="nav__box nav__box--4"/>
                              <style jsx>{`
                                   :global(.nav__container){
                                        z-index: 1000;
                                        position: fixed;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        width: 100vw;
                                        height: 85vh;
                                   }
                                   :global(.nav__logo){
                                        position: fixed;
                                        height: 70px;
                                        z-index: 100;
                                   }
                                   :global(.nav__box){
                                        width: 25%;
                                        height: 100%;
                                        background-color: #000000;
                                   }
                                   @media (min-width: 768px){
                                        :global(.nav__container){
                                             height: 100vh;
                                        }
                                        :global(.nav__logo){
                                             height: 100px;
                                        }
                                   }
                              `}</style>
                         </motion.div>
                    }
          </>
     );
}
