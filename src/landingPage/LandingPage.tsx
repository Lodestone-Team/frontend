import React from "react";
import "./LandingPage.css";


import HeadlineSection from "./HeadlineSection";
import OnboardSection from "./OnboardSection";
import AboutSection from "./AboutSection";
import SecuritySection from "./SecuritySection";
import ControlSection from "./ControlSection";
import ToolsSection from "./ToolsSection";
import FooterSection from "./FooterSection";

import ControlAnimation from "./ControlAnimation";

const LandingPage: React.FunctionComponent = () => {

  //const darkBackgroundAccent = '#36393f';
  //const darkBackground = '#26282C';


  return (
    <div className="App">
      <HeadlineSection/>

      <OnboardSection/>

      <AboutSection/>
      
      {/* security section is a bit of a lost cause right now. will do later */}
      <SecuritySection></SecuritySection>

      <ControlSection/>

      <ToolsSection/>

      <FooterSection/>
    </div>
  );
}

export default LandingPage;
