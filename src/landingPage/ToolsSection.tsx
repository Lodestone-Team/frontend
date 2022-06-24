import React from "react";
import styles from './ToolsSection.module.scss'
import GhostBlock from "common/GhostBlock";

const ToolsSection = (props: any) => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra.";


    return (
        <section className={styles.container}>
            <h1>
                <span className={styles.gradient}>power&nbsp;manage.</span> your&nbsp;world
            </h1>

            <ul className={styles.parameters}>
                <li><p>{loremIpsum}</p></li>
                <li><p>{loremIpsum}</p></li>
                <li><p>{loremIpsum}</p></li>
                <li><p>{loremIpsum}</p></li>
                <li><p>{loremIpsum}</p></li>
            </ul>

            {/* this is done like this because it would be a waste of time to 
            implement props and stuff for ghostblock which will be removed anyways. */}
            <div className={styles.stickyBoxBounds}>
                <div className={styles.stickyBox}>
                    <GhostBlock></GhostBlock>
                </div>
            </div>
        </section>
    );
}

export default ToolsSection;