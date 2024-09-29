import React from "react";
import "./Application.css";
import App from "../../assets/Application.png";
import down1 from "../../assets/download.png";
import date from "../../assets/date.png";
import jauge from "../../assets/jauge.png";
import light from "../../assets/light.png";

const Application = () => {
  return (
    <div id="project" className="Application-body">
      <img className="imagedate" src={date} alt="About App and Modules" />
      <img className="imagejauge" src={jauge} alt="About App and Modules" />
      <img className="imagelight" src={light} alt="About App and Modules" />
      <div className="Text-Application">
        <h4>Mobile APP</h4>
        <p>FEATURES</p>

        <p>
          L'application mobile SPARE est au cœur de la gestion durable des
          ressources, offrant une interface intuitive pour surveiller en temps
          réel la consommation d'électricité, d'eau. Grâce à des modules
          connectés, l'application fournit des graphiques interactifs et des
          alertes instantanées pour aider les utilisateurs à détecter les
          anomalies et ajuster leur consommation de manière proactive.{" "}
        </p>

        <p>
          Les fonctionnalités de contrôle à distance permettent également
          d'ajuster les appareils connectés directement depuis l'application,
          facilitant ainsi la gestion des ressources au quotidien.
        </p>

        <p>EXPERIENCE UTILISATEUR</p>
        <p>
          Une expérience utilisateur fluide avec une interface intuitive qui
          permet de surveiller, contrôler et optimiser facilement la
          consommation des ressources
        </p>
        <img className="imagedater" src={date} alt="About App and Modules" />
        <img className="imagejauger" src={jauge} alt="About App and Modules" />
        <img className="imagelightr" src={light} alt="About App and Modules" />
        <img
          className="image-download1"
          src={down1}
          alt="About App and Modules"
        />
      </div>
      <img
        className="image-application"
        src={App}
        alt="About App and Modules"
      />
      <img
        className="image-download1r"
        src={down1}
        alt="About App and Modules"
      />
    </div>
  );
};

export default Application;
