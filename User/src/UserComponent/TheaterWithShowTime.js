import React from "react";
import "../css/TheaterWithShowTime.css";
import { Link } from "react-router-dom";
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
            <Link to="seatBookContainer">
              {" "}
              <li>9:00</li>
            </Link>

            <Link to="seatBookContainer">
              {" "}
              <li>12:00</li>
            </Link>
            <Link to="seatBookContainer">
              {" "}
              <li>3:00</li>
            </Link>
            <Link to="seatBookContainer">
              {" "}
              <li>5:00</li>
            </Link>
            <Link to="seatBookContainer">
              {" "}
              <li>9:00</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheaterWithShowTime;























// const TheaterWithShowTime = () => {
//   return (
//     <div>
//       <hr />
//       <div className="cinema__show">
//         <div>
//           <h5>Cinemax Infiniti - Malad (W)</h5>
//           <p>Survey No 504, Link Road,Near D-Mart</p>
//         </div>
//         <div className="ul__shows">
//           <ul>
//             <li>9:00</li>
//             <li>12:00</li>
//             <li>3:00</li>
//             <li>5:00</li>
//             <li>9:00</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheaterWithShowTime;
