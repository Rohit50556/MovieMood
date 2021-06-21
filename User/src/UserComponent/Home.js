import {React,useEffect} from "react";
import Slider from "./Slider";
import FilterBY from "./FilterBY";
import Card from "./Card";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import "../css/Home.css";
import Footer from "../UserComponent/Footer";
const Home = () => {
  return (<>
        <div
      style={{
        backgroundColor: "#ececec",
      }}
      className="home"
    >
      <Slider />
      <div className="Header__div">
        <ButtonToolbar
          className="justify-content-between"
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
            aria-label="First group"
          >
            <Button autoFocus="true" variant="secondary">
              Now Showing Movies
            </Button>{" "}
            <Button variant="secondary">Upcoming Movies</Button>{" "}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <div className="home__div2">
        <div className="filter__left">
          <FilterBY />
        </div>
        <div className="cards__right">
            <Card />
        </div>
      </div>
      <Footer />
    </div>
</>
  );
  
};

export default Home;
