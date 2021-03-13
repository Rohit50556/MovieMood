import axios from 'axios';
import React, { useEffect,useState } from 'react';

import {useHistory} from "react-router-dom";

const Swap = (props) =>{

   var history=useHistory();
  // alert(props.location.id)

//  var swapseat=props.location.no
  //alert(swapseat)
   var [data,setData]=useState([{}])
   var [data1,setUserData]=useState([{}])

   useEffect(()=>{
      fetch("/Booking/getBookingById/"+props.location.id).then(res=>{
         if(res.ok)
            return res.json()
         else
            console.log("err")
      }).then(jsonres=>setData(jsonres))
   },[])


  // alert(props.location.no)
   useEffect(()=>{
      fetch("/Booking/getUserNameBySeatNumber/"+props.location.no).then(res=>{
         if(res.ok)
            return res.json()
         else
            console.log("err")
      }).then(jsonres=>setUserData(jsonres))
   },[])
   
   console.log("=======")
   console.log(data1)
   
       var newData={
      theaterName:data[0].theaterName,
      showTime:data[0].startTime,
      date:data[0].date,
      ticketid:data[0]._id,
      username:localStorage.getItem("UserName"),
      seat:data[0].seats,
      email:localStorage.getItem("loggedUser"),
      seatNo:props.location.no,
      user2:data1[0].userName,
      email2:data1[0].email,
      user2id:data1[0]._id

   }
   console.log(newData)
   axios.post("/SwapSeatRequest/addSwap",newData,{});
  
   //  history.push("/")


 return(<>
   
 </>
 );
}


export default Swap;