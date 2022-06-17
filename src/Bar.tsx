import React from "react";
import "./Bar.css";

const Bar = (props: any) => {
    
    const barNum = props.barNum;
    let contID = "novalue";
    let barID = "novalue";

    if (barNum === '1') {
        contID = 'container1';
        barID = 'bar1';
    } if (barNum === '2') {
        contID = 'container2';
        barID = 'bar2';
    } if (barNum === '3') {
        contID = 'container3';
        barID = 'bar3';
    } if (barNum === '4') {
        contID = 'container4';
        barID = 'bar4';
    }

    let contStyles: React.CSSProperties = {
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        animationDuration: '3s',
    };

    let barStyles: React.CSSProperties = {
        height: '15vh',
        borderRadius: "100px 0px 0px 100px",
    };

    return (
        <div className="container" id={contID} style={contStyles}>
            <div className="bar" id={barID} style={barStyles}/>
        </div>
    );
}

export default Bar;