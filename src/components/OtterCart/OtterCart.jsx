import React from 'react'
import {motion} from 'framer-motion';
import './OtterCart.scss';

export default class OtterCart extends React.Component{
    style = {
        backgroundImage: 'linear-gradient(to bottom, #a8ff78, #78ffd6)'
    }
    variants = {
        open: { opacity : 1, scale : 1 },
        closed: { opacity: 0, scale : 0},
      }
    render(){
        console.log(this.props.isOtterCart)
        return(
            <React.Fragment>
                <section className="ottercart">
                    <motion.h1 variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__title">OtterCart</motion.h1>
                    <motion.p variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__description">Otter Cart is a simple Google Chrome extension that alerts you about how much carbon is being emitted from shipping your item from the closest Amazon distribution centre to you along with the number of trees you’ve saved with your purchase.</motion.p>
                    <motion.button variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__btn">Coming Soon</motion.button>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} lassName="ottercart__circle ottercart__circle--1"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--2"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--3"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--4"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--5"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--6"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--7"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--8"></motion.div>
                    <motion.div variants={this.variants} animate={this.props.isOtterCart ? "open" : "closed"} className="ottercart__circle ottercart__circle--9"></motion.div>
                </section>
            </React.Fragment>
        );
    }
}