import React from "react";
import Heading from "./Heading";

function SkillCard({ Icon, Title }) {
  return (
    <div className="skillcard__container">
      {Icon && <Icon fontSize="large" />}
      <Heading size="2" content={Title} />
    </div>
  );
}

export default SkillCard;
