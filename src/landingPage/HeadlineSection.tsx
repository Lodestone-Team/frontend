import React, { useEffect, useState } from 'react';
import BarAnimation from './BarAnimation';
import github from '../assets/GitHub-32px.png';

import styles from './HeadlineSection.module.scss';

const HeadlineSection = () => {
  const [prevPos, setPrevPos] = useState<number>(0);
  const [scrollStyle, setScrollStyle] = useState<any>()

  // some good old fashion js DOM manipulation :) https://bootstrap-menu.com/detail-autohide.html
  useEffect(() => {
    const handleScroll = () => {
      const currPos = window.scrollY;
      if (prevPos < currPos) {
        setScrollStyle(styles.down)
      } else if (prevPos > currPos) {
        setScrollStyle(styles.up)
      }
      setPrevPos(currPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <nav className={styles.header + ' ' + scrollStyle}>
        <div className={styles.navLeft}>
          <a href="#about">about</a>
          <a href="#setup">setup</a>
          <a href="#security">security</a>
          <a href="#control">control</a>
          <a href="#tools">tools</a>
        </div>
        <div className={styles.navRight}>
          <a href="https://github.com/Lodestone-Team" style={{padding: 0}}>
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
