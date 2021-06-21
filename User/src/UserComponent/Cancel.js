import axios from 'axios';
import React, { useContext, useState,useEffect } from 'react';
import {useHistory} from "react-router-dom";
// import {Link} from "react-router-dom"
// import AuthContext from "../Context/AutoContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cnacel = (props) =>{
    var history=useHistory();
    var total=props.location.total
    var id=props.location.id
    var info1={
        id:id,
        meesageTo:localStorage.getItem("mailfordetail")
    }
    var data={
        seats:props.location.seats,
        id:props.location.showId
    }

    function alert1()
    {

           toast.success("You Ticket Is cancelled Successfully",{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
    }
    function alert2()
    {

           toast.success("60% Of Your Booking mount is refunded",{
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
    }
    function alert3()
    {

           toast.success("Cheack Your Wallet",{
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
    }


    axios.post("/Booking/cancelBooking/",info1,{})
    axios.post("/Booking/UpdateSeatArrayAfterCancellation",data,{})
    
    localStorage.setItem("wallet",Number(localStorage.getItem('wallet'))+(total*0.6));
    var wallet=localStorage.getItem("wallet")

    var info={
      wallet:wallet,
      email:localStorage.getItem("loggedUser")
    }
    alert1();
    alert2();
    alert3();

    //axios.post("/Customer/UpdateWallet",info,{})
    
    axios.post("/SendMail/sendBookingCancelInfo/",info1,{})
    
   //]] history.push("/History")

return(<>
    <ToastContainer style={{marginTop:"30px"}}/>
 </>
 );
}


export default Cnacel;