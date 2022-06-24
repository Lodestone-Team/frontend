import React from "react";
import './FooterSection.css'
import { ReactComponent as YourSVG } from "../assets/footerimg.svg";

const FooterSection = (props: any) => {

    const onClick = () => {};

    return (
        <section id="footer">
            <h1 id="footerh1">
                where will you go?
            </h1>

            <ul id="footerNavbar">
                <li id="buttonContainer">
                    {/* this is a link for uniformity, change on implementation */}
                    <a href="/">
                        <button id="downloadButton" onClick={onClick}>
                            download now!
                        </button>
                    </a>
                </li>
                <li><a href="/">about us        &#8594;</a></li>
                <li><a href="/">work with us!   &#8594;</a></li>
                <li><a href="/">view our GitHub!&#8594;</a></li>

                <li id="footerCC">
                    © COPYRIGHT LODESTONE 2022. ALL RIGHTS RESERVED.
                </li>
            </ul>

            <YourSVG id="footersvg"></YourSVG>

        </section>
    );
}

export default FooterSection;