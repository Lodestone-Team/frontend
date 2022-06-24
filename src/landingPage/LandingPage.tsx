import React from "react";
import styles from "./LandingPage.module.scss";


import HeadlineSection from "./HeadlineSection";
import OnboardSection from "./OnboardSection";
import AboutSection from "./AboutSection";
import SecuritySection from "./SecuritySection";
import ControlSection from "./ControlSection";
import ToolsSection from "./ToolsSection";
import FooterSection from "./FooterSection";

// import ControlAnimation from "./ControlAnimation";

const LandingPage = () => {

  //const darkBackgroundAccent = '#36393f';
  //const darkBackground = '#26282C';


  return (
    <div className={styles.container}>
      <HeadlineSection/>

      <OnboardSection/>

      <AboutSection/>
      
      {/* security section is a bit of a lost cause right now. will do later */}
      <SecuritySection/>

      <ControlSection/>

      <ToolsSection/>

      <FooterSection/>
    </div>
  );
}

export default LandingPage;
