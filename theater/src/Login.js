import React ,{useEffect, useState } from "react";
import "./css/Login.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import {useHistory} from "react-router-dom"

  const Login  =() => 
  {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    var [Data,setData]=useState("")

    useEffect(()=>{
      if(localStorage.getItem("temp")===null)
      { 
         localStorage.setItem("temp","pqr")
          setData("xyz")
          window.location.reload()
      }

    },[Data])
    

    async function loginc(e){
      e.preventDefault();
      try 
      {
        const loginData = {
          email,
          password
        };

         axios.post(
          "/Theater/LoginTheater",
          loginData
        ).then((res)=>{
          localStorage.setItem("token",res.data.token);
          //localStorage.setItem("loggedUser" ,res.data.existingUser.theaterEmail)
          localStorage.setItem("theaterName" ,res.data.existingUser.theaterName)
          localStorage.setItem("city" ,res.data.existingUser.city)
          localStorage.setItem("address" ,res.data.existingUser.theaterAddress)
          localStorage.setItem("scr" ,res.data.existingUser.noOfScreen)
          localStorage.setItem("theaterId" ,res.data.existingUser._id)

          
          history.push("/")
          window.location.reload();
          //     userlogged = (localStorage.getItem("loggedUser"))
          // console.log(localStorage.getItem("loggedUser"))
       
        }).catch(error=>{
          console.log(error);
        });
      } 
      catch (err) {
        console.error(err);
      }
    }
return (
  <div className="Admin">
       <div className="TheaterTimeTable"></div>
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
                    
                        Theater Login
                      
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
            <h3>Theater Login</h3>
            <TextField
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
              Theater SignUp?
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
      </div>
    );
}

export default Login;


