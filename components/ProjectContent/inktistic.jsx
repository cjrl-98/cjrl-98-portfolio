import {motion} from 'framer-motion';

export default function Inktistic (props) {
     return(
          <>
               <motion.div {...props.circleVariants} className="content">
                    <motion.img {...props.imgProps} className="content__img" src="/inktistic.png"/>
               </motion.div>
               <style jsx>{`
                    :global(.content) {
                         z-index: -100;
                         position: relative;
                         width: 15vw;
                         height: 15vw;
                    }
                    :global(.content::before) {
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
                    :global(.content__img){
                         position: absolute;
                         top: -65px;
                         width: 13vw;
                         transform : translateX(11px); 
                    }
                    @media (min-width: 1024px){
                         :global(.content__img){
                              width: 15vw;
                              transform : translateX(2px); 
                              top: -60px;
                         }
                    }
                    @media (min-width: 1920px){
                         :global(.content__img){
                              width: 14vw;
                              transform : translateX(7px); 
                              top: -65px;
                         }
                    }
               `}</style>
          </>
     );
}

