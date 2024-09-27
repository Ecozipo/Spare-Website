import React, { useState, useEffect } from "react";
import "./Team.css";
import image1 from "../../assets/Mira.jpeg";
import image2 from "../../assets/Valicio.jpeg";
import image3 from "../../assets/Rantsa.jpeg";
import image4 from "../../assets/Larry.jpeg";
import image5 from "../../assets/Rominah.jpeg";
import image6 from "../../assets/Ranja.jpeg";
import image7 from "../../assets/Hony.jpeg";

const Team = () => {
  const [cards] = useState([
    {
      image: image1,
      name: "Mira",
      description:
        "En tant que porteur du projet SPARE et développeur hardware, je supervise la vision globale tout en concevant les modules connectés. Mon rôle est de diriger l’équipe vers nos objectifs tout en assurant la performance technique des solutions que nous proposons.",
    },
    {
      image: image2,
      name: "Valicio",
      description:
        "Je suis le résponsable du système embarqué de SPARE, chargé de concevoir les modules connectés qui mesurent et contrôlent la consommation d'énergie et d'eau, assurant des données précises en temps réel.",
    },
    {
      image: image3,
      name: "Rantsa",
      description:
        "Chargé de créer une application intuitive qui permet de suivre et gérer en temps réel la consommation d'énergie et d'eau. Mon objectif est d'offrir une expérience fluide et efficace aux utilisateurs.",
    },
    {
      image: image4,
      name: "Larry",
      description:
        "En tant que développeur back-end chez SPARE, je suis responsable de la gestion des serveurs et de l’architecture qui supportent l’application et les modules connectés. Mon rôle est de garantir des échanges de données sécurisés et performants entre les utilisateurs et notre système.",
    },
    { image: image5, name: "Rominah", description: "Description2" },
    {
      image: image6,
      name: "Ranja",
      description:
        "Je supervise la gestion des finances et développe des stratégies budgétaires pour assurer la stabilité et la croissance à long terme du projet. Mon rôle inclut  la gestion des ressources financières et la recherche de fonds pour soutenir notre expansion tout en garantissant une gestion saine et durable.",
    },
    { image: image7, name: "Hony", description: "Description3" },
  ]);

  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 500) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  useEffect(() => {
    setVisibleCards(cards.slice(currentIndex, currentIndex + cardsPerPage));
  }, [cardsPerPage, currentIndex, cards]);

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + cardsPerPage, cards.length);
    setVisibleCards(cards.slice(nextIndex, nextIndex + cardsPerPage));
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - cardsPerPage, 0);
    setVisibleCards(cards.slice(prevIndex, prevIndex + cardsPerPage));
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="App-Team">
      <div className="Text-team">
        <h3>SPARE Team</h3>
        <p className="Overview">OVERVIEW</p>
      </div>
      <div className="card-liste">
        <div className="cards-container">
          {visibleCards.map((card, index) => (
            <div className="Card" key={index}>
              <img src={card.image} alt={card.name} className="team-image" />
              <h2>{card.name}</h2>
              <h4>{card.description}</h4>
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-button back"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      ></button>
      <button
        className="carousel-button next"
        onClick={handleNext}
        disabled={currentIndex >= cards.length - cardsPerPage}
      ></button>
    </div>
  );
};

export default Team;
