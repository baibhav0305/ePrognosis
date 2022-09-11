import React from "react";
import "./Main.scss";

const Main = ({ image, dir, text }) => {
  return (
    <div className="container-fluid">
      <div
        className="mainContainer"
        style={{ flexDirection: dir ? "row" : "row-reverse" }}
      >
        <div className="textContainer">
          <p>{text}</p>
        </div>
        <div className="imageContainer">
          <img src={image} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Main;
