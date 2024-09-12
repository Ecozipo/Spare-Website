import React from "react";
import "./About.css";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div className="App-body">
      <img className="image-about" src={about} alt="About App and Modules" />
      <div className="Text-about">
        <p>OVERVIEW</p>
        <h4>About SPARE</h4>
        <p>
          Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
          fait des miracles Vous cherchez une personne qui s'occupe des réseaux
          sociaux et qui fait des miracles Vous cherchez une personne qui
          s'occupe des réseaux sociaux et qui fait des miracles Vous cherchez
          une personne qui s'occupe des réseaux sociaux et qui fait des miracles
          ?{" "}
        </p>

        <p>OVERVIEW</p>
        <p>
          Vous cherchez une personne qui s'occupe des réseaux sociaux et qui se
          passe de la tête Vous cherchez une personne qui s'occupe des réseaux
        </p>
      </div>
    </div>
  );
};

export default About;
