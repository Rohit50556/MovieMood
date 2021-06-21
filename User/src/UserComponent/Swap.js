import axios from 'axios';
import React, { useEffect,useState } from 'react';
import {useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Swap = (props) =>{
   function alert()
   {
      toast.success("Swap Request Successfully Created",{
         position: "top-center",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         })


   }
   
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
      alert();
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
   <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
   />
 </>
 );
}


export default Swap;