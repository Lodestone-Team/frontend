import React, { useState } from 'react';
import styles from './ToolsSection.module.scss';
import GhostBlock from 'common/GhostBlock';
import { TOOL_SECTION_CONTENT } from '../content/ToolSectionText';
import VisibilitySensor from 'react-visibility-sensor';


const ToolsSection = (props: any) => {

  const [sectionVisibility, setSectionVisibility] = useState<boolean[]>(TOOL_SECTION_CONTENT.map(()=>false))

  return (
    <section className={styles.container}>
      <h1>
        <span className={styles.gradient}>power&nbsp;manage.</span>
        <br />your&nbsp;world
      </h1>

      <ul className={styles.parameters}>
        {TOOL_SECTION_CONTENT.map((content, index) => {
          return (
            <VisibilitySensor onChange={(isVisible: boolean) => {
              const newSectionVisibility = [...sectionVisibility];
              newSectionVisibility[index] = isVisible
              setSectionVisibility(newSectionVisibility);
              }}
              >
              <li>
                  <h2>{content.title}</h2>
                  <p>{content.body}</p>
              </li>
            </VisibilitySensor>
          )
        })}
      </ul>

      <div className={styles.stickyBoxBounds}>
        <div className={styles.stickyBox}>
          <GhostBlock>
            <p style={{color: 'white'}}>
              {sectionVisibility.findIndex((truthness) => truthness)}
            </p>
          </GhostBlock>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
