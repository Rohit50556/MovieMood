import React from "react";
import "../css/TheaterWithShowTimeContainer.css";
import TheaterWithShowTime from "../UserComponent/TheaterWithShowTime";
const TheaterWithShowTimeContainer = () => {
  // let date=localStorage.getItem('date')
 
 return (
    <div>
      <h4
        style={{
          marginLeft: "15%",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        Available Show Timings and Cinema in Your City :
      </h4>
      <div className="container__cinema">
        <TheaterWithShowTime />
      </div>
    </div>
  );
};

export default TheaterWithShowTimeContainer;
