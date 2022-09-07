import React, { useEffect, useState } from 'react';
import styles from './ToolsSection.module.scss';
import GhostBlock from 'common/GhostBlock';
import { TOOL_SECTION_CONTENT } from '../content/ToolSectionText';
import VisibilitySensor from 'react-visibility-sensor';
import { Transition } from 'react-transition-group';
import { placeholderTexts } from 'placeholders/ToolsSectionImage';

const ToolsSection = (props: any) => {
  const [realVisibility, setRealVisibility] = useState<boolean[]>(
    [false, false, false, false, false],
  );
  const [transitionVisibility, setTransitionVisibility] = useState<boolean[]>(
    [false, false, false, false, false],
  );

  useEffect(() => {
    const firstVisibleIndex = realVisibility.indexOf(true);
    if (firstVisibleIndex !== -1) {
      const newVisbility = TOOL_SECTION_CONTENT.map(() => false);
      newVisbility[firstVisibleIndex] = true;
      setTransitionVisibility(newVisbility);
    }
  }, [realVisibility]);

  return (
    <section className={styles.container} id="tools">
      <div className={styles.subcontainer}>
        <div>
          <h1 className={`${styles.titleBold} ${styles.gradient_color}`}>
            power&nbsp;manage
          </h1>
          <h1 className={styles.title}>your&nbsp;world.</h1>
        </div>

        <div className={styles.stickySectionContainer}>
          <ul className={styles.parameters}>
            {TOOL_SECTION_CONTENT.map((content, index) => {
              return (
                <VisibilitySensor
                  onChange={(isVisible: boolean) => {
                    const newRealVisibility = [...realVisibility];
                    newRealVisibility[index] = isVisible;
                    setRealVisibility(newRealVisibility);
                  }}
                  intervalDelay={10}
                  intervalCheck={true}
                  scrollCheck={true}
                >
                  <li>
                    <h4 className={styles.gradient_color}>{content.title}</h4>
                    <p>{content.body}</p>
                  </li>
                </VisibilitySensor>
              );
            })}
          </ul>

          <div className={styles.stickyBoxBounds}>
            <div className={styles.stickyBox}>
              <GhostBlock>
                {placeholderTexts.map((text, index) => (
                  <Transition in={transitionVisibility[index]} timeout={500}>
                    {(state) => (
                      <p
                        style={{
                          position: 'absolute',
                          ...defaultStyle,
                          ...transitionStyles[state],
                        }}
                      >
                        {text}
                      </p>
                    )}
                  </Transition>
                ))}
              </GhostBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultStyle = {
  right: 0,
  top: 0,
  color: 'white',
  transition: `opacity 500ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

export default ToolsSection;
