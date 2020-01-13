import { motion } from 'framer-motion';

const buttonVariants = {
     whileHover: {
          scale: 1.1,
     },
     whileTap: {
          scale: 0.9,
     }
}

export default function Button(props){
     return(
          <>
               <motion.button {...buttonVariants} className="btn">{props.text}</motion.button>
               <style jsx>{`
                    :global(.btn){
                         padding: 8px 40px;
                         margin-left: 14px;
                         border: none;
                         border-radius: 25px;
                         background-color: #62bd9d;
                         font-size: 12px;
                         font-weight: bold;
                         font-stretch: normal;
                         font-style: normal;
                         line-height: 1.25;
                         letter-spacing: normal;
                         text-align: center;
                         color: #fafafa;
                         cursor: pointer;
                    }
               `}</style>
          </>
     );
}