import React from "react";
import './SecuritySection.css'
import Lock from './Lock.svg'

const SecuritySection = (props: any) => {

    return (
        <section id="security">
            <div id="imageContainer">
                <img src={Lock} alt="not found" id="lock"/>
            </div>
        </section>

    );
}

export default SecuritySection;