import React from "react";
import "../App.css";
import fb from "../images/fb.png";
import twitt from "../images/twitt.png";
import insta from "../images/insta.png";

function Footer() {
  return (
    <div className="footer">
      <p>
        <b>Contact</b> <br></br>
        <br></br> Request a Test Drive <br></br> Book Car
        <br></br> Career <br></br> Contact Us
      </p>
      <p className="f2">
        <b>Xtremecars:</b> <br></br>
        <br></br> 12th Floor, Vishwaroop IT <br></br> Park, Sector 32, Vashi{" "}
        <br></br> Navi Mumbai - 400705. <br></br> Maharashtra, India. <br></br>{" "}
        Phone: +91 (22) 612 800 000
      </p>
      <p>
        {" "}
        <b>Legal:</b> <br></br>
        <br></br> Legal Disclaimer/Imprint<br></br> Privacy Policy <br></br>{" "}
        Cookie Policy <br></br> Contact Us{" "}
      </p>
      <p>
        {" "}
        <b>Connect with us:</b>
        <br></br>
        <br></br>
        <img className="flogo" src={fb} alt="xtreme car logo"></img>
        <br></br>{" "}
        <img className="flogo" src={twitt} alt="xtreme car logo"></img>
        <br></br>{" "}
        <img className="flogo" src={insta} alt="xtreme car logo"></img>{" "}
      </p>
    </div>
  );
}

export default Footer;
