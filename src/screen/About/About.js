import React from "react";
import "./About.css";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div id="about" className="App-body">
      <img className="image-about" src={about} alt="About App and Modules" />
      <div className="Text-about">
        <p>OVERVIEW</p>
        <h4>About SPARE</h4>
        <p>
          SPARE résout la gestion inefficace des ressources dans les foyers en
          proposant une application mobile connectée à des modules mesurant la
          consommation d’électricité, d’eau, et la gestion des déchets. Grâce à
          des graphiques interactifs et des conseils personnalisés par IA,
          l’application aide les utilisateurs à optimiser leur consommation tout
          en contrôlant à distance leurs appareils.{" "}
        </p>

        <p>ENVIRONMENT IMPACT</p>
        <p>
          SPARE contribue à la réduction de l'empreinte carbone en optimisant la
          consommation d'énergie et d'eau tout en encourageant des pratiques
          durables à travers une technologie intégrée.
        </p>
      </div>
      <img className="image-about2" src={about} alt="About App and Modules" />
    </div>
  );
};

export default About;
