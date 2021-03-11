import React from 'react';
import "../css/Booked.css"
import Footer from "../UserComponent/Footer"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { colors } from '@material-ui/core';
import {Link} from "react-router-dom"
const Booked = () => {
    return (
        <div style={{backgroundColor:"#ececec" , paddingTop:"100px"}}>
        <div className="booked_div">
            
         <InsertEmoticonIcon 
         style={{
             width:"60px",
             height :"60px",
             color :"green",
                marginLeft:"42%"
         }}
         />
         <p style={{textAlign:"center", color:"green", fontWeight:"700"}}>Ticket Successfully Booked</p>
         <Link to="/" style={{marginLeft:"40%"}}>HomePage</Link>
         <p style={{textAlign:"center", marginTop:"20px", fontWeight:"500"}}>Please Checkout your Gmail for More Information Related to Booking</p>
        </div>
           <Footer/>
           </div>
    );
};
export default Booked;