import React from "react";
import "./App.css";


import SectionContainer from "./SectionContainer";
import FrontPage from "./FrontPage";
import ControlPanel from "./ControlPanel";
import AboutSection from "./AboutSection";
import GhostBlock from "./GhostBlock";

const App: React.FunctionComponent = () => {

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra.";
  const darkBackgroundAccent = '#36393f';
  const darkBackground = '#26282C';


  return (
    <div className="App">
      <FrontPage></FrontPage>

      <SectionContainer minHeight='100vh' color={darkBackground}>
        <ControlPanel> </ControlPanel>
      </SectionContainer>

      <AboutSection></AboutSection>

      <div className="App-control">
        <div className="App-control-title-one">total control</div>
        <div className="App-control-title-two">endless fidelity.</div>
        <div className="App-control-text">{loremIpsum}</div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="Image-Box"></div>
            </div>
            <div className="slide">
              <div className="Image-Box"></div>
            </div>

          </div>
        </div>
      </div>

      <div className="Section-Default" id="Tools-section">
        <div className="Header-Gradient" id="Tools-title-grad">
          power manage
        </div>
        <div className="Header-White" id="Tools-title-white">
          your world.
        </div>

        <div id="Control-text-wrapper">
          <div id="Control-text-one" className="Text-Paragraph">{loremIpsum}</div>
          <div id="Control-text-two" className="Text-Paragraph">{loremIpsum}</div>
          <div id="Control-text-three" className="Text-Paragraph">{loremIpsum}</div>
          <div id="Control-text-four" className="Text-Paragraph">{loremIpsum}</div>
          <div id="Control-text-five" className="Text-Paragraph">{loremIpsum}</div>

          <div className="App-control-image-stickybox">
            <div className="Image-Box" id="Control-sticky-img">
              unionize.png
            </div>
          </div>
        </div>
      </div>

      <div className="Section-Default" id="Footer">
        <div className="Header-White" id="Footer-title">
          where will you go?
        </div>
        <a
          href="/"
          id="Footer-download"
          className="Text-Paragraph Footer-Links"
        >
          download now!
        </a>
        <a
          href="/"
          id="Footer-github"
          className="Text-Paragraph Footer-Links"
        >
          view our github repo! &#8594;
        </a>
        <a
          href="/"
          id="Footer-wwu"
          className="Text-Paragraph Footer-Links"
        >
          work with us! &#8594;
        </a>
        <a
          href="/"
          id="Footer-about-us"
          className="Text-Paragraph Footer-Links"
        >
          about us &#8594;
        </a>
        <div id="Footer-cc" className="Text-Paragraph Footer-Links">
          © COPYRIGHT LODESTONE 2022. ALL RIGHTS RESERVED.
        </div>
        <div id="Footer-image" className="Image-Box"></div>
      </div>
    </div>
  );
}

export default App;
