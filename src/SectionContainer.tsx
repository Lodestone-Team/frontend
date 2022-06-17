import React from "react";

const SectionContainer = (props: any) => {
    // props to be used to change css properties defined as consts 
    const minHeight = props.minHeight;
    const backgroundColor = props.color;

    // making 'stylesheets' 
    // possible more stylesheets. i.e. styleGrey or something
    // a few  props would cover most of the basic use cases of this instance though
    let styles: React.CSSProperties = {
        minHeight: minHeight,
        background: backgroundColor,
        width: '100%',
    };

    // returning whatever structures we need here.
    return (
        <div className="page" style={styles}>
            {props.children}
        </div>
    );
}

export default SectionContainer;