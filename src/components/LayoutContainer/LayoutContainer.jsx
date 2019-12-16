import React, { useState, Suspense, lazy } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import "./LayoutContainer.scss";
import HomePage from "../HomePage/HomePage";
const OtterCart = lazy(()=> import('../OtterCart/OtterCart'));
const Inktistic = lazy(()=>import('../Inktistic/Inktistic'));

const homepage = <HomePage 
  shortName = "Chris" 
  role = "Software Developer"
  location = "Toronto"
  interest = {['Art','Design','Minimalism', 'Solving problems', 'Collaborative work', 'Curating playlists', 'Concerts']}
  /> 

export default function LayoutContainer () {
  const [isOtterCart, setIsOtterCart] = useState(false);
  const [isInktistic, setIsInktistic] = useState(false);

  const fullpageProps = {
    scrollingSpeed : 1000,
    loopTop : true,
    loopBottom : true,
    dragAndMove :true,
    navigation : true,
    navigationPosition : 'right',
    lazyLoading: false,
    sectionsColor:['transparent', '#000000', 'transparent']
    }

  const onLeave = (origin, destination, direction) => {
    if(origin.index === 1){
      setIsInktistic(false)
    }
    if(origin.index === 2){
      setIsOtterCart(false)
    }
  }

  const afterLoad = (origin, destination, direction) => {
    if(destination.index === 1){
      setIsInktistic(true)
    }
    if(destination.index === 2){
      setIsOtterCart(true)
    }
  }

    return(
      <Suspense fallback={<div>Loading...</div>}>
        <ReactFullpage  {...fullpageProps}   licenseKey={null} 
        onLeave={onLeave}
        afterLoad={afterLoad}
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
                    <Inktistic isInktistic={isInktistic}/>
                  </section>
                </div>
                <div className="section">
                  <section className="content-container">
                    <OtterCart isOtterCart={isOtterCart}/>
                  </section>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Suspense>
    );
} 