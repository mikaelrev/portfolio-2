import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import Heading from "./Heading";
import Skills from "./Skills";

function About() {
  return (
    <div className="about">
      <Heading content="About me" />
      <div className="about__container">
        <div className="about__info">
          <div className="about__bio">
            <h1>Mikael Myrvang</h1>
            <p>Grew up in Ålesund, Norway. Studied in Bergen to become a front-end developer.</p>
            <p>
              I'm currently working in a group home for disabled people, but want to make the switch to become developer.{" "}
            </p>
            <p>
              Aside from coding, I enjoy jogging, reading books, watching football and playing
              video games.
            </p>

            <NavLink className="about__link" to="/contact">
              Let's work together
            </NavLink>
          </div>
        </div>

        <Skills />
      </div>
    </div>
  );
}

export default About;
