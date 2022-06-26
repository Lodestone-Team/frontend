import React from 'react';
import styles from './AboutSection.module.scss';
import GhostBlock from 'common/GhostBlock';

const AboutSection = () => {
  return (
    <>
      <section className={styles.section + ' ' + styles.free}>
        <article>
          <h2>your server.</h2>
          <h1>
            <div>
              for <h3>free</h3>
            </div>
            forever.
          </h1>
          <p>
          Lodestone is our cutting edge local server management tool. 
          It is the most comprehensive tool of its kind, and offers a wide 
          range of features for managing your server. It is available for free, 
          and is constantly updated with new features.
          </p>
        </article>

        <figure>
          <GhostBlock
            height="40vh"
            rightMarg="10vw"
            leftMarg="40vw"
          ></GhostBlock>
        </figure>
      </section>

      <section className={styles.section + ' ' + styles.setup}>
        <article>
          <h2>(the easiest crafting recipe)</h2>
          <h1>one click setup</h1>
          <p>
          Lodestone is the perfect tool for easily managing your local Minecraft server. 
          With just a few clicks you can set up and configure your server exactly how you want it, 
          making it easy to get the most out of your Minecraft experience.
          </p>
        </article>

        <figure>
          <GhostBlock></GhostBlock>
        </figure>
      </section>
    </>
  );
};

export default AboutSection;
