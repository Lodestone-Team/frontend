import React from 'react';
import styles from './SecuritySection.module.scss';
import lock from '../assets/lock.svg';

const SecuritySection = () => {
  // Contains a full width section with a repeating svg background
  // On top of the background element is a green lock
  // Underneath the lock is a text section with a heading and a description.

  return (
    <div className={styles.container} id='security'>
      <div className={styles.lockSection}>
        <div className={styles.backgroundGradient}>
          <div className={styles.lock}>
            <img src={lock} alt="lock"/>
            
            {/* TODO: make svg glow look better */}
          </div>
        </div>
      </div>

      <div className={styles.textSection}>
        <h1 className={`${styles.title} ${styles.faded}`}>Secure Something</h1>
        <h1 className={styles.titleBold}>yeah. secure.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at consectetur tortor. Quisque metus lacus, varius ut semper ac,
          finibus sit amet lectus. Proin facilisis convallis mi, efficitur
          placerat sem ultrices ut. Etiam accumsan gravida magna non finibus.
          Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean
          mattis eros id lacus euismod, vel tristique nibh viverra.
        </p>
      </div>
    </div>
  );
};

export default SecuritySection;
