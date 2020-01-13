import {useEffect} from 'react';

export default function Burger(){
     useEffect(()=>{
          const burger = document.querySelector(".burger");
          burger.addEventListener('click', () => {
               burger.classList.toggle('active')
          })
     })
     return(
          <>
               <svg className="burger" viewBox="0 0 100 100">
                    <path className="burger__top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
                    <path className="burger__middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
                    <path className="burger__bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
               </svg>
               <style jsx>{`               
                    :global(.burger) {
                         width: 48px;
                         cursor: pointer;
                         -webkit-tap-highlight-color: transparent;
                         transition: transform 400ms;
                         -moz-user-select: none;
                         -webkit-user-select: none;
                         -ms-user-select: none;
                         user-select: none;
                    }
                    :global(.burger path) {
                         fill:none;
                         transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
                         stroke:#000;
                         stroke-width:5.5;
                         stroke-linecap:round;
                    }
                    
                    :global(.burger__top) {
                         stroke-dasharray: 40 172;
                    }
                    :global(.burger__middle) {
                         stroke-dasharray: 40 111;
                    }
                    :global(.burger__bottom) {
                         stroke-dasharray: 40 172;
                    }
                    :global(.burger.active .burger__top) {
                         stroke-dashoffset: -132px;
                    }
                    :global(.burger.active .burger__middle) {
                         stroke-dashoffset: -71px;
                    }
                    :global(.burger.active .burger__bottom) {
                         stroke-dashoffset: -132px;
                    }
               `}</style>
          </>
     );
}