import React from 'react';
import './header-nav.scss';
import cjrlLogo from '../images/svg/cjrlLogo.png';

class Header extends React.Component {
    
    render(){
        return(
            <header className="header">
                <div className="header__wrapper">
                    <img className="header__logo" src={cjrlLogo} alt="Personal Portfolio Logo"/>
                </div>
            </header>
        );
    }
}

export default Header;