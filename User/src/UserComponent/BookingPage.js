import React, {useContext, useState,useEffect} from 'react';
import "../css/BookingPage.css"
import TextField from '@material-ui/core/TextField';
import Footer from "../UserComponent/Footer"
import AuthContext from "../Context/AutoContext"
import {Link} from "react-router-dom"
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import validator from 'validator'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

var seats=[]
var snacks=[]
var snacksQ=[]
var email=""

const BookingPage = (props) => {

  var history=useHistory();
  while(seats.length>0)
    seats.pop()

    while(snacks.length>0)
    snacks.pop()

    while(snacksQ.length>0)
    snacksQ.pop()



  var time=""
  var scrno=localStorage.getItem('show')
  if(scrno==="1")
    time="08AM-11AM"
  else if(scrno==="2")
    time="12PM-03PM"
  else if(scrno==="3")
    time="04PM-07PM"
  else if(scrno==="4")
    time="09PM-12AM"
    
  var tprice=props.location.seatPrice.tprice
    // console.log(props.location.seatPrice.tprice)
    // console.log(props.location.seatArray.seatArray)
    // console.log(props.location.snacksArray.dummy)
    
    props.location.seatArray.seatArray.map(ele=>{
      seats.push(ele.seatName)
    })
    var tempseats=[]
    while(tempseats.length>0)
      tempseats.pop()

    seats.map(ele=>{
      tempseats.push(ele+" ")
    })

  var tempsnacks=[]
  
  var price=0
    props.location.snacksArray.dummy.map(ele=>{
    snacks.push(ele.name)
    snacksQ.push(ele.quant)
    tempsnacks.push(ele.quant+"-",ele.name+" ")    
    price+=ele.price*ele.quant
  })
    



  
 
    const [mail , setMail] = useState("")
    const [emailError, setEmailError] = useState('') 
    const [color , setcolor] = useState(false)
    const [chng , setChng] = useState(false)
    
    
    function handleClick(){
      if(color){
        //alert(email)
          var bookInfo={
            userName:localStorage.getItem("UserName"),
            movieName:localStorage.getItem("movieName"),
            theaterName:localStorage.getItem('theaterName'),
            theaterAddress:localStorage.getItem('theaterAddress'),
            date:localStorage.getItem("date"),
            startTime:time,
            totalNoOfSeat:seats.length,
            seats:seats,
            snacks:snacks,
            snacksQ:snacksQ,
            seatPrice:tprice,
            snacksPrice:price,
            total:tprice+price,
            messageto:email,
            showId:localStorage.getItem("id")
          }
         var data={
           id:localStorage.getItem("id"),
           seats:seats
         }

          axios.post("/Booking/addBooking",bookInfo,{})
          axios.post("/ShowTiming/UpdateSeatArray",data,{})


         localStorage.setItem("wallet",localStorage.getItem('wallet')-tprice-price);
         var wallet=localStorage.getItem("wallet")

         var info={
           wallet:wallet,
           email:localStorage.getItem("loggedUser")
         }
         axios.post("/Customer/UpdateWallet",info,{})
         
         axios.post("/SendMail/sendBookingInfo",bookInfo,{})

          localStorage.removeItem("show")
          localStorage.removeItem("theaterName")
          localStorage.removeItem("id")
          localStorage.removeItem("movieName")
          localStorage.removeItem("city")
          localStorage.removeItem("name")
          localStorage.removeItem("theaterAddress")
          

          history.push("/Booked")
          
        }
      else{alert("Please Enter Email Id")}
      
    }

  const validateEmail = (e) => { 
     email = e.target.value 
  
    if (validator.isEmail(email)) { 
        setcolor(true)
        setChng(true)
      setEmailError('Valid Email :)') 
      setMail(email)
      localStorage.setItem("mailfordetail" , email)
    } else { 
      setEmailError('Enter valid Email! :(') 
    } 
  } 
    
    // const HandleBooking = (mail) =>{
    //     setMail(mail)
    //     console.log(mail)
    // }
    const {loggedIn} = useContext(AuthContext)
    const render_content = loggedIn ?(
        <div className="outer__div1">
            <h3 className="total__div">Grand Total : <span>₹ {tprice+price}</span></h3>
             <h2 >Booking Details</h2>
            <div className="booking__info">
                <p>Username : <span>{localStorage.getItem("UserName")}</span></p>
                <p>Movie : {localStorage.getItem("movieName")}</p>
                <p>ShowDate : {localStorage.getItem("date")} </p>
                <p>ShowTime : {time} </p>
                <p>Theater Address :  {localStorage.getItem('theaterName')}</p>
                <p>Theater Address :  {localStorage.getItem('theaterAddress')}</p>
                <p>Screen Number : {scrno}</p>
                <p>City : {localStorage.getItem("finalcity")}</p>
                <p>Toatl seat : {seats.length}</p>
                <p>Seat No: {tempseats}</p>
                <p>Seat Total Price : {tprice}</p>
                <p>Snack Detail : {tempsnacks}</p>
                <p>Snack Total Price : {price} </p>
                  <form >
                            <div style={{display:"flex" , alignItems:"center"}}>
                            <TextField
                        id="standard-password-input"
                        label="Enter Email ID"
                        type="email"
                        autoComplete="current-password"
                        required
                        style={{
                            display:"block",
                            marginBottom:"10px",
                            marginLeft :"10%",
                            marginBottom:"5px"
                        }}
                        onChange={(e) => validateEmail(e)}
                        />
        <span style={{ 
          fontWeight: 'bold', 
          color: color?("green"):("red"), 
        }}>{emailError}</span>    
                            </div> 
                     
                            <button className="button__style" onClick={handleClick}>Book Now</button>
                     
                </form>
                        
                <Link to="/">
                   <button className="button__style">Cancel</button> </Link>                
            </div>
          
        </div>
    ):(
         <div className="notlog__div">
                <p style={{color:"black", fontFamily:"cursive" , fontSize:"25px",padding:"10px" }}>Please Log in to Book Your Ticket</p>
                <Link to="login"><p
                 style={{color:"blue",cursor:"pointer", fontFamily:"cursive",margin:"10px",display:"inline-block" , fontSize:"25px", }}
                >Login</p></Link>
                <SentimentVeryDissatisfiedIcon
                style={{
                    marginTop:"0px",
                    height:"60px",
                    width :"70px"
                }}
                />
            </div>
    )
    return (
        <>
            {render_content}
          <Footer/>
          </>
    );
};

export default BookingPage;