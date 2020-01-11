import LandingContent from '../LandingContent/LandingContent';
import EntranceAnimation from '../EntranceAnimation/EntranceAnimation';
import Header from '../Header/Header';
import SocialBar from '../SocialBar/SocialBar';

export default function LandingLayout () {
     return(
          <>       
               <EntranceAnimation/>
               <Header/>
               <LandingContent/>
               <SocialBar/>
               <style jsx>{`
                    .content-container {
                         display: flex;
                         justify-content: space-between;
                         align-items: center;
                         justify-content: center;
                         width: 100vw;
                         height: 100vh;
                    }
               `}</style>
          </>
     );
}