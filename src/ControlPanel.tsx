import React from "react";
import GhostBlock from "./GhostBlock";

import './ControlPanel.css'

const ControlPanel = (props: any) => {

    // for implementation of actual setup and buttons, these will become custom classes/ids and have their own grid sizes, etc. 
    return (
        <div id="controlPanel">
            <div id="grid">
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
        </div>

    );
}

export default ControlPanel;