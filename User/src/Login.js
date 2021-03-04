import React ,{ useState } from "react";
import "./css/Login.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
axios.defaults.withCredentials=true;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginopen: true, isRegisteropen: false };
  }

  showRegister() {
    this.setState({ isLoginopen: false, isRegisteropen: true });
  }

  showLogin() {
    this.setState({ isLoginopen: true, isRegisteropen: false });
  }

  render() {


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
                      <Navbar.Toggle onClick={this.showLogin.bind(this)}>
                        User Login
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
      </div>
    );
  }
}

const LoginClass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged,setLogged]=useState(false);

  async function loginc(e){
    e.preventDefault();
    try {
      const loginData = {
        email,
        password
      };

      await axios.post("http://localhost:3030/Customer/LoginCustomer",loginData).then(res=>{
          localStorage.setItem("token",res.data);
      });


      if(localStorage.getItem("token"))
      {
        setLogged(true);
        console.log(logged)
      }

      

    } catch (err) {
      console.error(err);
    }
  }
    return (
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
    );

};

export default Login;


// axios.post(url,data, {
//   headers: {
//       'Authorization': localStorage.getItem("token") }
// })
// .then(response => {
//   // return  response;
// })
// .catch((error) => {
//   //return  error;
// });

