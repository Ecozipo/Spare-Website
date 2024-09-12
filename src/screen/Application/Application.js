import React from "react";
import "./Application.css";
import App from "../../assets/Application.png";
import down1 from "../../assets/download.png";
import date from "../../assets/date.png";
import jauge from "../../assets/jauge.png";
import light from "../../assets/light.png";

const Application = () => {
  return (
    <div className="Application-body">
      <img className="imagedate" src={date} alt="About App and Modules" />
      <img className="imagejauge" src={jauge} alt="About App and Modules" />
      <img className="imagelight" src={light} alt="About App and Modules" />
      <div className="Text-Application">
        <h4>Mobile APP</h4>
        <p>OVERVIEW</p>

        <p>
          Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
          fait des miracles Vous cherchez une personne qui s'occupe des réseaux
          sociaux et qui fait des miracles Vous cherchez une personne qui
          s'occupe des réseaux sociaux et qui fait des miracles Vous cherchez
          une personne qui s'occupe des réseaux sociaux et qui fait des miracles
          ?{" "}
        </p>

        <p>
          Vous cherchez une personne qui s'occupe des réseaux sociaux et qui se
          passe de la tête Vous cherchez une personne qui s'occupe des réseaux
        </p>

        <p>OVERVIEW</p>
        <p>
          Vous cherchez une personne qui s'occupe des réseaux sociaux et qui se
          passe de la tête Vous cherchez une personne qui s'occupe des réseaux
        </p>
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
    </div>
  );
};

export default Application;
