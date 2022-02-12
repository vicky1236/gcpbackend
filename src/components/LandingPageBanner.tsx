import * as React from "react";
import "../App.css";
import axios from "axios";

const sedan = require("../images/sedan.png");
const suv = require("../images/suv.png");
const hatchback = require("../images/hatchback.png");
const coupe = require("../images/coupe.png");

function LandingPageBanner() {
  const [selected, setSelected] = React.useState(sedan);

  return (
    <div
      className="landing"
      style={{ backgroundImage: "url(" + selected + ")" }}
    >
      <div className="selection">
        <p onClick={() => setSelected(sedan)}>SEDAN</p>
        <p onClick={() => setSelected(suv)}>SUV</p>
        <p onClick={() => setSelected(hatchback)}>HATCHBACK</p>
        <p onClick={() => setSelected(coupe)}>COUPE</p>
      </div>
      <div className="search-section">
        <h1 className="dream-car">FIND YOUR DREAM CAR</h1>
        <div className="sab">
          <input className="search-bar" placeholder="Enter car name..."></input>
          <button className="search-button">SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPageBanner;
