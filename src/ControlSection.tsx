import React, {useRef} from "react";
import './ControlSection.css'
import ControlAnimation from "./ControlAnimation";

const ControlSection = (props: any) => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra.";
    return (
        <section id="control">
            <ControlAnimation></ControlAnimation>
            <h1 id="controlTitle">total control</h1>
            <h1 id="controlTitle2">endless fidelity.</h1>
            <p id="controlPara">{loremIpsum}</p>
        </section>
    );
}

export default ControlSection;