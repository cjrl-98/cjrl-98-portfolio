import React from 'react';
import './Header.scss';
import cjrlLogo from '../../images/svg/cjrlLogo.png';

class Header extends React.Component {
    
    render(){
        return(
            <header className="header">
                <div className="header__wrapper">
                    <a href="https://cjrl98.com/"><img className="header__logo" src={cjrlLogo} alt="Personal Portfolio Logo"/></a>
                </div>
            </header>
        );
    }
}

export default Header;