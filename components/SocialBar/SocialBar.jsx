export default function SocialBar (){
    return (
      <>
          <div className='social-bar'>
            <a href='https://www.linkedin.com/in/christian-lagasca-5a1625186/' target="_blank" rel="noopener noreferrer">
              <img className="social-bar__icon" src='/linkedin-icon.svg' alt="linkedIN icon"/>
            </a>
            <a href='https://dribbble.com/cjrl_' target="_blank" rel="noopener noreferrer">
              <img className="social-bar__icon" src='/dribbble-ball-icon.svg' alt = "dribbble icon"/>
            </a>

            <a href='https://github.com/cjrl-98' target="_blank" rel="noopener noreferrer">
              <img className="social-bar__icon" src='/git-hub-icon.svg' alt="git hub icon"/>
            </a>
          </div>
          
        <style jsx>{`
          .social-bar {
            position: fixed;
            bottom: 0;
            width:100%;
            text-align: center;
          }      
          .social-bar__icon{
            width: 1.3rem;
            margin: 1.3rem;
          } 
        `}</style>
      </>
    );
}
