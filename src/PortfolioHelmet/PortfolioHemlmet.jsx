import React from 'react';
import {Helmet} from 'react-helmet';

class PortfolioHelmet extends React.Component {
    render(){
        return(
                <Helmet>
                    <title>Software Developer - Christian</title>
                    <link href="./src/fontawesome-free-5.10.1-web/css/all.css" rel="stylesheet"/>
                    <script src="https://kit.fontawesome.com/bd54b583dc.js"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet"/>
                </Helmet>
        );
    }
}


export default PortfolioHelmet;