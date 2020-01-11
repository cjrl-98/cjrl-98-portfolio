export default function Ottercart (props) {
     return(
          <>
               <div ref={props.contentRef} className="content">
                    <img ref={props.projectRef} className="content__img" src="/otter.png"/>
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
                         background: #00b09b; /* fallback for old browsers */
                         background: -webkit-linear-gradient(to left, #00b09b, #96c93d); /* Chrome 10-25, Safari 5.1-6 */
                         background: linear-gradient(to left, #00b09b, #96c93d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    }
                    .content__img{
                         position: absolute;
                         top: -90px;
                         left: -3.5vw;
                         width: 25vw;
                    }
               `}</style>
          </>
     );
}

