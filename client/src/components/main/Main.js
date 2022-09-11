import React from "react";
import "./Main.scss";

const Main = ({ image, dir }) => {
  return (
    <div className="container-fluid">
      <div
        className="mainContainer"
        style={{ flexDirection: dir ? "row" : "row-reverse" }}
      >
        <div className="textContainer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            porro iure, corrupti provident velit beatae harum asperiores id
            reprehenderit, modi adipisci voluptates cumque. Reiciendis rem velit
            obcaecati error delectus nostrum.
          </p>
        </div>
        <div className="imageContainer">
          <img src={image} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Main;
