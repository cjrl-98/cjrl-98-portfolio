export default function StrokedText(props){
     return(
          <>
               <p onClick={props.onClick} data-hover={props.text} className={props.content === props.text ? 'nav__item--active' : 'nav__item'}>{props.text}</p>
               <style jsx>{`
                    .nav__item {
                         font-size: 32px;
                         letter-spacing: 1.5px;
                         font-weight: 900;
                         text-decoration: none;
                         margin-left: 16px;
                         color: transparent;
                         -webkit-text-stroke: 1px #000000; 
                         text-transform: uppercase;
                    }
                    .nav__item:before {
                         height: 0;
                         color: #000000;
                         overflow: hidden;
                         position: absolute;
                         content: attr(data-hover);
                         transition: all 0.3s;
                    }
                    .nav__item:hover:before {
                         height: 110%;
                    }
                    .nav__item--active{
                         font-size: 32px;
                         letter-spacing: 1.5px;
                         font-weight: 900;
                         border: none;
                         margin-left: 16px;
                         text-transform: uppercase;
                         color: #D4737E;
                    }
                    @media (min-width: 1024px){     
                         .nav__item {
                              margin-left: 20px;
                         }
                    }
                    @media (min-width: 1920px){     
                         .nav__item {
                              font-size: 40px;
                         }
                         .nav__item--active{
                              font-size: 40px;
                              margin-left: 18px;
                              -webkit-text-stroke: 1px #D4737E; 
                         }
                    }
               `}</style>
          </>
     );
}
