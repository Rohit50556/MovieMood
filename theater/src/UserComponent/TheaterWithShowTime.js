import React from "react";
import "../css/TheaterWithShowTime.css";
const TheaterWithShowTime = () => {
  return (
    <div>
      <hr />
      <div className="cinema__show">
        <div>
          <h5>Cinemax Infiniti - Malad (W)</h5>
          <p>Survey No 504, Link Road,Near D-Mart</p>
        </div>
        <div className="ul__shows">
          <ul>
            <li>9:00</li>
            <li>12:00</li>
            <li>3:00</li>
            <li>5:00</li>
            <li>9:00</li>
            <li>
              {" "}
              <a href="https://icons8.com/icon/81934/sleeper-chair">
                Sleeper Chair icon by Icons8
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheaterWithShowTime;
