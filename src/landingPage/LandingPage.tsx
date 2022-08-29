import React from 'react';
import styles from './LandingPage.module.scss';

import HeadlineSection from './HeadlineSection';
import OnboardSection from './OnboardSection';
import AboutSection from './AboutSection';
import SecuritySection from './SecuritySection';
import ControlSection from './ControlSection';
import ToolsSection from './ToolsSection';
import FooterSection from './FooterSection';

const LandingPage = () => {

  return (
    <div className={styles.page} id="home">

      <HeadlineSection/>

      {/* <OnboardSection />

      <AboutSection />

      <SecuritySection />

      <ControlSection />

      <ToolsSection />

      <FooterSection /> */}
    </div>
  );
};

export default LandingPage;
