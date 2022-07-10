import React from 'react';

// placeholder block for images, text, components. also a nice border component.
const GhostBlock = (props: any) => {
  let styles: React.CSSProperties = {
    borderRadius: '2vmin',
    boxSizing: 'border-box',
    border: '0.2vmin solid #767A82',
    width: '100%',
    height: '100%',
  };

  return <div style={styles} className={props.className + ' ghostblock'}>{props.children}</div>;
};

export default GhostBlock;
