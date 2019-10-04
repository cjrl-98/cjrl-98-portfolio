import React from 'react';
import {Helmet} from 'react-helmet';

class PortfolioHelmet extends React.Component {
    render(){
        return(
                <Helmet>
                    <title>Software Developer - Christian Lagasca</title>
                    <meta name="description" content="Christian Lagasca Personal Website"/>
                    <meta name="keywords" content="Christian Lagasca,christian lagasca,toronto,Software Developer,Front-End,Full-Stack,Software Developer - Christian Lagasca"/>
                    <meta name="author" content="Christian Lagasca"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet"/>
                </Helmet>
        );
    }
}


export default PortfolioHelmet;