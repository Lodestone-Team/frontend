import React from 'react';
import styles from './ControlSection.module.scss';
import ControlAnimation from './ControlAnimation';

const ControlSection = () => {
  const textDescription = "If you are looking for a locally hosted server management tool that gives you total control and endless fidelity, look no further than Lodestone. This tool will allow you to manage your server with ease, giving you the ability to customize and configure your server to your liking. With Lodestone, you will have the power to create the perfect Minecraft server for you and your friends to enjoy."
  return (
    <section className={styles.container}>
      <ControlAnimation></ControlAnimation>
      <h1 className={styles.left}>total control</h1>
      <h1 className={styles.right}>endless fidelity.</h1>
      <p>{textDescription}</p>
    </section>
  );
};

export default ControlSection;
