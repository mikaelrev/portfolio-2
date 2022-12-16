import React from "react";
import HeaderLinks from "./HeaderLinks";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <NavLink className="header__logo" to="/">
          Mikael
        </NavLink>
      </div>
      <div className="header__right">
        <HeaderLinks link="/about" title="About" />
        <HeaderLinks link="/projects" title="Projects" />
        <HeaderLinks link="/contact" title="Contact" />
      </div>
    </div>
  );
}

export default Header;
