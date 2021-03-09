import React from "react";
import "../css/SeatContainer.css";
import { useState } from "react";
const SeatContainer = (props) => {
 

  const [col , setcol] = useState([
     {
      _id: 1,
      seatName: "a",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 2,
      seatName: "b",
      seatPrice: "12",
      seatType: "hhhh",
      className: "seat"
    },
    {
      _id: 3,
      seatName: "c",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 4,
      seatName: "d",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 5,
      seatName: "e",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
  ])
  const [seats, setSeats] = useState([
    {
      _id: 1,
      seatName: "a",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 2,
      seatName: "b",
      seatPrice: "12",
      seatType: "hhhh",
      className: "seat"
    },
    {
      _id: 3,
      seatName: "c",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 4,
      seatName: "d",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 5,
      seatName: "e",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 6,
      seatName: "f",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },
    {
      _id: 6,
      seatName: "f",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },{
      _id: 6,
      seatName: "f",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },{
      _id: 6,
      seatName: "f",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat"
    },{
      _id: 6,
      seatName: "f",
      seatPrice: "12",
      seatType: "hhh",
      className: "seat occupied"
    }
    
  ]);



  const fun = (i ) => {
      const temp_seats = seats
      if(temp_seats[i].className === "seat"){
        temp_seats[i].className  = "seat occupied" 
        const temp_selectedSeats = props.selectedSeats
        temp_selectedSeats.push(temp_seats[i])
        props.setSelectedSeats(temp_selectedSeats)
      } else {
        temp_seats[i].className = "seat"
        const temp_selectedSeats = props.selectedSeats
        for(let j=0;j<temp_selectedSeats.length;j++){
          if(temp_seats[i]._id === temp_selectedSeats[j]._id) {
            temp_selectedSeats.splice(j,1)
          }
        }
        props.setSelectedSeats(temp_selectedSeats)
      }
      props.forceRender()
      setSeats(temp_seats) 
 
  };

  

  return (
    <div className="seat__layout">
      <div className="column">
        {col.map((e , i) =>
      <div class="row">
        {seats.map((obj,j ) => (
          <div
            className={obj.className}
            onClick={() => fun(j , i)}
          ></div>

        ))}
      </div>)}
      </div>
    </div>
  );
};

export default SeatContainer;
