import { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import Inktistic from './inktistic';
import Ottercart from './ottercart'
import Statsiege from './statsiege'

export default function ProjectContent (props) {
     const projectRef = useRef(null);
     const contentRef = useRef(null);

     const timeline = new TimelineMax({paused: false})

     useEffect(()=>{
          timeline
          .fromTo(contentRef.current, 1.5,
               {opacity: 0, scale:0},
               {ease: "power4.out", opacity: 1, scale: 1})
          .fromTo(projectRef.current, 2,
               { scale: 0, opacity: 0},
               { ease: "power4.out", scale: 1, opacity: 1}, "-=1.6")
     },[props.project])

     const displayProject = () => {
          if(props.project === 'inktistic') return <Inktistic projectRef={projectRef} contentRef={contentRef}/> 
          if(props.project === 'ottercart') return <Ottercart projectRef={projectRef} contentRef={contentRef}/>
          if(props.project === 'statsiege') return <Statsiege projectRef={projectRef} contentRef={contentRef}/>
     }

     return(
          <>
               {displayProject()}
          </>
     );
}

