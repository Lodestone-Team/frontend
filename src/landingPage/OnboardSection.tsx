import React from 'react';
import GhostBlock from 'common/GhostBlock';

import styles from './OnboardSection.module.scss';

const OnboardSection = () => {
  // for implementation of actual setup and buttons, these will become custom classes/ids and have their own grid sizes, etc.
  let ghostBlock = <GhostBlock rounded={true} />;
  
  return (
    <div className={styles.container}>
      <div className={styles.ghostContainer}>
        {/* The layout is stored in the css, I know this is not the best solution but this section is temporary anyways. */}
        {ghostBlock}
        {ghostBlock}
        {ghostBlock}
        {ghostBlock}
        {ghostBlock}
        {ghostBlock}
        <div className={styles.overlay}>
          <h1 className={styles.title}>Create your server, coming soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default OnboardSection;
