import React from "react";
import "../css/SeatContainer.css";
import { useState,useEffect } from "react";
import Axios from 'axios';
const SeatContainer = (props) => {
  const [seat,setSeat] = useState(null)

  useEffect(() => {
    Axios.get("/ShowTiming/getShowById/604b2fee2e9249339c548a30").then(res => {
      setSeat(res.data.seatArray)
    })
  },[])
  

  const fun = (i,j) => {
      const temp_seats = seat
      let k = 10*i + j
      if(temp_seats[k].className === "seat"){
        temp_seats[k].className  = "seat occupied" 
        const temp_selectedSeats = props.selectedSeats
        temp_selectedSeats.push(temp_seats[k])
        props.setSelectedSeats(temp_selectedSeats)
      } 
      else {
        temp_seats[k].className = "seat"
        const temp_selectedSeats = props.selectedSeats
        for(let j=0;j<temp_selectedSeats.length;j++){
          if(temp_seats[i]._id === temp_selectedSeats[j]._id) {
            temp_selectedSeats.splice(j,1)
          }
        }
        props.setSelectedSeats(temp_selectedSeats)
      }
      props.forceRender()
      setSeat(temp_seats) 
 
  };
// console.log(seat[1])
  let render__content = []

  if(seat !== null) {
    for(let i=0;i<6;i++) {
    const temp_render = []
    for(let j=0;j<10;j++) {
      temp_render.push(
        <div className={seat[10*i+j].className} onClick={() => fun(i,j)} ></div>
      ) 
    }
    const temp_render_content = (
      <div className="row">
        {temp_render}
      </div>
    )
    render__content.push(temp_render_content)
  } 
  }

  return (
    <div className="seat__layout">
      {render__content}
    </div>
  )
}

export default SeatContainer























// const SeatContainer = (props) => {
 

//   const [col , setcol] = useState([
//      {
//       _id: 1,
//       seatName: "a",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 2,
//       seatName: "b",
//       seatPrice: "12",
//       seatType: "hhhh",
//       className: "seat"
//     },
//     {
//       _id: 3,
//       seatName: "c",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 4,
//       seatName: "d",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 5,
//       seatName: "e",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//   ])
//   const [seats, setSeats] = useState([
//     {
//       _id: 1,
//       seatName: "a",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 2,
//       seatName: "b",
//       seatPrice: "12",
//       seatType: "hhhh",
//       className: "seat"
//     },
//     {
//       _id: 3,
//       seatName: "c",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 4,
//       seatName: "d",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 5,
//       seatName: "e",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 6,
//       seatName: "f",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },
//     {
//       _id: 6,
//       seatName: "f",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },{
//       _id: 6,
//       seatName: "f",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },{
//       _id: 6,
//       seatName: "f",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat"
//     },{
//       _id: 6,
//       seatName: "f",
//       seatPrice: "12",
//       seatType: "hhh",
//       className: "seat occupied"
//     }
    
//   ]);



//   const fun = (i ) => {
//       const temp_seats = seats
//       if(temp_seats[i].className === "seat"){
//         temp_seats[i].className  = "seat occupied" 
//         const temp_selectedSeats = props.selectedSeats
//         temp_selectedSeats.push(temp_seats[i])
//         props.setSelectedSeats(temp_selectedSeats)
//       } else {
//         temp_seats[i].className = "seat"
//         const temp_selectedSeats = props.selectedSeats
//         for(let j=0;j<temp_selectedSeats.length;j++){
//           if(temp_seats[i]._id === temp_selectedSeats[j]._id) {
//             temp_selectedSeats.splice(j,1)
//           }
//         }
//         props.setSelectedSeats(temp_selectedSeats)
//       }
//       props.forceRender()
//       setSeats(temp_seats) 
 
//   };

  

//   return (
//     <div className="seat__layout">
//       <div className="column">
//         {col.map((e , i) =>
//       <div class="row">
//         {seats.map((obj,j ) => (
//           <div
//             className={obj.className}
//             onClick={() => fun(j , i)}
//           ></div>

//         ))}
//       </div>)}
//       </div>
//     </div>
//   );
// };

// export default SeatContainer;
