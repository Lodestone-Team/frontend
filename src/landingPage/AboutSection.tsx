import React from 'react';
import styles from './AboutSection.module.scss';
import GhostBlock from 'common/GhostBlock';

const AboutSection = () => {
  return (
    <>
      <section className={styles.section + ' ' + styles.free}>
        <article>
          <h1 className={`${styles.faded} ${styles.title}`}>your server.</h1>
          <h1 className={styles.title}>
            for{' '}
            <span className={`${styles.gradient_color} ${styles.titleBold}`}>free.</span>
          </h1>
          <h1 className={styles.title}>
            forever.
          </h1>

          <p>
            Lodestone is our cutting edge local server management tool. It is
            the most comprehensive tool of its kind, and offers a wide range of
            features for managing your server. It is available for free, and is
            constantly updated with new features.
          </p>
        </article>

        <figure>
          <GhostBlock />
        </figure>
      </section>

      <section className={styles.section + ' ' + styles.setup}>
        <article>
          <h2 className={styles.faded}>(the easiest crafting recipe)</h2>
          <h1 className={styles.title}>one-click setup</h1>
          <p>
            Lodestone is the perfect tool for easily managing your local
            Minecraft server. With just a few clicks you can set up and
            configure your server exactly how you want it, making it easy to get
            the most out of your Minecraft experience.
          </p>
        </article>

        <figure>
          <GhostBlock />
        </figure>
      </section>
    </>
  );
};

export default AboutSection;
