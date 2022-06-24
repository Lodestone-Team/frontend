import React from 'react';
import styles from './ControlSection.module.scss';
import ControlAnimation from './ControlAnimation';

const ControlSection = () => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra.';
  return (
    <section className={styles.container}>
      <ControlAnimation></ControlAnimation>
      <h1 className={styles.left}>total control</h1>
      <h1 className={styles.right}>endless fidelity.</h1>
      <p>{loremIpsum}</p>
    </section>
  );
};

export default ControlSection;
