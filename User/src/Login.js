import React ,{ useContext, useState,useEffect } from "react";
import "./css/Login.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import AuthContext from "../src/Context/AutoContext"
import {useHistory} from "react-router-dom"
axios.defaults.withCredentials=true;
var userlogged;
  const Login  =() => 
  {
    var [Data,setData]=useState("")

    useEffect(()=>{
      if(localStorage.getItem("temp")===null)
      { 
         localStorage.setItem("temp","pqr")
          setData("xyz")
          window.location.reload()
      }

    },[Data])

    const {loggedIn , setLoggedIn} =  useContext(AuthContext);

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function loginc(e){
      e.preventDefault();
      try 
      {
        const loginData = {
          email,
          password
        };

        await axios.post(
          "/Customer/LoginCustomer",
          loginData
        ).then((res)=>{
          localStorage.setItem("token",res.data.token);
          //  setLoggedIn(true)
          localStorage.setItem("loggedUser" , res.data.existingUser.email)
          localStorage.setItem("city" , res.data.existingUser.city)
          localStorage.setItem("UserName" , res.data.existingUser.username)
          
              history.push("/")
              userlogged = (localStorage.getItem("loggedUser"))
          console.log(localStorage.getItem("loggedUser"))
          

          window.location.reload();
          // console.log(res.data)
        }).catch(error=>{
          console.log(error);
        });

          
          
              
        
        // const user = await axios.post("/Customer/getLoggedEndUserData", loginData)
        // console.log(user.data)
      } 
      catch (err) {
        console.error(err);
      }
    }
return (
      <div className="img2">
        <div className="size">
          <div className="root-container">
            <div className="box-controller">
              <Card
                style={{
                  width: "25rem",
                  height: "25rem",
                  backgroundColor: "white",
                }}
              >
                <Card.Header>
                  <ul className="nav nav-tabs card-header-tabs">
                    <div style={{ marginLeft: "50px" }}></div>
                    <li className="nav-item style">
                    
                        User Login
                      
                    </li>
                  </ul>
                </Card.Header>

                <div className="box-container">
                   <div>
        <Form
          style={{
            marginLeft: "30px",
            marginTop: "30px",
          }}
          onSubmit={loginc}
        >
          <Form.Group controlId="formBasicString">
            <h3>End User Login</h3>
            <TextField
              type="email"
              label="User Email Id"
              placeholder="please enter User EmailId"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "20vw" }}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />  
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <TextField
              type="password"
              label="Password"
              placeholder="please enter password"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "20vw" }}
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </Form.Group>
          <hr />
          <Button
            variant="success"
            type="submit"
            style={{ marginLeft: "30px" }}
            onClick={loginc}
          >
            Login
          </Button>
          <Link to="/register">
            <Button
              variant="info"
              type="submit"
              style={{ marginLeft: "100px" }}
            >
              User SignUp?
            </Button>
          </Link>
        </Form>
      </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;


