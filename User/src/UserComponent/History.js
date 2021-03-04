import React, { useState } from 'react';
import "../css/History.css"
import {Link} from "react-router-dom"
const History = () => {
    const [bookinfo ] = useState(
        [
            {
                _id :38484,
                username : "sunny_1010",
                date : "10/10/2000" ,
                time : "08:00",
                movieName : "Hero",
                theaterName :"Anupam",
                totalNoOfSeat :"2",
                totalPrice:200,
                isEligibleForcancelationInsaurance :true,
                walletAmount : 20,
                Bookingstatus : true,
            },
            {
                _id :38484,
                username : "sunny_1010",
                date : "10/10/2000" ,
                time : "08:00",
                movieName : "Hero",
                theaterName :"Anupam",
                totalNoOfSeat :"2",
                totalPrice:200,
                isEligibleForcancelationInsaurance :false,
                walletAmount : 20,
                Bookingstatus : false,


            }
        ]
        )
    return (
        
        <div className="outer__div">
            <div style={{
                    height:"60px",
                    marginTop:"10px",
                    backgroundColor:"silver", marginLeft:"auto" ,marginRight:"auto", width:"90%"
                }}>
                    <p style={{color:"black", fontFamily:"cursive" , fontSize:"25px", padding:"10px"}}>User History Page</p>
                </div>
            {
                bookinfo.map((e) => (
                    <div className="ineer__div">
                        <h3>Booking ID : <sapn style={{fontSize:"30px" , color:"green"}}>{e._id}</sapn></h3>
                        <p> Username : <span    className="span__style"> {e.username}</span></p>
                        <p> Date :<sapn   className="span__style"> {e.date} </sapn></p>
                        <p>Time : <span  className="span__style">{e.time}</span></p>
                        <p>Movie Name : <span className="span__style">{e.movieName }</span></p>
                        <p>Theater Name : <span className="span__style">{e.theaterName}</span></p>
                        <p>Total Number Of Seat :<span className="span__style">{e.totalNoOfSeat}</span> </p>
                        <p>Total Price :<span className="span__style">{e.totalPrice}</span></p>
                        <p>Your Wallet Deduction amount is : <span className="span__style"    >{e.walletAmount}</span></p>
                        {
                            e.isEligibleForcancelationInsaurance?<p>you are eligible for cancel Isurance</p>:<p>You are not eligible for Cancel Insurance</p>
                        }
                        {
                            e.Bookingstatus?
                            (<div className="three__button">
                                <Link to="adjust"><button className="button__class">Adjust ?</button></Link>
                               <Link to="swap"> <button className="button__class">Swap ?</button></Link>
                               
                                <Link to="cancel"> <button className="button__class">Cancel ?</button></Link>
                            </div>):
                            <div className="bookingnotconfirm">
                                <p>Your Booking Is Canceled</p>

                            </div>
                            
                        }
                        </div>      
                   )
                )
            }
        </div>
    );
};

export default History;


















// import React from 'react';

// const History = () =>{
//  return(<>
 

//  </>
//  );
// }


// export default History;