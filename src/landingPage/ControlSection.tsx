import React from 'react';
import styles from './ControlSection.module.scss';
import 'animate.css';
import GhostBlock from 'common/GhostBlock';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';

const ControlSection = () => {
  const textDescription =
    'If you are looking for a locally hosted server management tool that gives you total control and endless fidelity, look no further than Lodestone. This tool will allow you to manage your server with ease, giving you the ability to customize and configure your server to your liking. With Lodestone, you will have the power to create the perfect Minecraft server for you and your friends to enjoy.';
  const [ref, inView] = useInView({
    threshold: 0.75,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        console.log('in view');
      } else {
        console.log('out of view');
      }
    },
  });

  const ghostBlock = <GhostBlock rounded={true} />;

  const transitionStylesLeft: { [id: string]: React.CSSProperties } = {
    entering: { right: '100%' },
    entered: { right: '42.5%' },
    exiting: { right: '100%' },
    exited: { right: '100%' },
  };

  const transitionStylesRight: { [id: string]: React.CSSProperties } = {
    entering: { left: '100%' },
    entered: { left: '42.5%' },
    exiting: { left: '100%' },
    exited: { left: '100%' },
  };

  const transitionStylesHeaderLeft: { [id: string]: React.CSSProperties } = {
    entering: { right: '100%' },
    entered: { right: '10%' },
    exiting: { right: '100%' },
    exited: { right: '100%' },
  };

  const transitionStylesHeaderRight: { [id: string]: React.CSSProperties } = {
    entering: { left: '100%' },
    entered: { left: '10%' },
    exiting: { left: '100%' },
    exited: { left: '100%' },
  };


  return (
    <section className={styles.container} ref={ref} id='control'>
      <div className={styles.animationContainer}>
        <div className={`${styles.left} ${styles.ghostContainer} ${"animate__animated animate__slideInLeft"}`}>
          {ghostBlock}
          {ghostBlock}
          {ghostBlock}
          {ghostBlock}
        </div>
        <div className={`${styles.right} ${styles.ghostContainer} ${"animate__animated animate__slideInRight"}`}>
          {ghostBlock}
          {ghostBlock}
          {ghostBlock}
          {ghostBlock}
        </div>
      </div>

      <div className={styles.headerContainer}>
                <h1
                  className={`${styles.left} ${styles.title} ${"animate__animated animate__slideInLeft"}`}>
                  total control
                </h1>
                <h1
                  className={`${styles.right} ${styles.title} ${"animate__animated animate__slideInRight"}`}>
                  endless fidelity.
                </h1>
              </div>

      <p>{textDescription}</p>
    </section>
  );
};

export default ControlSection;
