import React from 'react';
import styles from './FooterSection.module.scss';
import { ReactComponent as YourSVG } from '../assets/footerimg.svg';

const FooterSection = (props: any) => {
  // make this do whatever a download button does.
  const onClick = () => {};

  return (
    <footer className={styles.footer}>
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

      <YourSVG className={styles.svg}></YourSVG>
    </footer>
  );
};

export default FooterSection;
