import React from 'react';
import './AlertCard.scss';
import ExclamationCircleSolid from '../../images/svg/exclamation-circle-solid.svg';

class AlertCard extends React.Component {
    render(){
    return (
        <div className="alert-card">
            <img src={ExclamationCircleSolid} alt="alert icon" className="fa-exclamation-circle"></img>
            <p className="alert-card__text">{this.props.alertMsg}</p>
        </div>
    );
    }
}

export default AlertCard;