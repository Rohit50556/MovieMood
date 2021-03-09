import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  
  const [loggedIn, setLoggedIn] = useState(false);
  var token = localStorage.getItem("token")
  
  function getLoggedIn() 
  {
      const loggedInRes = axios.get("Customer/isLoggedInc" ,   {headers: {'Authorization': token }})
      .then(res => {
        setLoggedIn(res.data)
        console.log("this is res contestxt "+ res)
        
      })
      .catch(e => {console.log("inside conetct : "+e)})
      console.log("baar"+loggedIn)
  }
  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };