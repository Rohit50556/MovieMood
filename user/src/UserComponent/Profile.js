import React, { useState } from 'react';
import "../css/Profile.css"
import UserMale from "../Assets/usermale.webp"
// import { black } from 'material-ui/styles/colors';
import Footer from "../UserComponent/Footer"
import {Link} from "react-router-dom"
const Profile = () => {
    const [logged ] = useState(true)
    const [profile , setProfile] = useState(
        {
            fname :"Sunny", 
            lname :"Khatik",
            username:"sunny_1010",
            email : "sunny1019@gmail.com",
            gender : "Male",
            address :"850 ,vishalnagar ,isanpur ,ahmedabad, Gujarat, pincode:382443",
            wallet : "100"
        }
    )
    
    const rendercontent = logged?(<div className="outer__div">
            <div style={{
                height:"60px",
                marginTop:"10px",
                backgroundColor:"silver", marginLeft:"auto" ,marginRight:"auto", width:"75%"
            }}>
                <p style={{color:"black", fontFamily:"cursive" , fontSize:"25px", padding:"10px"}}>User profile Page</p>
            </div>
           
            <div className="second__div">
                 <div className="upper__slick">
                    <img src={UserMale} className="img__user" alt="usermale "/>
                   <div className="upper__div2">
                        <h5 className="hello__tag">Hello, {profile.username}</h5>
                    <h5 className="hello__tag">{profile.email}</h5>
                   </div>
            </div>
                <div className="detail__div">
                    <table>
                        <tr><td>   <h4>First Name</h4></td><td>    <input type="text" value={profile.fname}   onChange={ (e) =>{
                            let tmp = profile
                            let name = e.target.value
                            tmp.fname = name
                            setProfile(tmp)

                        }}></input></td></tr>
                        <tr><td> <h4>Last Name</h4></td><td>  <input type="text" value={profile.lname} ></input></td></tr>
                        <tr><td>  <h4>Email ID </h4></td><td>  <input type="text" value={profile.email }></input></td></tr>
                        <tr><td>    <h4>Gender</h4></td><td> <input type="radio"></input> Male <input type="radio"></input> Female </td></tr>
                        <tr><td>  <h4>Address</h4></td><td><textarea rows="5" cols="25" value={profile.address }></textarea></td></tr>
                        <tr><td> <h4>Wallet Amount </h4></td><td><input type="text" value={"₹ "+ profile.wallet}></input></td></tr>
                    </table>
                    {/* <button className="prof__button">Update Profile</button>            */}
                </div>
            </div>
            
        </div>):(
            <div className="notlog__div">
                <p style={{color:"black", fontFamily:"cursive" , fontSize:"25px",padding:"10px" }}>Please Log in to see your Profile</p>
                <Link to="login"><p
                 style={{color:"blue",cursor:"pointer", fontFamily:"cursive",margin:"10px" , fontSize:"25px", }}
                >Login</p></Link>
            </div>
        );

    return (
        <div>
            {rendercontent}
            <Footer/>
        </div>
    );
};

export default Profile;