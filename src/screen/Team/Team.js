import React, { useState } from "react";
import "./Team.css";

const Team = () => {
  const [cards] = useState([
    { image: "Image1", name: "Nom1", description: "Description1" },
    { image: "Image2", name: "Nom2", description: "Description2" },
    { image: "Image3", name: "Nom3", description: "Description3" },
    { image: "Image4", name: "Nom4", description: "Description4" },
    { image: "Image5", name: "Nom5", description: "Description5" },
    { image: "Image6", name: "Nom6", description: "Description6" },
    { image: "Image7", name: "Nom7", description: "Description7" },
  ]);

  const [visibleCards, setVisibleCards] = useState(cards.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 3, cards.length);
    setVisibleCards(cards.slice(nextIndex, nextIndex + 3));
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 3, 0);
    setVisibleCards(cards.slice(prevIndex, prevIndex + 3));
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="App-Team">
      <button
        className="carousel-button back"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      ></button>
      <button
        className="carousel-button next"
        onClick={handleNext}
        disabled={currentIndex >= cards.length - 3}
      ></button>

      <div className="Text-team">
        <h3>SPARE Team</h3>
        <p className="Overview">OVERVIEW</p>
      </div>
      <div className="card-liste">
        <div className="cards-container">
          {visibleCards.map((card, index) => (
            <div className="Card" key={index}>
              <h2>{card.image}</h2>
              <h2>{card.name}</h2>
              <h2>{card.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
