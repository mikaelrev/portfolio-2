import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderLinks.css";

function HeaderLinks({ link, title }) {
  return (
    <div>
      <NavLink className="header__links" to={link}>
        {title}
      </NavLink>
    </div>
  );
}

export default HeaderLinks;
