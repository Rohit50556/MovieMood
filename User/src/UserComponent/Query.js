import React, { useEffect, useState } from 'react';
import "../css/Query.css"
import TextField from "@material-ui/core/TextField";
import Footer from "../UserComponent/Footer"
import Axios from "axios"

const Query = () => {

    const userName = localStorage.getItem("UserName")
    const [email , setMail]=useState("")
    const [query , setQuery] = useState("")
    const postdata = () =>{
        var Query = {
            userName, email, query
        }
        console.log(localStorage.getItem("UserName"))
        console.log("go")
        Axios.post("/Query/addQuery",Query)
        .catch((e)=>(console.log("eroro"+e)))
    }

    return (
        <form>
        <div className="query__page">
            <p>Query Page for User</p>
             <TextField
            label="UserName"
            placeholder="Moviename"
            inputProps={{ "aria-label": "Search for Movie" }}
            className="nav__input"
            style={{
            display:"block",
            margin:"30px"
            }}
          value={localStorage.getItem("UserName")}
          variant="outlined"
          />
          <TextField
            label="Email ID"
            placeholder="Moviename"
            inputProps={{ "aria-label": "Search for Movie" }}
            className="nav__input"
            style={{
            display:"block",
            margin:"30px"
            }}
            type="email"
            onChange={(e) => setMail(e.target.value)}
          value={email}
          variant="outlined"

          />
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