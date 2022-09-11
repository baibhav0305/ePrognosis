import React from "react";
import Card from "./card/Card";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="container-fluid">
      <div className="featureContainer">
        <Card
          title="Disease Prediction"
          text="Predict diseases related to specific features"
        />
        <Card
          title="Insurance Amount"
          text="Predict medical insurance amount"
        />
        <Card title="Health Realted Blog" text="Publish health realted blogs" />
      </div>
    </div>
  );
};

export default Feature;
