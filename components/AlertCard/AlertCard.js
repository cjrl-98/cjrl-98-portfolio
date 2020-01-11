export default function AlertCard (props) {
    return (
        <>
        <div className="alert-card">
            <img src="/exclamation-circle-solid.svg" alt="alert icon" className="fa-exclamation-circle"></img>
            <p className="alert-card__text">{props.alertMsg}</p>
        </div>
        <style jsx>{`
            .alert-card {
                display: flex;
                opacity: 1;
                padding: 0.5rem 0.8rem;
                border: 0.1rem solid rgba( 212, 115, 126,0.5);
                border-radius: 5px;
                align-items: center;
                margin: 0.5rem 0 0 0;
            }
            .alert-card__text {
                width: 17rem;
                font-size: 10px;
                letter-spacing: 0.1rem;
                opacity: 0.5;
                margin: 0 0 0 0.5rem;
                line-height: 0.9rem;
            }
            .fa-exclamation-circle {
                width: 1rem;
                color: #D4737E;
            }
        `}</style>
        </>
    );
}

