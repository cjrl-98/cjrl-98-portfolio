import React from 'react';
import {Link} from 'gatsby';
import './Header.scss';
import cjrlLogo from '../../images/svg/cjrlLogo.png';

class Header extends React.Component {
    
    render(){
        return(
            <header className="header">
                <div className="header__wrapper">
                <Link to="/"><img className="header__logo" src={cjrlLogo} alt="Personal Portfolio Logo"/></Link>
                </div>
            </header>
        );
    }
}

export default Header;