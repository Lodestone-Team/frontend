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
        <div className="App-about-container">
          <div className="App-about-title-container">
            <div className="App-about-title-grey">
              your server.
            </div>
            <div className="App-about-title-white-first">
              for
            </div>
            <div className="App-about-title-gradient">
              free.
            </div>
            <div className="App-about-title-white-second">
              forever.
            </div>
          </div>
          <div className="App-about-title-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra. 
            </div>
          </div>
        <div className="App-about-img"></div>
      </div>

      <div className="App-simple-setup">
        <div className="App-simple-setup-container">
          <div className="App-simple-setup-superscript">
            (the easiest crafting recipe)
          </div>
          <div className="App-simple-setup-title">
            one-click setup.
          </div>
          <div className="App-simple-setup-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra.
          </div>
        </div>
      </div>

      <div className="App-security">
        <div className="App-security-binary">
          00110010101101010101000111110101010100001111000000100100111001100101011010101010001111101111100000000100111000001000100010010101000100100111001101100011000111001111011101111000010010111110000100000011001000100000100111010000011111000101100001000000111101011010100001111001100111111101101110110110010100101110100001111001000100110110001111010010101000110110000101101100110001001110010010110101111011001010100110010010110101100001100010000000011110000000100001001000010011100111001011000110110000000011001001110011010110101000101000000000001100011001111110011111100110110001011000000100110001111110111110110011011100100111111011110011001010000110001011001001011010111011101101011011010011110111001111000101000011010001100001011010010110110110010110100101010010010110001110000010100110001010101000011101000010110001010001111000011100111000001110111100110001000110010001000101011111111110010111111001101101011001001010100000111010010100111111010000100000010010101010101110010010010011110001001100010011100111100000000111110111101101000110101101001101110011000000000010001111010000110001111011101101100111000111010100011110011101001111011010110100111111110001100000110011100100001101001100111101011010101100000010100001100010101010001101100010100000000001110101011111101001100001101001011110110110111101100001100001101100000001010010111010010001011101011111010011011010110100011001001111010000000111001111111010010100010101110101110100000011000001111011001011110011010101010101110011001011100101110100010111000010010101001100101001111111011000101011000101101011101110101101110100010010010100001101101010100010010100000000001100100110101110000010100000010010101110011100010110000001010101101010111011111101100001111000010101101110100010111100011101111010000100110001111010001110101101001111110000000011010000011101010010110011111000100000110010101010010011111000010000011111110010000001011001000000111000011010101101101000100001000111100011011000110011100001110110001101111010001100001110101101010111010100110000010011110101101100000000100001100000100101000111111010000001011001110110110001001001010110001100011100010010001010001000000011111010100010000110100011000111010011101001000111101100101011101001010111001101000101010011111000001100111111101010011001100011011011111010110011011000110000010010101000011011111000001011111110000001011111011001010000100010001110100000001011101100010101111000010001111111101011101111001011111010010111101010000001010101011011011010010001110000110000000111100111111111100100101101010111001101001110001010011100001110101111110110001001000100000011110100100010111000110101110110010100100001001001010000110001001101011010011000101111010001111111000111010001110000011001111100000010011100011111111101110100010000010000010100001011110010000000100011101000100000100001111000111101110010000110001011001000110111010011011011000100010000000101100011011100000011111101100110100100010110010000100000011101000100100100010100000101011101011101001100001101100111110111100101100111010100101010001001011111101011011110011000110001010010111010100110011101000001101100000110111000011110010011000010110110010101010110011100010001101101100111101011000001110100000111010010000010000101000101010011010110001010101111001001001110010100000111110111011100100101011100011110011101111100111001000100000101100011000111001011100010000011111000101100110010010001110011111010100011001110010110010010000111100110111000001100101101011010110111011010100100101011000110110010010010010001001000000110110101111101011011010100011011011000010010010110000010110001000011000101000100101010111001001010000001001001010110011000101101101100100111111111001010001100010100011101110101010111110011001010100000100110000000001011101100101101011011111011010111110011000000010111000110111111101111000010111110110100101011011110001001001011000001000010111101000101001011000111101110001011000101110101000110001011001100111011000100110001001001011001110011111100110110111001110000101111001010110000001100101101000011001000011111010010011110000011010011001101101001100111001111100011110110011000000010001101001000110011110110010111000011100010111001101101010001111001100010111001000111011001111000010110110101110101001101111000001101001000000111111111101000111010101010111111010111001001000001001100011111111000011001110010100001111010111110101101000010000100101010001110101001001011111101100110101000001011100010100010010110111001110100001110110011101000100110010101110000010001111001000101010010001101011010100000111100101001001100101100100110111100101001010111001101101000111100111110110100010110100100101001110000110111001111000010011110110101101110100101100010010101110111011010010110010111111100110010100100000001111101010110100110110001011010000011110110101010111010011011001111000010010010001001011100010111110100100001110110110011001100111111101110000100011101001001000111011001011101111011010100100011111000101110110101000001111100001100111111111010101011111011010000111001000010010000110010001100100100001000110011001011111100101001101110010101100100000000001000100010010101000100100111001101100011000111001111011101111000010010111110000100000011001000100000100111010000011111000101100001000000111101011010100001111001100111111101101110110110010100101110100001111001000100110110001111010010101000110110000101101100110001001110010010110101111011001010100110010010110101100001100010000000011110000000100001001000010011100111001011000110110000000011001001110011010110101000101000000000001100011001111110011111100110110001011000000100110001111110111110110011011100100111111011110011001010000110001011001001011010111011101101011011010011110111001111000101000011010001100001011010010110110110010110100101010010010110001110000010100110001010101000011101000010110001010001111000011100111000001110111100110001000110010001000101011111111110010111111001101101011001001010100000111010010100111111010000100000010010101010101110010010010011110001001100010011100111100000000111110111101101000110101101001101110011000000000010001111010000110001111011101101100111000111010100011110011101001111011010110100111111110001100000110011100100001101001100111101011010101100000010100001100010101010001101100010100000000001110101011111101001100001101001011110110110111101100001100001101100000001010010111010010001011101011111010011011010110100011001001111010000000111001111111010010100010101110101110100000011000001111011001011110011010101010101110011001011100101110100010111000010010101001100101001111111011000101011000101101011101110101101110100010010010100001101101010100010010100000000001100100110101110000010100000010010101110011100010110000001010101101010111011111101100001111000010101101110100010111100011101111010000100110001111010001110101101001111110000000011010000011101010010110011111000100000110010101010010011111000010000011111110010000001011001000000111000011010101101101000100001000111100011011000110011100001110110001101111010001100001110101101010111010100110000010011110101101100000000100001100000100101000111111010000001011001110110110001001001010110001100011100010010001010001000000011111010100010000110100011000111010011101001000111101100101011101001010111001101000101010011111000001100111111101010011001100011011011111010110011011000110000010010101000011011111000001011111110000001011111011001010000100010001110100000001011101100010101111000010001111111101011101111001011111010010111101010000001010101011011011010010001110000110000000111100111111111100100101101010111001101001110001010011100001110101111110110001001000100000011110100100010111000110101110110010100100001001001010000110001001101011010011000101111010001111111000111010001110000011001111100000010011100011111111101110100010000010000010100001011110010000000100011101000100000100001111000111101110010000110001011001000110111010011011011000100010000000101100011011100000011111101100110100100010110010000100000011101000100100100010100000101011101011101001100001101100111110111100101100111010100101010001001011111101011011110011000110001010010111010100110011101000001101100000110111000011110010011000010110110010101010110011100010001101101100111101011000001110100000111010010000010000101000101010011010110001010101111001001001110010100000111110111011100100101011100011110011101111100111001000100000101100011000111001011100010000011111000101100110010010001110011111010100011001110010110010010000111100110111000001100101101011010110111011010100100101011000110110010010010010001001000000110110101111101011011010100011011011000010010010110000010110001000011000101000100101010111001001010000001001001010110011000101101101100100111111111001010001100010100011101110101010111110011001010100000100110000000001011101100101101011011111011010111110011000000010111000110111111101111000010111110110100101011011110001001001011000001000010111101000101001011000111101110001011000101110101000110001011001100111011000100110001001001011001110011111100110110111001110000101111001010110000001100101101000011001000011111010010011110000011010011001101101001100111001111100011110110011000000010001101001000110011110110010111000011100010111001101101010001111001100010111001000111011001111000010110110101110101001101111000001101001000000111111111101000111010101010111111010111001001000001001100011111111000011001110010100001111010111110101101000010000100101010001110101001001011111101100110101000001011100010100010010110111001110100001110110011101000100110010101110000010001111001000101010010001101011010100000111100101001001100101100100110111100101001010111001101101000111100111110110100010110100100101001110000110111001111000010011110110101101110100101100010010101110111011010010110010111111100110010100100000001111101010110100110110001011010000011110110101010111010011011001111000010010010001001011100010111110100100001110110110011001100111111101110000100011101001001000111011001011101111011010100100011111000101110110101000001111100001100111111111010101011111011010000111001000010010000110010001100100100001000110011001011111100101001101110010101100100000      
        </div>
        <div className="App-security-lock">
            <div className="App-security-lock-top"></div>
            <div className="App-security-lock-bot"></div>
        </div>
        <div className="App-security-lock-key">
            <div className="App-key-bot"></div>
            <div className="App-key-top"></div>
        </div>

        <div className="App-security-title-one">
          blurb about security.
        </div>
        <div className="App-security-title-two">
          yeah. secure.
        </div>
        <div className="App-security-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at consectetur tortor. Quisque metus lacus, varius ut semper ac, finibus sit amet lectus. Proin facilisis convallis mi, efficitur placerat sem ultrices ut. Etiam accumsan gravida magna non finibus. Donec eleifend magna nec nisl viverra, ac cursus odio rutrum. Aenean mattis eros id lacus euismod, vel tristique nibh viverra. 
        </div>
      </div>

      <div className="App-control">

      </div>

      <div className="App-tools">
        <div className="App-tools-title-one">

        </div>
        <div className="App-tools-title-two">
          
        </div>
        
      </div>

      <div className="App-footer">

      </div>
    </div>
  );
}

export default App;
