import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import "./LayoutContainer.scss";
import HomePage from "../HomePage/HomePage";
import OtterCart from '../OtterCart/OtterCart';
import BackgroundEffect from '../BackgroundEffect/BackgroundEffect';

const fullpageProps = {
  scrollingSpeed : 1000,
  loopTop : true,
  loopBottom : true,
  dragAndMove :true,
  navigation : true,
  navigationPosition : 'right'
}

const homepage = <HomePage 
  shortName = "Chris" 
  role = "Software Developer"
  location = "Toronto"
  interest = {['Art','Design','Minimalism', 'Solving problems', 'Collaborative work', 'Curating playlists', 'Concerts']}
  /> 

const LayoutContainer = () => (
  <ReactFullpage  {...fullpageProps}   licenseKey={null}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <section className="content-container">
              {homepage}
            </section>
          </div>
          <div className="section">
            <section className="content-container">
              <OtterCart/>
            </section>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

  export default LayoutContainer;