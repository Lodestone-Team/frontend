import React, { useState } from "react";
import "./App.css";

const App: React.FunctionComponent = () => {
  const [query, setQuery] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

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
          <input value={query} onChange={inputHandler} placeholder="what's your server name?" className="input" />
          <div className="App-search-container">
            <div className="App-search-btn">
              go!
            </div>
          </div>
        </div>
      </div>
      <div className="App-about">
        <div className="App-about-grid">
          <div className="App-about-container">
            <div className="App-about-title-container">
              <div className="App-about-title-grey">
                your server.
              </div>
              <div className="App-about-title-white">
                for
              </div>
              <div className="App-about-title-gradient">
                free.
              </div>
              <div className="App-about-title-white">
                forever.
              </div>
            </div>
            <div className="App-about-title-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra. 
              </div>
            </div>
          <div className="App-about-img"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
