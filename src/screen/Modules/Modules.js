import React from "react";
import "./Modules.css";
import boitier from "../../assets/modules.png";

const Modules = () => {
  return (
    <div className="App-modules">
      <div className="Text-top-modules">
        <div className="Text-top-left">
          <p className="Overview">DISPOSITIF INTELLIGENT</p>
          <p className="Text-simple ">
            Les modules connectés de SPARE sont conçus pour mesurer avec
            précision la consommation d'électricité, d'eau. Ces dispositifs
            surveillent en temps réel l'utilisation des ressources et détectent
            les anomalies, envoyant des alertes instantanées à l'application
            mobile.{" "}
          </p>
          <p className="Text-simple ">
            Assurent une gestion proactive en fournissant des données claires et
            détaillées, permettant ainsi aux utilisateurs d'ajuster leur
            consommation et de réduire les gaspillages.
          </p>
        </div>

        <img
          className="image-modules"
          src={boitier}
          alt="About App and Modules"
        />
        <div className="Text-top-right">
          <p className="Overview">CONTROLE A DISTANCE</p>
          <p className="Text-simple ">
            Cette fonctionnalité offre aux utilisateurs la possibilité d'activer
            ou de désactiver les appareils connectés, comme les lumières, en
            fonction de leur présence ou d'autres critères.{" "}
          </p>
        </div>
      </div>
      <div className="Text-bottom-modules">
        <div className="Text-bottom-left">
          <p className="Overview">CONNECTED</p>
          <p className="Text-simple ">Mesurent et optimisent les ressources.</p>
          <p className="Text-simple ">
            Les modules connectés de SPARE permettent un contrôle à distance des
            appareils, facilitant la gestion des ressources directement depuis
            l'application mobile.
          </p>
        </div>

        <div className="Text-bottom-right">
          <h3>MODULES</h3>
          <p>CONNECTED</p>
        </div>

        <div className="Text-bottom-leftr">
          <p className="Overview">CONTROLE A DISTANCE</p>
          <p className="Text-simple ">
            Cette fonctionnalité offre aux utilisateurs la possibilité d'activer
            ou de désactiver les appareils connectés, comme les lumières, en
            fonction de leur présence ou d'autres critères.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modules;
