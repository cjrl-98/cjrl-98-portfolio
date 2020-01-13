import { motion, AnimatePresence } from 'framer-motion'
import Inktistic from './inktistic';
import Ottercart from './ottercart'
import Statsiege from './statsiege'

const power4Easing = [.26,.75,0,.99];

export default function ProjectContent (props) {

const circleVariants = {
     transition : { duration: 0.7, ease: power4Easing },
     key : props.project,
     initial : { scale: 0, opacity: 0 },
     animate : { scale: 1, opacity: 1 },
     exit : { scale: 0, opacity: 0, transition: {duration: 5} } 
}

const imgProps = {
     transition : { duration: 2, ease: power4Easing },
     key : props.project,
     initial : { x: 80, rotate: 40, scale: 0, opacity: 0 },
     animate : { x: 0, rotate: 0, scale: 1, opacity: 1 }
}

     const displayProject = () => {
          if(props.project === 'inktistic') return <Inktistic circleVariants={circleVariants} imgProps={imgProps}/> 
          if(props.project === 'ottercart') return <Ottercart circleVariants={circleVariants} imgProps={imgProps}/>
          if(props.project === 'statsiege') return <Statsiege circleVariants={circleVariants} imgProps={imgProps}/>
     }

     return(
          <>
               <AnimatePresence>
                    {displayProject()}
               </AnimatePresence>
          </>
     );
}
