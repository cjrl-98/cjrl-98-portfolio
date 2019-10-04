import React from 'react';
import './header-nav.scss';
import cjrlLogo from '../images/svg/cjrlLogo.png';

class Header extends React.Component {
    
    render(){
        return(
            <header>
                <div className="flex-container flex-space-between">
                    <div className="logo-img-container">
                        <img src={cjrlLogo} alt="Personal Portfolio Logo"/>
                    </div>
                    <div>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;