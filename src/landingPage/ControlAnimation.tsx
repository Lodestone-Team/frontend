import React from 'react';
import styles from './ControlAnimation.module.scss';
import GhostBlock from 'common/GhostBlock';

const ControlAnimation = () => {
  let boxElement: Element | null;
  let contentRef: HTMLElement | null;
  let triggered: boolean = false;

  window.addEventListener(
    'load',
    () => {
      contentRef = document.querySelector('#box');
      boxElement = document.querySelector('#box');
      createObserver();
    },
    false,
  );

  function createObserver() {
    let observer;

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75, // choose a different threshold later
    };

    observer = new IntersectionObserver(handleIntersect, options);

    if (boxElement != null) observer.observe(boxElement);
  }

  // this is the animation function. will decide on the animation later
  function handleIntersect(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      /*           
            // logic here is that you will scroll down to the threshold, then it will trigger.
            // as Jesus said, "what has been rendered must be unrendered"
            // the trigger will set 'triggered' to True, then, for the next trigger which is on the
            // same threshold, we will see that 'triggered' is True so we will play the reverse animation
            // on the object and set 'triggered' to False to indicate the object has been derendered as Jesus intended
             */
      // let tempElement = entry.target as HTMLElement;
      if (triggered) {
        // play out animation
        // these if statements are necessary as type guards because the optional chaining operator " ?. " can be undefined
        if (contentRef?.style !== undefined) {
          contentRef.style.opacity = '100%';
          contentRef.style.animationPlayState = 'running';
        }
        triggered = false;
      } else {
        // play in animation
        if (contentRef?.style !== undefined) {
          contentRef.style.animationPlayState = 'paused';
          contentRef.style.opacity = '0%';
        }
        triggered = true;
      }
    });
  }

  return (
    <div className={styles.box}>
      {/* we can put literally any content in here to be animated by whatever */}
      <div className={styles.content}>
        <GhostBlock></GhostBlock>
      </div>
    </div>
  );
};

export default ControlAnimation;
