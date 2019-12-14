import React from 'react'
import {motion, spring} from 'framer-motion';
import './Inktistic.scss';

export default function Inktistic (props){
    const style = {
        backgroundImage: 'linear-gradient(to bottom, #a8ff78, #78ffd6)'
    }
    const circleObject = {
        open: { opacity : 1, scale : 1 },
        closed: { opacity: 0, scale : 0},
    }
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100    
    }
    const inktistic = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };
        return(
            <React.Fragment>
                <motion.section variants={inktistic} animate={props.isInktistic ? "open" : "closed"} className="inktistic" >
                    <motion.h1 className="inktistic__title">Inktistic</motion.h1>
                    <motion.p className="inktistic__description">The social media application built to give clients and enthusiasts a platform to browse and save tattoos, follow artists, view their availability and schedule them, all in one app.</motion.p>
                    <a href="https://www.inktistic.ca/"><motion.button variants={circleObject} className="inktistic__btn">Click here to view</motion.button></a>
                    <motion.div transition={spring} variants={circleObject} lassName="inktistic__circle inktistic__circle--1"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--2"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--3"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--4"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--5"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--6"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--7"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--8"></motion.div>
                    <motion.div transition={spring} variants={circleObject} className="inktistic__circle inktistic__circle--9"></motion.div>
                </motion.section>
            </React.Fragment>
        );
}
