import React from "react";
import './BarAnimation.css'

const BarAnimation = (props: any) => {

    return (
        <div id="container">
            <div className="container" id="container1">
                <div className="bar" id="bar1"/>
            </div>
            <div className="container" id="container2">
                <div className="bar" id="bar1"/>
            </div>
            <div className="container" id="container3">
                <div className="bar" id="bar1"/>
            </div>
            <div className="container" id="container4">
                <div className="bar" id="bar1"/>
            </div>
        </div>
    );
}

export default BarAnimation;