import React from "react";
import './AboutSection.css'
import GhostBlock from "../common/GhostBlock";

const AboutSection = (props: any) => {

    return (
        <section id="about">
            <body className="aboutBody" id="free">
                <h2>your server.</h2>
                <h1>
                    <div>
                        for <h3>free</h3>
                    </div>
                    forever.
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque at consectetur tortor. Quisque metus lacus, 
                varius ut semper ac, finibus sit amet lectus. Proin facilisis 
                convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan 
                gravida magna non finibus. Donec eleifend magna nec nisl viverra,
                ac cursus odio rutrum. 
                </p>
            </body>


            <div id="free">
                <GhostBlock height='40vh' rightMarg='10vw' leftMarg='40vw'></GhostBlock>
            </div>

            <body className="aboutBody" id="setup">
                <h2>
                    (the easiest crafting recipe)
                </h2>
                <h1>
                    one click setup
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque at consectetur tortor. Quisque metus lacus, 
                varius ut semper ac, finibus sit amet lectus. Proin facilisis 
                convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan 
                gravida magna non finibus. Donec eleifend magna nec nisl viverra,
                ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel 
                tristique nibh viverra.
                </p>
            </body>


            <div id="setup">
                <GhostBlock></GhostBlock>
            </div>
            
        </section>
    );
}

export default AboutSection;