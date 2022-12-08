import React from "react";
import HeaderLinks from "./HeaderLinks";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>mikael</h1>
      </div>
      <div className="header__right">
        <HeaderLinks title="About" />
        <HeaderLinks title="Skills" />
        <HeaderLinks title="My projects" />
        <HeaderLinks title="Contact" />
      </div>
    </div>
  );
}

export default Header;
