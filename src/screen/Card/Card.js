// Card.js
import React from "react";
import "./Card.css";

const Card = ({ image, text1, text2 }) => (
  <div className="card">
    <img src={image} alt="card" className="card-image" />
    <div className="card-text">
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  </div>
);

export default Card;
