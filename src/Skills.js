import React from "react";
import Heading from "./Heading";
import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="skills">
      <Heading content="Tools I have learned to use during my studies" />
      <div className="skills__container">
        <SkillCard Title="HTML" />
        <SkillCard Title="CSS" />
        <SkillCard Title="JS" />
        <SkillCard Title="React" />
        <SkillCard Title="Figma" />
        <SkillCard Title="WordPress" />
        <SkillCard Title="UX/UI design" />
      </div>
    </div>
  );
}

export default Skills;
