import React from "react";

// remove 

//
const ControlPanel = (props: any) => {

    let styles: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '10vw 10vw 10vw 10vw 10vw 10vw 10vw',
        gridTemplateRows: '10vw 10vw 10vw',
        columnGap: '1vw',
        rowGap: '1vw',

        position: 'absolute',
        margin: '10vw',
        bottom: '1px',
    };

    return (
        <div style={styles}>

            {props.children}
            {props.children}
            {props.children}

        </div>
    );
}

export default ControlPanel;