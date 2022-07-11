import React from 'react';
import styles from './GhostBlock.module.scss';

// placeholder block for images, text, components. also a nice border component.
// Takes className, children, and "rounded" boolean, all optional.
const GhostBlock = ({className, children, rounded, }: any) => {
  return (
    <div className={`${styles.container} ${className} ${rounded ? styles.rounded : ''}`}>
      {children}
    </div>
  )  
};

export default GhostBlock;
