import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__info">
        <h1>Hello, I'm Mikael</h1>
        <p>Front-end developer</p>
        <NavLink to="/contact" className="hero__button">
          Contact me
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
