import React from "react";
import "./App.css";
import WaveContainer from "./screen/animation/WaveContainer";
import WaveContainer2 from "./screen/animation/WaveContainer2";
import welcome from "./assets/w1.png";
import welcome2 from "./assets/w2.png";
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
    <div className="App">
      <header className="App-header">
        <WaveContainer />
        <img className="image-overlay" src={welcome} alt="Rantsa" />
        <img className="image-overlay2" src={welcome2} alt="Rantsa" />
        <Navbar />
        <div className="Text">
          <h1 className="fontstyle">SPARE oui</h1>
          <p>Control to save your Energy test</p>
          <h3>
            Solution for Power Allocation <br /> and Resource Efficiency
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
          <p>Impact Together</p>
        </div>
        <div className="Text-bottom">
          <h1>SPARE</h1>
          <h3>
            If you need more details about <br /> the project contact us
          </h3>
          <img className="image-down2" src={down2} alt="Rantsa" />
        </div>
        <div className="Liste-contact">
          <p>
            SPARE exerce un impact profond en diminuant l'empreinte carbone
            grâce à une gestion raffinée de l'énergie et de l'eau.
          </p>
          <p>
            En optimisant les pratiques de consommation et en encourageant des
            comportements durables, le projet favorise une utilisation plus
            responsable des ressources naturelles, tout en générant des
            économies significatives pour les foyers.
          </p>
          <p>Sapre.osc2024@gmail.com</p>
          <p>+261 34 26 347 26</p>
          <p>www.SpareOsc.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
