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
          <div className="about__image">
            <img
              src="https://akamai.vgc.no/v2/images/0c57cf70-2b00-4a04-96d9-f1c4740cd2e7?fit=crop&format=auto&h=1322&w=1900&s=3884d8b00603c5970ac790849bba4ecd81e0f3b9"
              alt="Mikael Myrvang"
            />
          </div>
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
