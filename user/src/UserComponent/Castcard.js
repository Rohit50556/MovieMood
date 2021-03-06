import React from "react";
import Galgadot from "../Assets/cast/gal-gadot.jpg";
import "../css/Castcard.css";
const Castcard = () => {
  return (
    <div className="cast__detail">
      <div className="cast__image">
        <img src={Galgadot} alt="woman cast" />
      </div>
      <h5 className="name">Gal Gadot</h5>
      <h5 className="role">as wonder Woman</h5>
    </div>
  );
};

export default Castcard;
