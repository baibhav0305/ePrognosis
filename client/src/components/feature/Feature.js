import React from "react";
import Card from "./card/Card";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="container-fluid">
      <div className="featureContainer">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Feature;
