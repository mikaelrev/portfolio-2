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
            <p>I'm a front-end developer student from Norway.</p>
            <p>
              I'm hard working, and always willing to learn new things and
              finding new solutions.{" "}
            </p>
            <p>
              I enjoy reading books, jogging, watching football and playing
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
