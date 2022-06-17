import React from "react";

// placeholder block for images, text, components. also a nice border component. 
const GhostBlock = (props: any) => {
    
    const rightMarg = props.rightMarg;
    const leftMarg = props.leftMarg;
    const height = props.height;

    let styles: React.CSSProperties = {
        borderRadius: '2vmin',
        boxSizing: 'border-box',
        border: '0.2vmin solid #767A82',

        marginRight: rightMarg,
        marginLeft: leftMarg,
        height: height,
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default GhostBlock;