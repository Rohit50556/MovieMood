import React, { useContext, useState,useEffect } from 'react';
import "../css/History.css"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {Link} from "react-router-dom"
import AuthContext from "../Context/AutoContext"
// import Footer from "../UserComponent/Footer"
const History = () => {
   
    // const swapaler = () => toast("Created")
    var [seat,setSeat]=useState({
        seatNo:""
    });

    var [bookInfo,setInfo]=useState([{}])
    const {loggedIn} = useContext(AuthContext)
    let name=localStorage.getItem("UserName")
    useEffect(()=>{
        fetch("/Booking/getBookingByName/"+name).then(res=>{
            if(res.ok)
                return res.json()
            else
                console.log("error")
        }).then(jsonres=>setInfo(jsonres))
    },[])
//    console.log(bookInfo)
    
    
function handleChange(event){
       
    const {name,value}=event.target;

    setSeat(prevInput=>{
        return {
            ...prevInput,
            [name]:value
        }
    })
}
    var day=""
    var month=""
    var year=""
    var date=""
    var hour=""
    
    
    var time=new Date();
    var chour=time.getHours(); 
    //alert(chour)

    var currentDate=new Date();
    var cday = currentDate.getDate()
    var cmonth = currentDate.getMonth() + 1
    var cyear = currentDate.getFullYear()
    
//    alert(bookInfo.date)
    if(bookInfo.date===undefined){}
    else
    {
        bookInfo.map(ele=>{
            time=ele.startTime
            var temp=time.charAt(2)+time.charAt(3)
            if(temp==="PM")
                hour=Number(time.charAt(0)+time.charAt(1)+1)
            else
                hour=Number(time.charAt(0)+time.charAt(1))

            date=ele.date
            day=Number(date.charAt(0)+date.charAt(1))
            month=Number(date.charAt(3)+date.charAt(4))
            year=Number(date.charAt(date.length-4)+date.charAt(date.length-3)+date.charAt(date.length-2)+date.charAt(date.length-1))
            if(cyear>=year && cmonth>=month && cday>=day && chour>hour)
                ele.validdate=true
            else
                ele.validdate=true
        })
    }
    // console.log(bookInfo)

        const rendercontent = loggedIn?
        (<div className="outer__div">
            <div style={{
                    height:"60px",
                    marginTop:"10px",
                    backgroundColor:"silver", marginLeft:"auto" ,marginRight:"auto", width:"90%"
                }}>
                    <p style={{color:"black", fontFamily:"cursive" , fontSize:"25px", padding:"10px"}}>User History Page</p>
                </div>
            {
                bookInfo.map((e) => (
                    <div className="ineer__div">
                        <h3>Booking ID : <sapn style={{fontSize:"30px" , color:"green"}}>{e._id}</sapn></h3>
                        <p> Username : <span    className="span__style"> {e.userName}</span></p>
                        <p> Date :<sapn   className="span__style"> {e.date} </sapn></p>
                        <p>Time : <span  className="span__style">{e.startTime}</span></p>
                        <p>Movie Name : <span className="span__style">{e.movieName }</span></p>
                        <p>Theater Name : <span className="span__style">{e.theaterName}</span></p>
                        <p>Theater Address : <span className="span__style">{e.theaterAddress}</span></p>
                        <p>Total Number Of Seat :<span className="span__style">{e.totalNoOfSeat}</span> </p>
                        <p>Seat Number :<span className="span__style">{e.seats+" "}</span> </p>
                        <p>Total Seat Price :<span className="span__style">{e.seatprice}</span> </p>
                        <p>Snacks List :<span className="span__style">{e.snacks+" "}</span> </p>
                        <p>Total Snacks Price :<span className="span__style">{e.snacksprice}</span> </p>
                        <p>Total Price :<span className="span__style">{e.total}</span></p>
                    
                        {/* <p>Your Wallet Deduction amount is : <span className="span__style"    >{e.walletAmount}</span></p>
                         */}
                        {
                            e.isCanceled?
                            (<div style={{color:'red'}} className="bookingnotconfirm">
                                <p>Your Booking Is Canceled</p>
                            </div>):
                            (e.validdate?
                                (<div className="three__button">
                                <Link to={{pathname:"Cancel",
                                        id:e._id,
                                        seats:e.seats,
                                        showId:e.showId,
                                        total:e.total
                                }}><button className="button__class">Cancel ?</button></Link><br/><br/>
                                    {/* <Link to="adjust"><button className="button__class">Adjust ?</button></Link> */}
                                    <input type="text" name="seatNo" value={seat.seatNo} onChange={handleChange} placeholder="Enter Seat Number"/>
                                    <Link to={{pathname:"swap",
                                        id:e._id,
                                        no:seat.seatNo
                                }}> <button className="button__class" >Swap ?</button>
                                </Link>

                            </div>):(
                            <div style={{color:'red'}}>
                                <p>Ticket Expire</p>
                            </div>))
                        }
                        </div>      
                   )
                )
            }
        </div>)
        :
        (
            <div className="notlog__div">
                <p style={{color:"black", fontFamily:"cursive" , fontSize:"25px",padding:"10px" }}>Please Log in to see your History</p>
                <Link to="login"><p
                 style={{color:"blue",cursor:"pointer", fontFamily:"cursive",margin:"10px" , fontSize:"25px", }}
                >Login</p></Link>
            </div>
        );
    return (
        <>
<div>        
    {rendercontent}
</div>

    </>);
};

export default History;


















// import React from 'react';

// const History = () =>{
//  return(<>
 

//  </>
//  );
// }


// export default History;