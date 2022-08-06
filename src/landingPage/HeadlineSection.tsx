import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import { Link } from 'react-scroll';
import BarAnimation from './BarAnimation';
import github from '../assets/GitHub-32px.png';
import logo from '../assets/Lodestone-32px.png';

import styles from './HeadlineSection.module.scss';

const HeadlineSection = () => {
  const [prevPos, setPrevPos] = useState<number>(0);
  const [scrollStyle, setScrollStyle] = useState<string>(); // styles.[blank] is a `string` type

  // some good old fashion js DOM manipulation :) https://bootstrap-menu.com/detail-autohide.html
  useEffect(() => {
    const handleScroll = () => {
      const currPos = window.scrollY;
      if (prevPos < currPos) {
        setScrollStyle(styles.down);
      } else if (prevPos > currPos) {
        setScrollStyle(styles.up);
      } else if (currPos < 30) {
        setScrollStyle(styles.up);
      }
      setPrevPos(currPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <nav className={styles.header + ' ' + scrollStyle}>
        <div className={styles.navLeft}>
          <Link to="home" smooth={true}>
            <img className={styles.linkImage} src={logo} alt="Lodestone logo" />
          </Link>
          {/* <a href="#home">
          </a> */}
          <Link to="about" smooth={true}>about</Link>
          <Link to="setup" smooth={true}>setup</Link>
          <Link to="security" smooth={true}>security</Link>
          <Link to="control" smooth={true}>control</Link>
          <Link to="tools" smooth={true}>tools</Link>
        </div>
        <div className={styles.navRight}>
          <a href="https://github.com/Lodestone-Team" style={{ padding: 0 }}>
            <img className={styles.linkImage} src={github} alt="github logo" />
          </a>
        </div>
      </nav>
      <section className={styles.container} id="top">
        <BarAnimation></BarAnimation>

      <div className={styles.headlineContainer}>
        <h1 className={styles.logo}>Lodestone</h1>
        <h2>The most comprehensive<br/>Minecraft Server Management tool.</h2>
      </div>
    </section>
    </>
  );
};

export default HeadlineSection;
