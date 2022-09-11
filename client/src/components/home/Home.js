import React from "react";
import Feature from "../feature/Feature";
import Main from "../main/Main";
import "./Home.scss";

const Home = () => {
  // const handleMove = () => {
  //   window.scroll(0, 0);
  // };
  return (
    <div>
      <Main
        image="/assets/home1.jpg"
        dir={true}
        text="Hope is a beautiful thing. And when hope is based in science and evidence, its even better! Here are the latest news and happenings that inspire us."
      />
      <Feature />
      <Main
        image="/assets/home2.jpg"
        dir={false}
        text="E-Prognosis health application has been created with a vision of helping and assisting people in predictionof harmful diseases right at your own home."
      />
      {/* <div className="move" onClick={handleMove}>
        <i class="fa-solid fa-angles-up"></i>
      </div> */}
    </div>
  );
};

export default Home;
