import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import "./LayoutContainer.scss";
import HomePage from "../HomePage/HomePage";
import OtterCart from '../OtterCart/OtterCart';

const homepage = <HomePage 
  shortName = "Chris" 
  role = "Software Developer"
  location = "Toronto"
  interest = {['Art','Design','Minimalism', 'Solving problems', 'Collaborative work', 'Curating playlists', 'Concerts']}
  /> 

export default class LayoutContainer extends React.Component {

  state = {
    isOtterCart : false
  }

  fullpageProps = {
    scrollingSpeed : 1000,
    loopTop : true,
    loopBottom : true,
    dragAndMove :true,
    navigation : true,
    navigationPosition : 'right'
    }

  handleOtterCart = () => {
    this.setState({
      isOtterCart : !this.state.isOtterCart
    })
  }

  onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
    if(origin.index === 1){
      this.setState({isOtterCart : false})
    }
  }
  afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
    if(destination.index === 1){
      this.setState({isOtterCart : true})
    }
  }

  render(){
    return(
      <ReactFullpage  {...this.fullpageProps}   licenseKey={null} 
      onLeave={this.onLeave}
      afterLoad={this.afterLoad}
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
                  <OtterCart isOtterCart={this.state.isOtterCart}/>
                </section>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
       />
    );
  }
} 