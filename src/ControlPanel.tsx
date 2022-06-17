import React from "react";

// remove 

//
const ControlPanel = (props: any) => {

    let styles: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '15vw 15vw 15vw 15vw 15vw',
        gridTemplateRows: '15vw 15vw 15vw',
        columnGap: '1vw',
        rowGap: '1vw',

        position: 'absolute',
        margin: '9vw',
        top: '1vh',
    };

    // a different layout scheme is most likely required for smaller screens/windows.
    return (
        <div style={styles}>
            {props.children}

            {/* test code */}
            {props.children}
            {/* test code */}

        </div>
    );
}

export default ControlPanel;