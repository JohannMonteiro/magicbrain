import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div className="tilt br2 shadow-2" style={{ height: 150, width: 150 }}>
          <img className="pa2" src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
