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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque at consectetur tortor. Quisque metus lacus, varius ut
            semper ac, finibus sit amet lectus. Proin facilisis convallis mi,
            efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non
            finibus. Donec eleifend magna nec nisl viverra, ac cursus odio
            rutrum.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque at consectetur tortor. Quisque metus lacus, varius ut
            semper ac, finibus sit amet lectus. Proin facilisis convallis mi,
            efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non
            finibus. Donec eleifend magna nec nisl viverra, ac cursus odio
            rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh
            viverra.
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
