import React from 'react';
import styles from './FooterSection.module.scss';
import image from '../assets/footerimg.svg';

const FooterSection = (props: any) => {
  // make this do whatever a download button does.
  const onClick = () => {};

  return (
    <footer className={styles.footer}>
      <div className={styles.leftColumn}>
        <h1>where will you go?</h1>

        <a href="/" className={styles.downloadButton}>
          <button onClick={onClick}>download now!</button>
        </a>

        <ul className={styles.content}>
          {/* this is a link for uniformity, change on implementation */}
          <li>
            <a href="/">about us &#8594;</a>
          </li>
          <li>
            <a href="/">work with us! &#8594;</a>
          </li>
          <li>
            <a href="/">view our GitHub!&#8594;</a>
          </li>

          <li className={styles.copyright}>
            © COPYRIGHT LODESTONE 2022. ALL RIGHTS RESERVED.
          </li>
        </ul>
      </div>

      <img className={styles.svg} src={image} alt={"Walking Together"}/>
      {/* <YourSVG className={styles.svg}></YourSVG> */}
      {/* I want to use this, however it seems to behave weirdly when trying to define height */}
    </footer>
  );
};

export default FooterSection;
