import React from "react";

const BarSection = (props: any) => {

    let styles: React.CSSProperties = {
        display: 'grid',
        justifyContent: 'right',
        gridTemplateColumns: '45%',
        position: 'absolute',
        rowGap: '8vh',
        width: '100%',
    };


    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default BarSection;