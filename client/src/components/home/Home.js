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
      <Main image="/assets/home1.jpg" dir={true} />
      <Feature />
      <Main image="/assets/home2.jpg" dir={false} />
      {/* <div className="move" onClick={handleMove}>
        <i class="fa-solid fa-angles-up"></i>
      </div> */}
    </div>
  );
};

export default Home;
