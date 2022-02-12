import React from "react";
import xtreme from "../images/xtremecar_logo.png";
import "../App.css";

function Header() {
  return (
    <nav className="header">
      <img className="logo" src={xtreme} alt="xtreme car logo"></img>
      <div className="nc">NEW CARS</div>
      <div className="uc">USED CARS</div>
      <div className="mp">MY PROFILE</div>
    </nav>
  );
}

export default Header;
