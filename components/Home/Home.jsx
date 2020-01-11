import ReactRotatingText from 'react-rotating-text';
import AlertCard from '../AlertCard/AlertCard';
export default function Home(){

    return (
        <>
            <div className="home">
                <div className="home__text-wrapper">
                    <h1 className="home__h1">Hello.</h1>
                    <h1 className="home__h1">I'm Chris</h1>
                    <h2 className="home__h2">a <span>Software Developer</span></h2>
                    <h2 className="home__h2">based in <span>Toronto</span></h2>
                    <h2 className="home__h2">{`who loves `}  
                    <span>     
                        <ReactRotatingText items={['Art','Design','Minimalism', 'Solving problems', 'Collaborative work', 'Curating playlists', 'Concerts']}/>
                    </span>
                    </h2>
                    <AlertCard alertMsg="Redesigning the site to showcase my Bootcamp journey over at BrainStation !"/>
                </div>
                <div className="home__img-container">
                    <img className= "home__img" src="/CnTowerSkyline.svg" alt="a minimalistic illustration of CN Tower"></img>
                </div>
            </div>
            <style jsx>{`
               .home {
                    display: flex;
                    margin: 0 auto;
                    align-items: center;
               }
               .home__img{
                    transition: ease-in 5s all;
                    display:none;
               }
               .home__h1 {
                    font-size: 3.4rem;
                    font-weight: 900;
                    letter-spacing: 0.1rem;
               }
               .home__h2 {
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 0.1rem;
                    margin: 0.3rem 0 0 0.2rem;   
               }
               .home__h2 span {
                    color: #D4737E;
               }
               .react-rotating-text-cursor {
                    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
               }
               @keyframes blinking-cursor {
                    0% {
                         opacity: 0;
                    }
                    50% {
                         opacity: 1;
                    }
                    100% {
                         opacity: 0;
                    }
               }
               @media only screen and (min-width: 760px) {
                    .home__img{
                         display: block;
                         width: 12rem;
                         min-width: 290px;
                         z-index: -5;
                    }
               }
            `}</style>
        </>
    );
}
