import React from "react";
import "./Predict.scss";
import PredictCard from "./PredictCard";

const Predict = () => {
  return (
    <div className="container-fluid">
      <div className="predictionContainer">
        <PredictCard name="Skin issues" image="/assets/home2.jpg" link='skin' />
        <PredictCard name="Stomach issues" image="/assets/home2.jpg" link='stomach' />
        <PredictCard name="Hepatitis" image="/assets/home2.jpg" link='hepatitis' />
        <PredictCard name="Breast Cancer" image="/assets/home2.jpg" link='breastcancer' />
        <PredictCard name="Health Insurance" image="/assets/home2.jpg" link='insurance' />
      </div>
    </div>
  );
};

export default Predict;
