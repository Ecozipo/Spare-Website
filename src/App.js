import React from "react";
import "./App.css";
import WaveContainer from "./screen/animation/WaveContainer";
import WaveContainer2 from "./screen/animation/WaveContainer2";
import welcome from "./assets/w1.png";
import Navbar from "./screen/Navbar/Navbar";
import About from "./screen/About/About";
import Application from "./screen/Application/Application";
import Modules from "./screen/Modules/Modules";
import Team from "./screen/Team/Team";
import down2 from "./assets/dowload2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <WaveContainer />
        <img className="image-overlay" src={welcome} alt="Rantsa" />
        <Navbar />
        <div className="Text">
          <h1>SPARE</h1>
          <p>Control to save</p>
          <h3>
            Manage your Energy with our <br /> Application & Modules
          </h3>
        </div>
      </header>
      <About />
      <Application />
      <Modules />
      <Team />
      <footer className="App-footer">
        <WaveContainer2 />
        <div className="Text-contact">
          <h3>LET'S TALK</h3>
          <p>Contact us!</p>
        </div>
        <div className="Text-bottom">
          <h1>SPARE</h1>
          <h3>
            If you need more details about <br /> the project contact us
          </h3>
          <img className="image-down2" src={down2} alt="Rantsa" />
        </div>
        <div className="Liste-contact">
          <p>Sapre.osc2024@gmail.com</p>
          <p>+261 34 26 347 26</p>
          <p>www.SpareOsc.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
