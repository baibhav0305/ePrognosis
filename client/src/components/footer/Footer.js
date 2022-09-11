import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <img src="/assets/logo.png" alt="ePrognosis" className="imageClass" />
      </div>
      <div className="footerText">Made with 💖 by Team ArcticCoderz</div>
    </div>
  );
};

export default Footer;
