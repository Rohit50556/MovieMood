import React, {useState} from "react";
import "../css/SeatBookContainer.css";
import SeatContainer from "../UserComponent/SeatContainer";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import {Link} from "react-router-dom"


const SeatBookContainer = () => {
  const [selectedSeats,setSelectedSeats] = useState([])
  const [totalPrice , setTotalprice] = useState(0)
  const forceRender = () => {
     
  setTotalprice(selectedSeats.length*100)
    }
    const [visible , setvisible] =useState(false)
    const visibleHandler = () =>{
 setvisible(true)
    }
  return (
  
    <div className="outerdiv__seatbookcontainer">
      <div className="innerdiv__start">
        <div className="screen__seat">
          <div>
            <h2 style={{color:"white" , textAlign:"center", marginTop:"15px"}}>Seating Layout For Ticket Booking</h2>
          </div>
          <ul class="showcase">
            <li>
              <div class="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div class="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div class="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>
          <div className="screen__tag">
            <ArrowDownwardIcon
              style={{
                color: "green",
                marginLeft: "40%",
              }}
            />
            <h4 className="screen_this_way"> Screen This way</h4>
            <ArrowDownwardIcon style={{ color: "green" }} />
          </div>
          <div class="screen"></div>
          <SeatContainer forceRender={forceRender} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} />
        </div>
        <div className="verticleLine"></div>
        <div className="realtime_simulation_total">
          <h1 style={{color:"black", textAlign:"center" , marginTop:"10%", textDecoration:"underline"}}>Booking Details</h1>
          <h5 style={{color:"black", textAlign:"center", marginBottom:"10px"}}>You Have Selected this below Seats</h5>

         {selectedSeats.map((el) => (
            <h1 className="seat__showRealtime">{el.seatName}</h1>
          ))}
          
          <p className="count__p">Total Selected seat is  : {selectedSeats.length}</p>
            <p className="count__p">Total Price is  : {totalPrice}</p>
            <Link to={{
              pathname: selectedSeats.length === 0?"seatBookContainer":"snackcontainer",
              seatPrice : {totalPrice},
            seatArray : {selectedSeats} 
            }}>  <button onClick={visibleHandler} className="button__Book">Countinue</button></Link>
    
            <Link to="moviedetail"> <button  className="button__Cancel">Cancel</button></Link>
           {visible?<h1 style={{color:"red"}}>
             Please select a seat
           </h1>:null}
        </div>
      </div>
    </div>


  );
};


export default SeatBookContainer