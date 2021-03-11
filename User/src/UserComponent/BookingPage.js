import React, {useContext, useState} from 'react';
import "../css/BookingPage.css"
import TextField from '@material-ui/core/TextField';
import Footer from "../UserComponent/Footer"
import AuthContext from "../Context/AutoContext"
import {Link} from "react-router-dom"
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import validator from 'validator'
const BookingPage = () => {
    const [mail , setMail] = useState("")
    const [emailError, setEmailError] = useState('') 
    const [color , setcolor] = useState(false)
    const [chng , setChng] = useState(false)
  const validateEmail = (e) => { 
    var email = e.target.value 
  
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
    
    const HandleBooking = (mail) =>{
        setMail(mail)
console.log(mail)
    }
    const {loggedIn} = useContext(AuthContext)
    const render_content = loggedIn ?(
        <div className="outer__div1">
            <h3 className="total__div">Grand Total : <span>₹ 100</span></h3>
             <h2 >Booking Details</h2>
            <div className="booking__info">
                <p>Username : <span>Sunny</span></p>
                <p>Movie : </p>
                <p>ShowTime :</p>
                <p>Theater Address : </p>
                <p>Screen Number :</p>
                <p>City :</p>
                <p>Seat Detail : </p>
                <p>Toatl seat :</p>
                <p>Seat Total Price : </p>
                <p>Snack Detail :</p>
                <p>Snack Total Price :</p>
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
                     <Link to={!chng?"bookingpage":"booked"}>
                            <button className="button__style" onClick={()=>{HandleBooking(mail)}}>Book Now</button>
                     </Link>
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