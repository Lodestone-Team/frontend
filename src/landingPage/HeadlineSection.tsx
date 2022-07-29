import React from 'react';
import BarAnimation from './BarAnimation';
import github from '../assets/GitHub-32px.png';

import styles from './HeadlineSection.module.scss';

const HeadlineSection = () => {
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.navLeft}>
          <a href="#about">about</a>
          <a href="#setup">setup</a>
          <a href="#security">security</a>
          <a href="#control">control</a>
          <a href="#tools">tools</a>
        </div>
        <div className={styles.navRight}>
          <a href="https://github.com/Lodestone-Team" >
            <img className={styles.linkImage} src={github} alt="github logo" />
          </a>
        </div>
      </nav>
      <section className={styles.container}>
        <BarAnimation></BarAnimation>

        <div className={styles.title}>
          <h1>Lodestone</h1>
          <h2>The most comprehensive Minecraft Server Management tool.</h2>
        </div>
      </section>
    </>
  );
};

export default HeadlineSection;
