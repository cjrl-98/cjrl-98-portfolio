export default function Inktistic (props) {
     return(
          <>
               <div ref={props.contentRef} className="content">
                    <img ref={props.projectRef} className="content__img" src="/inktistic.png"/>
               </div>
               <style jsx>{`
                    .content {
                         z-index: -100;
                         position: relative;
                         width: 15vw;
                         height: 15vw;
                    }
                    .content::before {
                         content:"";
                         display: block;
                         width: 155%;
                         height: 155%;
                         position: absolute;
                         transform : translateY(-4vh) translateX(-5vw); 
                         border-radius: 50%;
                         margin-left: 16px;
                         background: #000000; /* fallback for old browsers */
                         background: -webkit-linear-gradient(to bottom, #000000, #434343); /* Chrome 10-25, Safari 5.1-6 */
                         background: linear-gradient(to bottom, #000000, #434343); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    }
                    .content__img{
                         position: absolute;
                         top: 0;
                         width: 13vw;
                         transform : translateY(-60px) translateX(11px); 
                    }
                    @media (min-width: 1024px){
                         .content__img{
                              width: 15vw;
                              transform : translateY(-60px) translateX(2px); 
                         }
                    }
                    @media (min-width: 1920px){
                         .content__img{
                              width: 14vw;
                              transform : translateY(-60px) translateX(7px); 
                         }
                    }
               `}</style>
          </>
     );
}

