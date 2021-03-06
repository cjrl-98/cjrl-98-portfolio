import Link from 'next/link';
import StrokedText from '../StrokedText';

export default function Header(props){
    return(
        <>
            <header className="header">
                <div className="header__wrapper">
                    <Link  href="/"><a><img className="header__logo" src="/cjrlLogo.png" alt="Personal Portfolio Logo"/></a></Link>
                    { props.isNav ? <nav className="header__nav">
                        <StrokedText onClick={()=>props.setContent('home')} content={props.content} text="home" className="header__nav-item"/>
                        <StrokedText onClick={()=>props.setContent('projects')} content={props.content} text="projects" className="header__nav-item"/>
                        <StrokedText onClick={()=>props.setContent('showreel')} content={props.content} text="showreel" className="header__nav-item"/>
                    </nav> : null
                    }
                </div>
            </header>

            <style jsx>{`
                .header{
                    width: 100%;
                    position: absolute;
                    top: 33px;
                    padding: 0 16px;
                    z-index: 100;
                }
                .header__wrapper{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .header__logo{
                    min-width: 45px;
                    width: 4vw;
                    max-width: 50px;
                }
                .header__nav{
                    display: none;
                    align-items: center;
                }
                :global(.header__nav-item){
                    font-size: 24px;
                    text-align: center;
                    margin-right: 14px;
                }
                @media (min-width: 768px){
                    .header{
                        padding: 0 48px;
                    }
                    .header__nav{
                        display: flex;
                    }
                }
                @media (min-width: 1920px){
                    :global(.header__nav-item){
                        font-size: 40px;
                    }
                }
            `}</style>
        </>
    );
}