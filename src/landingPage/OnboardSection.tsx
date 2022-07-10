import React from 'react';
import GhostBlock from 'common/GhostBlock';

import styles from './OnboardSection.module.scss';

const OnboardSection = () => {
  // for implementation of actual setup and buttons, these will become custom classes/ids and have their own grid sizes, etc.
  return (
    <div className={styles.container}>
      <div className={styles.ghostContainer}>
        <GhostBlock></GhostBlock>
        <GhostBlock></GhostBlock>
        <GhostBlock></GhostBlock>
        <GhostBlock></GhostBlock>
        <GhostBlock></GhostBlock>
        <GhostBlock></GhostBlock>
        <div className={styles.overlay}>
          <h1>Create your server, coming soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection;
