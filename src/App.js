// import landing from './pages/landing.js';
import styled from "styled-components";
import React, { useState } from "react";
import "./App.css";

const StyledInput = styled.input`
  background: #c4c4c4;
  text-align: center;
  width: 100%;
  height: 2.5vh;
  background: #c4c4c4;
  border: 0px transparent;
  border-radius: 40px;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 700;
  font-size: calc(0px + 2vmin);
  line-height: 0%;
  /* identical to box height, or 0px */

  letter-spacing: -0.01em;

  /* dark bg accent */
  color: #36393f;
`;

// Creating a custom hook
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

function App() {
  const inputValue = useInput();
  return (
    <div className="App">
      <div className="App-fp">
        <div className="App-bars">
          <div className="App-bar1-container">
            <div className="App-bar1"></div>
          </div>
          <div className="App-bar2-container">
            <div className="App-bar2"></div>
          </div>
          <div className="App-bar3-container">
            <div className="App-bar3"></div>
          </div>
          <div className="App-bar4-container">
            <div className="App-bar4"></div>
            </div>
        </div>
        <header className="App-header">
          <div className="App-header-grid">
            <div className="header-grid-item">point 1</div>
            <div className="header-grid-item">point 2</div>
            <div className="header-grid-item">point 3</div>
            <div className="header-grid-item">point 4</div>
          </div>
        </header>
        <div className="App-fp-container">
          <div className="App-title">Lodestone</div>
          <div className="App-header2">
            The most comprehensive Minecraft Server Management tool.
          </div>
        </div>
      </div>
      <div className="App-create">
        <div className="App-compenent"></div>
        <div className="App-searchbar">
          <StyledInput {...inputValue} placeholder="what's your server name?" />
          <div className="App-search-container">
            <div className="App-search-btn">
              go!
            </div>
          </div>
        </div>
      </div>
      <div className="App-about">
        <div className="App-about-grid">
          <div className="App-about-container"></div>
          <div className="App-about-img"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
