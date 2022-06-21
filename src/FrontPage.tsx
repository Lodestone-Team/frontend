import React from "react";
import BarAnimation from "./BarAnimation";

import './FrontPage.css'


const FrontPage = (props: any) => {

    return (
        
        <section id="titleSection">

            <BarAnimation></BarAnimation>

            <nav id="headerGrid">
                <a id="hLink" href="/">point 1</a>
                <a id="hLink" href="/">point 2</a>
                <a id="hLink" href="/">point 3</a>
                <a id="hLink" href="/">point 4</a>
            </nav>

            <header id="title">
                <h1 id="titleh1">Lodestone</h1>
                <h2 id="titleh2">The most comprehensive Minecraft Server Management tool.</h2>
            </header>

        </section>
    );
}

export default FrontPage;