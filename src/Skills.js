import React from "react";
import Heading from "./Heading";
import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="skills">
      <Heading content="Here are some languages and tools I've worked with so far" />
      <div className="skills__container">
        <SkillCard Title="HTML/CSS" />
        <SkillCard Title="Javascript" />
        <SkillCard Title="React" />
        <SkillCard Title="Bootstrap" />
        <SkillCard Title="SASS" />
        <SkillCard Title="WordPress" />
      </div>
    </div>
  );
}

export default Skills;
