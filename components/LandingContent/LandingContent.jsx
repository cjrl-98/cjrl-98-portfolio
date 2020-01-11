import ReactFullpage from '@fullpage/react-fullpage';
import Home from '../Home/Home';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

export default function LandingContent () {

     const fullpageProps = {
          scrollingSpeed : 1000,
          loopTop : true,
          loopBottom : true,
          dragAndMove :true,
          navigation : true,
          navigationPosition : 'right',
          lazyLoading: false,
     }

     return(
          <>   
               <ReactFullpage {...fullpageProps}   licenseKey={null} 
                    render={ () => {
                         return (
                              <>
                                   <ReactFullpage.Wrapper>
                                        <div className="section ">
                                             <section className="content-container"> 
                                                  <Home/>
                                             </section>
                                        </div>
                                        <div className="section ">
                                             <section className="content-container"> 
                                                  <ProjectsPage/>
                                             </section>
                                        </div>
                                   </ReactFullpage.Wrapper>
                              </>
                         );
                    }}
               />
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