import React from 'react';
import styles from './BarAnimation.module.scss';

const BarAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.barWrapper}>
        <div className={styles.bar} />
      </div>
      <div className={styles.barWrapper}>
        <div className={styles.bar} />
      </div>
      <div className={styles.barWrapper}>
        <div className={styles.bar} />
      </div>
      <div className={styles.barWrapper}>
        <div className={styles.bar} />
      </div>
    </div>
  );
};

export default BarAnimation;
