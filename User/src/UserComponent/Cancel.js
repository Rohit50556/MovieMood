import axios from 'axios';
import React, { useContext, useState,useEffect } from 'react';
import {useHistory} from "react-router-dom";
// import {Link} from "react-router-dom"
// import AuthContext from "../Context/AutoContext"


const Cnacel = (props) =>{
    var history=useHistory();
    var total=props.location.total
    var id=props.location.id
    var info={
        id:id,
        meesageTo:localStorage.getItem("mailfordetail")
    }
    var data={
        seats:props.location.seats,
        id:props.location.showId
    }

    axios.post("/Booking/cancelBooking/",info,{})
    axios.post("/Booking/UpdateSeatArrayAfterCancellation",data,{})
    
    localStorage.setItem("wallet",Number(localStorage.getItem('wallet'))+(total*0.6));
    var wallet=localStorage.getItem("wallet")

    var info={
      wallet:wallet,
      email:localStorage.getItem("loggedUser")
    }
    axios.post("/Customer/UpdateWallet",info,{})

    axios.post("/SendMail/sendBookingCancelInfo/",info,{})
    
    history.push("/History")

return(<>
    
 </>
 );
}


export default Cnacel;