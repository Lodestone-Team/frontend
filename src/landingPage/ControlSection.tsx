import React from 'react';
import styles from './ControlSection.module.scss';
import 'animate.css';
import GhostBlock from 'common/GhostBlock';
import { useInView } from 'react-intersection-observer';

const ControlSection = () => {
  const textDescription =
    'If you are looking for a locally hosted server management tool that gives you total control and endless fidelity, look no further than Lodestone. This tool will allow you to manage your server with ease, giving you the ability to customize and configure your server to your liking. With Lodestone, you will have the power to create the perfect Minecraft server for you and your friends to enjoy.';
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        console.log('in view');
      } else {
        console.log('out of view'); 
      }
    },
  });
  const ghostBlock = <GhostBlock rounded={true}/>;

  // this gets translated to classnames.
  const animationClassname = (direction:String) => { return inView? `animate__animated animate__slideIn${direction} animate__slower` : 'animate__animated animate__fadeOut'}

  return (
    <section className={styles.container} ref={ref} id='control'>
      <div className={`${styles.animationContainer} animate_animated `}>
        <div className={`${styles.left} ${styles.ghostContainer} ${animationClassname("Left")}`}>  
          {ghostBlock}
          {ghostBlock}
          <div></div>
          {ghostBlock}
          {ghostBlock}
        </div>
        <div className={`${styles.right} ${styles.ghostContainer} ${animationClassname("Right")}`}>
          {ghostBlock}
          {ghostBlock}
          {ghostBlock}
          <div></div>
          {ghostBlock}
          {ghostBlock}
        </div>
        <div className={`${styles.offscreenLeft} ${styles.ghostContainer}`}>
          <div></div>
          {ghostBlock}
          <div></div>
          {ghostBlock}
          {ghostBlock}
        </div>
        <div className={`${styles.offscreenRight} ${styles.ghostContainer}`}>
          {ghostBlock}
          {ghostBlock}
          {ghostBlock}
          <div></div>
          {ghostBlock}
          {ghostBlock}
        </div>
      </div>

      <div className={styles.headerContainer}>
        <h1
          className={`${styles.left} ${styles.title} ${animationClassname("Left")}`}>  
          total control
        </h1>
        <h1
          className={`${styles.right} ${styles.title} ${animationClassname("Right")}`}>
          endless fidelity.
        </h1>
      </div>
      <p>{textDescription}</p>
    </section>
  );
};

export default ControlSection;
