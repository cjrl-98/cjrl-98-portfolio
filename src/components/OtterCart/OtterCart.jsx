import React from 'react';
import './OtterCart.scss';

export default class OtterCart extends React.Component{
    style = {
        backgroundImage: 'linear-gradient(to bottom, #a8ff78, #78ffd6)'
    }
    render(){
        return(
            <React.Fragment>
                <section className="ottercart">
                    <h1 className="ottercart__title">OtterCart</h1>
                    <p className="ottercart__description">Otter Cart is a simple Google Chrome extension that alerts you about how much carbon is being emitted from shipping your item from the closest Amazon distribution centre to you along with the number of trees you’ve saved with your purchase.</p>
                    <button className="ottercart__btn">Coming Soon</button>
                    <div className="ottercart__circle ottercart__circle--1"></div>
                    <div className="ottercart__circle ottercart__circle--2"></div>
                    <div className="ottercart__circle ottercart__circle--3"></div>
                    <div className="ottercart__circle ottercart__circle--4"></div>
                    <div className="ottercart__circle ottercart__circle--5"></div>
                    <div className="ottercart__circle ottercart__circle--6"></div>
                    <div className="ottercart__circle ottercart__circle--7"></div>
                    <div className="ottercart__circle ottercart__circle--8"></div>
                    <div className="ottercart__circle ottercart__circle--9"></div>
                </section>
            </React.Fragment>
        );
    }
}