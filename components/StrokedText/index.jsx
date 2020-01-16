export default function StrokedText(props){
     return(
          <>
               <p onMouseEnter={props.onMouseEnter} onClick={props.onClick} data-hover={props.text} className={props.content === props.text ? `stroked--active ${props.className}` : `stroked ${props.className}`}>{props.text}</p>
               <style jsx>{`
                    .stroked {
                         z-index: 100;
                         // font-size: 32px;
                         letter-spacing: 1.5px;
                         font-weight: 900;
                         text-decoration: none;
                         // margin-left: 16px;
                         color: transparent;
                         -webkit-text-stroke: 1px #FFFFFF; 
                         text-transform: uppercase;
                    }
                    .stroked:before {
                         z-index: 10;
                         height: 0;
                         color: #FFFFFF;
                         overflow: hidden;
                         position: absolute;
                         content: attr(data-hover);
                         transition: all 0.5s ease-out;
                    }
                    .stroked:hover:before {
                         height: 100%;
                    }
                    .stroked--active{
                         // font-size: 32px;
                         letter-spacing: 1.5px;
                         font-weight: 900;
                         border: none;
                         // margin-left: 16px;
                         text-transform: uppercase;
                         color: #D4737E;
                    }
                    @media (min-width: 1024px){     
                         .stroked {
                              // margin-left: 20px;
                         }
                    }
                    @media (min-width: 1920px){     
                         .stroked {
                              // font-size: 40px;
                         }
                         .stroked--active{
                              // font-size: 40px;
                              // margin-left: 18px;
                              -webkit-text-stroke: 1px #D4737E; 
                         }
                    }
               `}</style>
          </>
     );
}
