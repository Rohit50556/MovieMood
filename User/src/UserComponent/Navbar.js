import React from "react";
import "../css/Navbar.css";
import LOGO from "../Assets/image/logo.svg";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AuthContext from "../Context/AutoContext"
import Select from "@material-ui/core/Select";
//import Value from "@material-ui/core/Value";

import{ useHistory} from "react-router-dom";
const Navbar = () => {
  const {loggedIn} =  useContext(AuthContext)
  console.log("iniside navbar "+ loggedIn)
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  console.log("logged iN ? "+loggedIn)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["nav__nav"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  // const currencies = [
  //   {
  //     value:localStorage.getItem("city"),
  //     label:localStorage.getItem("city"),

  //   },
  //   {
  //     value:"Mehsana",
  //     label:"Mehsana",
  //   }  
  // ];
  const followers = [
    { "Ahmedabad" : "Ahmedabad"},
    {"Surat": "Surat"},
    { "nadiad": "nadiad"},
    { "Mehsana": "Mehsana" },
  ];
  const [value, setValue] = useState("");
   const handleChange = event => setValue(event.target.value);
   
   localStorage.setItem("UserCity", value)
  const myRef = useRef();
  const [width, setWidth] = useState(900);
  useEffect(() => {
    const handleResize = () => {
      setWidth(myRef.current.offsetWidth);
      console.log(width);
      //setHeight(myRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const [toggle, setToggle] = useState(false);
  const [t1, st2] = useState(false);
  //
  //
  const navLeft =
    width < 890 ? (
      <div onClick={() => setToggle(true)}>
        <MenuIcon
          style={{
            cursor: "pointer",
            width: "40px",
            backgroundColor: "white",
          }}
          className="scrolled"
        />
      </div>
     ) :      
     (
      <div className={scrolled ? "nav__nav scrolled" : "nav__nav"}>
        <img src={LOGO} alt="not avilable" />
        <div className="nav__left">
          <Link className="nav_left_link" to="/">
            <p>Home</p>
          </Link>
          <Link className="nav_left_link" to="/history">
            <p>History</p>
          </Link>
          <Link className="nav_left_link" to="/adjust">
            <p>Adjust</p>
          </Link>
          <Link className="nav_left_link" to="/profile">
            <p>Profile</p>
          </Link>
          <Link className="nav_left_link" to="/swap">
            <p>Swap</p>
          </Link>
        </div>
      </div>
    );

  const navRight =
    width < 700 ? (
      <div onClick={() => st2(true)}>
        <MenuIcon
          style={{
            cursor: "pointer",
            width: "40px",
            backgroundColor: "white",
          }}
        />
      </div>
    ) : (
      <div className={scrolled ? "nav__right scrolled__right" : "nav__right"}>
        <div className="nav__searchicon">
          <SearchIcon
            style={{
              marginTop: "15px",
              marginRight: "5px",
            }}
          />
          <TextField
            label="Search Movie"
            placeholder="Moviename"
            inputProps={{ "aria-label": "Search for Movie" }}
            className="nav__input"
            style={{
              width: "150px",
              marginRight: "15px",
              color: "white",
            }}
          />
        </div>
       {
         loggedIn === false? (

            <Link className="nav_right_link" to="/login">
          <div className="nav__login">
            <AccountCircleIcon style={{ color: "white" }} />
            <p style={{ color: "white" }}>Login/Register</p>
          </div>
        </Link>
         ):(
   
           
           <Link className="nav_right_link" to="/login">
          <div className="nav__login">
            <AccountCircleIcon style={{ color: "white" }} />
            <p style={{ color: "white" }}><button onClick={()=>{localStorage.clear()
              useHistory.push("/login")}}>Logout</button></p>
          </div>  
        </Link>
         )
       }
      </div>
    );
    // function handleChange(e){
    //   var city=e.target.
    //   alert(city)
    // }

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={toggle}
        onClose={() => setToggle(false)}
        onOpen={() => setToggle(true)}
      >
        <div className="nav__nav">
          <div className="nav__left">
            <img src={LOGO} alt="not avilable" />
            <div className="nav__searchicon">
              <SearchIcon
                style={{
                  marginTop: "10px",
                  marginRight: "5px",
                }}
              />
              <TextField
                label="Search Movie"
                placeholder="Moviename"
                inputProps={{ "aria-label": "Search for Movie" }}
                className="nav__input"
                style={{
                  width: "150px",
                  marginRight: "15px",
                }}
              />
            </div>

            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/history">
              <p>History</p>
            </Link>
            <Link to="/adjust">
              <p>Profile</p>
            </Link>
            <Link to="/swap">
              <p>Swap</p>
            </Link>
            <Link to="/snacks">
              <p>Snacks</p>
            </Link>
          </div>
        </div>
      </SwipeableDrawer>

      <nav className="nav__nav" ref={myRef}>
        {navLeft}
        <div
          className={scrolled ? "nav__middel scrolled__middel " : "nav__middel"}
        >
         
         <div style={{display:"flex" , alignItems:"center" , marginBottom:"15px" , marginTop:"15px" ,marginLeft:"30%" }}>
            <p style={{ fontSize:"20px", fontWeight:"500px", marginRight:"5px", color:"blue" , marginBottom:"8px", marginLeft:"10%"}}></p>
          <Select
            style={{width:"150px", color:"blue"}}
            margin="dense"
            displayEmpty
            onChange={handleChange}
            value={value}
            variant="outlined"

        >
          {followers.map(element => (
            <MenuItem
              value={element[Object.keys(element)] + ""}
              key={Object.keys(element)[0]}
            >
              {Object.keys(element)[0]}
            </MenuItem>
          ))}
          
        </Select>
         </div>
        
          {/* <TextField
            id="filled-select-currency"
            select
            label="City Name"
            style={{
              width: "200px",
              backgroundColor: "#90CAF9",
              marginTop: "auto",
              height: "42px",
              color: "#81D4FA",
            }}
            margin="normal"
            variant="filled"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value} selected="true" onChange={(e)=>handleChange(e)}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}
        </div>
        {navRight}
        <SwipeableDrawer
          anchor="right"
          open={t1}
          onClose={() => st2(false)}
          onOpen={() => st2(true)}
        >
      
         {
         loggedIn? (
             <div className="nav__right">
            <Link className="nav_right_link" to="/login">
              <div className="nav__login">
                <AccountCircleIcon
                  style={{
                    marginTop: "10px",
                    marginLeft:"50px"
                  }}
                />
                <p
                  style={{
                    color: "black",
                       marginLeft:"50px"
                  }}
                >
             Logout
                </p>
              </div>
            </Link>
          </div>
         ):(
           <div className="nav__right">
            <Link className="nav_right_link" to="/login">
              <div className="nav__login">
                <AccountCircleIcon
                  style={{
                    marginTop: "10px",
                  }}
                />
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Login/Register
                </p>
              </div>
            </Link>
          </div>
         )
       }
         
        </SwipeableDrawer>
      </nav>
      {/* </header> */}
    </div>
  );
};

export default Navbar;
