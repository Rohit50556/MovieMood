import React, { useEffect, useState } from 'react';
import "../css/Query.css"
import TextField from "@material-ui/core/TextField";
import Footer from "../UserComponent/Footer"
import Axios from "axios"
import validator from 'validator'
import { Alert, AlertTitle }from '@material-ui/lab';
const Query = () => {

    const userName = localStorage.getItem("UserName")
    const [email , setMail]=useState("")
    const [query , setQuery] = useState("")
    const [emailError, setEmailError] = useState('') 
    const [color , setcolor] = useState(false)
    const [chng , setChng] = useState(false)

    const postdata = () =>{
        var Query = {
            userName, email, query
        }
        console.log(localStorage.getItem("UserName"))
        console.log("go")
        Axios.post("/Query/addQuery",Query)
        .catch((e)=>(console.log("eroro"+e)))
    }
     const validateEmail = (e) => { 
     const email2 =  e.target.value 
  
    if (validator.isEmail(email2)) { 
        setcolor(true)
        setChng(true)
      setEmailError('Valid Email :)') 
      setMail(email2)
      localStorage.setItem("mailfordetail" , email2)
    } else { 
      setEmailError('Enter valid Email! :(') 
    } 
  } 
    return (
        <form>
        <div className="query__page">
            <p style={{backgroundColor:"whitesmoke", paddingLeft:"30px", height:"50px"}}>Query Page for User</p>
                <Alert style={{backgroundColor:"#3FFF176"}} variant="filled" severity="info">
                Our MovieMood Team will Respone Using email id which You provide Here in EmailField.
                </Alert>
             <TextField
            label="UserName"
            placeholder="Moviename"
            inputProps={{ "aria-label": "Search for Movie" }}
            className="nav__input"
            style={{
            display:"block",
            margin:"30px"
            }}
             onChange={(e) => validateEmail(e)}
          value={localStorage.getItem("UserName")}
          variant="outlined"
          />
           <div style={{display:"flex" , alignItems:"center"}}>
                            <TextField
                        id="standard-password-input"
                        label="Enter Email ID"
                        type="email"
                        autoComplete="current-password"
                        required
                        variant="outlined"
                        style={{
                            display:"block",
                            marginLeft :"30px",
                                marginBottom:"30px"
                        }}
                        onChange={(e) => validateEmail(e)}
                        />
        <span style={{ 
            marginLeft:"15px",
            marginBottom:"25px",
          fontWeight: 'bold', 
          color: color?("green"):("red"), 
        }}>{emailError}</span>    
                            </div> 
                     
          <TextField
                placeholder="Please Write Your Query"
                multiline
                label="Query"
                rows={6}
                rowsMax={Infinity}
                variant="outlined"
                style={{
                    width:"400px",
                    marginLeft:"30px",
                    height:"100px",
                    marginBottom:"50px"
                }}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <div className="query__buttons">
                <button 
                onClick={postdata}
                >Submit Query</button>
             <button >Cancel</button>
  
            </div>
        </div>
        
        <Footer/></form>
    );
};

export default Query;


// import React, { useEffect, useState } from 'react';
// import "../css/Query.css"
// import TextField from "@material-ui/core/TextField";
// import Footer from "../UserComponent/Footer"
// import Axios from "axios"

// const Query = () => {

//     const userName = localStorage.getItem("UserName")
//     const [email , setMail]=useState("")
//     const [query , setQuery] = useState("")
//     const postdata = () =>{
//         var Query = {
//             userName, email, query
//         }
//         console.log(localStorage.getItem("UserName"))
//         console.log("go")
//         Axios.post("/Query/addQuery",Query)
//         .catch((e)=>(console.log("eroro"+e)))
//     }

//     return (
//         <form>
//         <div className="query__page">
//             <p>Query Page for User</p>
//              <TextField
//             label="UserName"
//             placeholder="Moviename"
//             inputProps={{ "aria-label": "Search for Movie" }}
//             className="nav__input"
//             style={{
//             display:"block",
//             margin:"30px"
//             }}
//           value={localStorage.getItem("UserName")}
//           variant="outlined"
//           />
//           <TextField
//             label="Email ID"
//             placeholder="Moviename"
//             inputProps={{ "aria-label": "Search for Movie" }}
//             className="nav__input"
//             style={{
//             display:"block",
//             margin:"30px"
//             }}
//             type="email"
//             onChange={(e) => setMail(e.target.value)}
//           value={email}
//           variant="outlined"

//           />
//           <TextField
//                 placeholder="Please Write Your Query"
//                 multiline
//                 label="Query"
//                 rows={6}
//                 rowsMax={Infinity}
//                 variant="outlined"
//                 style={{
//                     width:"400px",
//                     marginLeft:"30px",
//                     height:"100px",
//                     marginBottom:"50px"
//                 }}
//                 onChange={(e) => setQuery(e.target.value)}
//                 value={query}
//             />
//             <div className="query__buttons">
//                 <button 
//                 onClick={postdata}
//                 >Submit Query</button>
//              <button >Cancel</button>
  
//             </div>
//         </div>
        
//         <Footer/></form>
//     );
// };

// export default Query;