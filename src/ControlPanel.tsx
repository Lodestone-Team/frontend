import React from "react";
import GhostBlock from "./GhostBlock";

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
    // possible different block classes. or we find a way for these children to have grid props? 
    return (
        <div style={styles}>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
            <GhostBlock></GhostBlock>
        </div>
    );
}

export default ControlPanel;