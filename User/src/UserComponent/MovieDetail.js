import React from "react";
import { useState,useEffect } from "react";
import "../css/MovieDetail.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ReactPlayer from "react-player";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Castcard from "../UserComponent/Castcard";
import { Link } from "react-router-dom";
import TheaterWithShowTimeContainer from "../UserComponent/TheaterWithShowTimeContainer";
import Footer from "../UserComponent/Footer";
const MovieDetail = () => {
  const movieName = "xyz";
  const [movie,setMovie]=useState([{}]);
  
  const [startDate, setStartDate] = useState(new Date());

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };


  useEffect(()=>{
    fetch('/Movie/getMovieByName/'+movieName)
    .then(res=>{
      if(res.ok){
        return res.json()
        //        console.log(res.json())
      }
    })
    .then(jsonRes => setMovie(jsonRes))
    .catch(e => {console.log(e);});
  },[]);
//  console.log("=="+movie[0].moviename)
  
  return (
     <div className="main__div">
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <div>
          <ReactPlayer
            style={{
              position: "relative",
              top: "0",
              zIndex: "2",
              marginTop: "5%",
            }}
            controls
            width="800px"
            height="450px"
            playing={open}
            url={movie[0].url}
          />
        </div>
      </Backdrop>

      <div className="div__outer">
        <div className="card__div">
          <div className="card__image" onClick={handleToggle}>
            <div style={{}}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  marginTop: "150px ",
                  marginLeft: "70px",

                  cursor: "pointer",
                }}
              >
                <PlayCircleOutlineIcon
                  style={{
                    color: "white",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </div>
              <img
                src={process.env.PUBLIC_URL+'/Assets/Upload/'+ movie[0].poster}
                style={{
                  height: "340px",
                  width: "190px",
                  cursor: "pointer",
                }}
                alt=""
                card
                image
              />
            </div>
          </div>

          <div className="card__detail">
            <h2
              style={{
                marginTop: "15px",
                marginLeft: "20px",
                fontSize: "25px",
                letterSpacing: "0.4px",
                lineHeight: "21.6px",
                color: "#212121",
                wordSpacing: "0px",
                fontWeight: "600",
              }}
            >
              {movie[0].moviename}
            </h2>

            <h6
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                fontSize: "14px",
                letterSpacing: "0.4px",
                color: "#212121",
                wordSpacing: "0px",
                fontWeight: "600",
              }}
            >
            {movie[0].genre}  |  {movie[0].duration} hr. | 24 Dec, 2020
            </h6>

            <h6
              style={{
                marginTop: "0px",
                marginLeft: "20px",
                fontSize: "15px",
                color: "#212121",
                wordSpacing: "0px",
                fontWeight: "600",
                letterSpacing: "0.4px",
              }}
            >
              {movie.lanuage}
            </h6>
            <h6
              style={{
                marginTop: "30spx",
                marginLeft: "20px",
                fontSize: "15px",
                letterSpacing: "0.4px",
                color: "#212121",
                wordSpacing: "0px",
                fontWeight: "600",
              }}
            >
              Actor:
            </h6>
            <h6
              style={{
                marginTop: "0px",
                marginLeft: "20px",
                fontSize: "15px",
                letterSpacing: "0.4px",
                color: "#212121",
                wordSpacing: "0px",
                fontWeight: "600",
              }}
            >
              Directore :
            </h6>
            <h6
              style={{
                marginTop: "0px",
                marginLeft: "20px",
                fontSize: "15px",
                letterSpacing: "0.4px",
                color: "#212121",
                wordSpacing: "0px",
                fontWeight: "600",
              }}
            >
              Music Directore :
            </h6>
            <h6
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                fontSize: "15px",
                letterSpacing: "0.4px",
                lineHeight: "21px",
                color: "#212121",
                wordSpacing: "0px",
                fontWeight: "600",
              }}
            >
              Synopsis : Wonder Woman squares off against Maxwell Lord and the
              Cheetah, a villainess who possesses superhuman strength and
              agility.
            </h6>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL+'/Assets/Upload/'+ movie[0].movieImg}
          style={{
            width: "100%",
            height: "500px",
            opacity: "0.6",
            position: "relative",
          }}
          alt="Poster wonder woman"
        />
      </div>
      <hr className="hrstyle" />
      <div className="cast__div">
        <h4>Cast</h4>
        <Link to="castdetailpage">
          <Castcard />
        </Link>
        <Link to="castdetailpage">
          <Castcard />
        </Link>
        <Link to="castdetailpage">
          <Castcard />
        </Link>
        <Link to="castdetailpage">
          <Castcard />
        </Link>
        <Link to="castdetailpage">
          <Castcard />
        </Link>
        <Link to="castdetailpage">
          <Castcard />
        </Link>
        <Link to="castdetailpage">
          <Castcard />
        </Link>
      </div>
      <hr className="hrstyle" />
      <div className="date__class">
        <span>Please select your Date : </span>
        <DatePicker
          // withPortal
          showMonthDropdown
          useShortMonthInDropdown
          showYearDropdown
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          calendarClassName="rasta-stripes"
        />
      </div>
      <TheaterWithShowTimeContainer />
      <Footer />
    </div>
  );
};

export default MovieDetail;
