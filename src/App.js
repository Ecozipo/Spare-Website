import React from "react";
import "./App.css";
import WaveContainer from "./screen/animation/WaveContainer";
import welcome from "./assets/w1.png";
import Navbar from "./screen/Navbar/Navbar";
import About from "./screen/About/About";
import Application from "./screen/Application/Application";
import Modules from "./screen/Modules/Modules";

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
    </div>
  );
}

export default App;
