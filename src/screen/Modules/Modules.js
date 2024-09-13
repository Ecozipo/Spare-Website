import React from "react";
import "./Modules.css";
import boitier from "../../assets/modules.png";

const Modules = () => {
  return (
    <div className="App-modules">
      <div className="Text-top-modules">
        <div className="Text-top-left">
          <p className="Overview">OVERVIEW</p>
          <p className="Text-simple ">
            Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
            fait des miracles Vous cherchez une personne qui s'occupe des
            réseaux sociaux et qui fait des miracles Vous cherchez une personne
            qui s'occupe des réseaux sociaux et qui fait des miracles Vous
            cherchez une personne qui s'occupe des réseaux sociaux et qui fait
            des miracles{" "}
          </p>
          <p className="Text-simple ">
            Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
            se passe de la tête Vous cherchez une personne qui s'occupe des
            réseaux
          </p>
        </div>

        <img
          className="image-modules"
          src={boitier}
          alt="About App and Modules"
        />
        <div className="Text-top-right">
          <p className="Overview">OVERVIEW</p>
          <p className="Text-simple ">
            Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
            fait des miracles Vous cherchez une personne qui s'occupe des
            réseaux sociaux et qui fait des miracles Vous cherchez une personne
            qui s'occupe des réseaux sociaux et qui fait des miracles Vous
            cherchez une personne qui s'occupe des réseaux sociaux et qui fait
            des miracles{" "}
          </p>
        </div>
      </div>
      <div className="Text-bottom-modules">
        <div className="Text-bottom-left">
          <p className="Overview">OVERVIEW</p>
          <p className="Text-simple ">
            Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
          </p>
          <p className="Text-simple ">
            Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
            se passe de la tête Vous cherchez une personne qui s'occupe des
            réseaux
          </p>
        </div>

        <div className="Text-bottom-right">
          <h3>MODULES</h3>
          <p>CONNECTED</p>
        </div>

        <div className="Text-bottom-leftr">
          <p className="Overview">OVERVIEW</p>
          <p className="Text-simple ">
            Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
          </p>
          <p className="Text-simple ">
            Vous cherchez une personne qui s'occupe des réseaux sociaux et qui
            se passe de la tête Vous cherchez une personne qui s'occupe des
            réseaux
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modules;
