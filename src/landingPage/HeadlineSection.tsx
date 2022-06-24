import React from "react";
import BarAnimation from "./BarAnimation";

import styles from './HeadlineSection.module.scss'


const HeadlineSection = () => {

    return (
        
        <section className={styles.container}>

            <BarAnimation></BarAnimation>

            <nav className={styles.header}>
                <a href="/">point 1</a>
                <a href="/">point 2</a>
                <a href="/">point 3</a>
                <a href="/">point 4</a>
            </nav>

            <div className={styles.title}>
                <h1>Lodestone</h1>
                <h2>The most comprehensive Minecraft Server Management tool.</h2>
            </div>

        </section>
    );
}

export default HeadlineSection;