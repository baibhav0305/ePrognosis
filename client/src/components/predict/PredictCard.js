import React from "react";
import { Link } from "react-router-dom";
import "./PredictCard.scss";

const PredictCard = ({ name, image, link }) => {
  return (
    <div className="diseaseContainer">
      <div className="imageContainer">
        <img src={image} alt="prediction" />
      </div>
      <div className="headingContainer">
        <Link to={link}>
          <h3>{name}</h3>
        </Link>
      </div>
    </div>
  );
};

export default PredictCard;
