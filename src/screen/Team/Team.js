import React, { useState, useEffect } from "react";
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

  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3); // Default to 3

  // Update cards per page based on window size
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 500) {
        setCardsPerPage(2); // Show 2 cards on smaller screens
      } else {
        setCardsPerPage(3); // Default is 3 cards
      }
    };

    updateCardsPerPage(); // Initial check
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
              <h2>{card.image}</h2>
              <h2>{card.name}</h2>
              <h2>{card.description}</h2>
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
