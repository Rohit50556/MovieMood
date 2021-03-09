import React,{  useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./css/Register.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col, Card, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
class Register extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      isLoginopen: true,
      isRegisteropen: false,
    };
  }

  showRegister() {
    this.setState({ isLoginopen: false, isRegisteropen: true });
  }

  showLogin() {
    this.setState({ isLoginopen: true, isRegisteropen: false });
  }

  render() {
    return (<>
<div className="Admin">
      <div className="TheaterTimeTable"></div>
      <div className="img">
        <div className="size">
          <div className="root-container">
            <div className="box-controller">
              <Card
                style={{
                  width: "28rem",
                  height: "28rem",
                  backgroundColor: "white",
                }}
              >
                <Card.Header>
                  <ul className="nav nav-tabs card-header-tabs">
                    <div style={{ marginLeft: "50px" }}></div>
                    <li className="nav-item style">
                      <Navbar.Toggle onClick={this.showLogin.bind(this)}>
                        Theater Register
                      </Navbar.Toggle>
                    </li>
                  </ul>
                </Card.Header>

                <div className="box-container">
                  {this.state.isLoginopen && <LoginClass />}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div></div></>
    );
  }
}

const LoginClass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname,setFname]=useState("");
  const [screen,setScreen]=useState("");
  const [username,setUsername]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState();
  const [pno,setPhone]=useState();
  async function register(e){
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        fname,
        username,
        address,
        city,
        screen,
        pno
      };
      console.log(registerData)
      axios.post(
        "/Theater/addTheater",
        registerData

      ).then(res => {console.log("this is res "+res)})
     .catch(e=>{console.log("this is our e"+e)})
   
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Form style={{ marginTop: "20px", marginLeft: "10px" }} onSubmit={register} >
        <h4>Theater Registration Form</h4>
        <Form.Row>
          <Form.Group as={Col}>
            <TextField
              label="Theater name"
              name="fname"
              placeholder="Theater Name"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "140px" }}
              variant="outlined"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
          <TextField
              label="City"
              name="city"
              placeholder="please enter City"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "140px" }}
              variant="outlined"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridZip">
            <TextField
              label="Total Screen"
              placeholder="Screen"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "115px" }}
              variant="outlined"
              name="screen"
              onChange={(e) => setScreen(e.target.value)}
              value={screen}
              required
            >
             </TextField>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <TextField
              label="Username"
              placeholder="please enter username"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "200px" }}
              variant="outlined"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <TextField
              label="password"
              name="password"
              placeholder="please enter password"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "180px" }}
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <TextField
            label="address"
            name="address"
            placeholder="please enter address"
            inputProps={{ "aria-label": "Search for Movie" }}
            style={{ width: "420px" }}
            variant="outlined"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress1">
            <TextField
              label="Email"
              name="email"
              placeholder="please enter email"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "200px" }}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <TextField
              label="phone No"
              name="pno"
              placeholder="Phone Number"
              inputProps={{ "aria-label": "Search for Movie" }}
              style={{ width: "180px" }}
              variant="outlined"
              onChange={(e) => setPhone(e.target.value)}
              value={pno}
              required
            />
          </Form.Group>
        </Form.Row>
        <Button variant="success" type="submit" style={{ marginLeft: "30px" }}>
          Register
        </Button>
        <Link to="/login">
          <Button variant="info" type="submit" style={{ marginLeft: "120px" }}>
            TheaterLogin?
          </Button>
        </Link>
      </Form>
    </div>
  );
};


export default Register;
