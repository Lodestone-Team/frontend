import React from "react";
import BarSection from "./BarSection";
import NavHeader from "./NavHeader";
import Bar from "./Bar";
import './FrontPage.css'

const FrontPage = (props: any) => {

    return (
        <section id="title">
            <BarSection>
                <Bar barNum='1'/>
                <Bar barNum='2'/>
                <Bar barNum='3'/>
                <Bar barNum='4'/>
            </BarSection>

            <NavHeader/>
            <header id="title">
                <h1 id="title">Lodestone</h1>
                <h2 id="title">The most comprehensive Minecraft Server Management tool.</h2>
            </header>

        </section>
    );
}

export default FrontPage;