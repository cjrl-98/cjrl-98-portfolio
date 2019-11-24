import React from 'react'
import {motion, spring} from 'framer-motion';
import './OtterCart.scss';

export default class OtterCart extends React.Component{
    style = {
        backgroundImage: 'linear-gradient(to bottom, #a8ff78, #78ffd6)'
    }
    circleObject = {
        open: { opacity : 1, scale : 1 },
        closed: { opacity: 0, scale : 0},
    }
    spring = {
        type: "spring",
        damping: 10,
        stiffness: 100    
    }
    otterCart = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };
    render(){
        console.log(this.props.isOtterCart)
        return(
            <React.Fragment>
                <motion.section variants={this.otterCart} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart" >
                    <motion.h1 className="ottercart__title">OtterCart</motion.h1>
                    <motion.p className="ottercart__description">Otter Cart is a simple Google Chrome extension that alerts you about how much carbon is being emitted from shipping your item from the closest Amazon distribution centre to you along with the number of trees you’ve saved with your purchase.</motion.p>
                    <motion.button variants={this.circleObject} className="ottercart__btn">Coming Soon</motion.button>
                    <motion.div transition={spring} variants={this.circleObject} lassName="ottercart__circle ottercart__circle--1"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--2"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--3"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--4"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--5"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--6"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--7"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--8"></motion.div>
                    <motion.div transition={spring} variants={this.circleObject} className="ottercart__circle ottercart__circle--9"></motion.div>
                </motion.section>
            </React.Fragment>
        );
    }
}