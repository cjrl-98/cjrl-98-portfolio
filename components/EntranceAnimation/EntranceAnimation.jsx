import { useState, useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';

export default function EntranceAnimation () {
     const [destroy, setDestroy] = useState(false)
     const navBox1 = useRef(null);
     const navBox2 = useRef(null);
     const navBox3 = useRef(null);
     const navBox4 = useRef(null);
     const logo = useRef(null);

     const timeline = new TimelineMax({paused: false, onComplete: () => setDestroy(true) })

     useEffect(()=>{
          timeline.from(logo.current, { opacity: 0 })
               .to(logo.current, { opacity: 1 })
               .to(logo.current, { opacity: 0})
               .fromTo(
                    [navBox1.current, navBox2.current, navBox3.current, navBox4.current], 1.5,
                    {    
                         y: "0vh"
                    },
                    { 
                         stagger: 0.1,
                         ease: "power4.inOut",
                         y: "100vh"
                    }
               );
     },[])
     return(
          <>   
               {destroy ? null : 
                    <div className="nav__container">
                         <img ref={logo} className="nav__logo" src="/cjrlLogo.png" alt="cjrl strawberry logo"/>
                         <div ref={navBox1} className="nav__box nav__box--1"/>
                         <div ref={navBox2} className="nav__box nav__box--2"/>
                         <div ref={navBox3} className="nav__box nav__box--3"/>
                         <div ref={navBox4} className="nav__box nav__box--4"/>
                    </div>
               }
               <style jsx>{`
                    .nav__container{
                         z-index: 100;
                         position: fixed;
                         display: flex;
                         justify-content: center;
                         align-items: center;
                         width: 100vw;
                         height: 85vh;
                    }
                    .nav__logo{
                         position: fixed;
                         height: 70px;
                         z-index: 100;
                    }
                    .nav__box{
                         width: 25%;
                         height: 100%;
                         background-color: #000000;
                    }
                    @media (min-width: 768px){
                         .nav__container{
                              height: 100vh;
                         }
                         .nav__logo{
                              height: 100px;
                         }
                    }
               `}</style>
          </>
     );
}