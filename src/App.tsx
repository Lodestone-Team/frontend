import React from "react";
import "./App.css";


import FrontPage from "./FrontPage";
import ControlPanel from "./ControlPanel";
import AboutSection from "./AboutSection";
import SecuritySection from "./SecuritySection";
import ControlSection from "./ControlSection";
import ToolsSection from "./ToolsSection";
import FooterSection from "./FooterSection";

import ControlAnimation from "./ControlAnimation";

const App: React.FunctionComponent = () => {

  //const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra.";
  //const darkBackgroundAccent = '#36393f';
  //const darkBackground = '#26282C';


  return (
    <div className="App">
      <FrontPage/>

      <ControlPanel/>

      <AboutSection/>
      
      {/* security section is a bit of a lost cause right now. will do later */}
      <SecuritySection></SecuritySection>

      <ControlSection/>
      {/*
      <div className="App-control">
        <div className="App-control-title-one">total control</div>
        <div className="App-control-title-two">endless fidelity.</div>
        <div className="App-control-text">{loremIpsum}</div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="Image-Box"></div>
            </div>
            <div className="slide">
              <div className="Image-Box"></div>
            </div>

          </div>
        </div>
      </div>
  */}
      <ToolsSection/>

      <FooterSection/>
    </div>
  );
}

export default App;
