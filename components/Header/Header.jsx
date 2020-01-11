import Link from 'next/link'

export default function Header(){
    return(
        <>
            <header className="header">
                <div className="header__wrapper">
                <Link  href="/"><a><img className="header__logo" src="/cjrlLogo.png" alt="Personal Portfolio Logo"/></a></Link>
                </div>
            </header>

            <style jsx>{`
                .header{
                    position: fixed;
                    margin: 16px;
                }
                .header__logo{
                    min-width: 45px;
                    width: 4vw;
                    max-width: 25px;
                }
            `}</style>
        </>
    );
}