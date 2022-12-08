import React from "react";

function HeaderLinks({ Icon, title }) {
  return (
    <div className="headerLinks">
      {Icon && <Icon className="headerLinks__icon" />}
      <h3 className="headerLinks__title">{title}</h3>
    </div>
  );
}

export default HeaderLinks;
