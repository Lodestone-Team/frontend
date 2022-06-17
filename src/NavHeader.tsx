import React from "react";
const NavHeader = (props: any) => {
    
    let gridStyles: React.CSSProperties = {
        gridTemplateColumns: 'auto auto auto auto',
        position: 'absolute',
        display: 'grid',
        right: '5vw',
        top: '4vh',
    };

    let linkStyles: React.CSSProperties = {
        textDecoration: 'none',
        lineHeight: '27px',
        fontWeight: 700,
        fontSize: '1.75rem',
        color: '#E3E3E4',
        width: '8.33vw',
    };

    // we can add a link type later on?? 
    return (
        <header>
            <nav style={gridStyles}>
                <a style={linkStyles} href="/">point 1</a>
                <a style={linkStyles} href="/">point 2</a>
                <a style={linkStyles} href="/">point 3</a>
                <a style={linkStyles} href="/">point 4</a>
            </nav>
        </header>
    );
}

export default NavHeader;