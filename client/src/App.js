import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Predict from "./components/predict/Predict";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Skin from "./components/predict/predictList/Skin";
import Hepatitis from "./components/predict/predictList/Hepatitis";
import Breast from "./components/predict/predictList/Breast";
import Stomach from "./components/predict/predictList/Stomach";
import Insurance from "./components/predict/predictList/Insurance";
import Register from "./components/register/Register";
import "./App.scss";

const App = () => {
  const handleMove = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/predict/skin" element={<Skin />} />
          <Route path="/predict/hepatitis" element={<Hepatitis />} />
          <Route path="/predict/breastcancer" element={<Breast />} />
          <Route path="/predict/stomach" element={<Stomach />} />
          <Route path="/predict/insurance" element={<Insurance />} />
        </Routes>
        <div className="move" onClick={handleMove}>
          <i className="fa-solid fa-angles-up"></i>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
