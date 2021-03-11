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
import {Multiselect} from 'multiselect-react-dropdown';

var dates=[]
function addDate(date,id){
  return {date,id}
}
const MovieDetail = () => {
  const [casts,setCasts]=useState([]);

    while(dates.length > 0) {
      dates.pop();
    }
   
    var currentDate=new Date();
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    dates.push(addDate(day+"/"+month+"/"+year,1))
    dates.push(addDate((day+1)+"/"+month+"/"+year,2))
    dates.push(addDate((day+2)+"/"+month+"/"+year,3))
    
    const [datelist]=useState(dates);
      
  const movieName = localStorage.getItem("movieName");
  const [movie,setMovie]=useState([{}]);
  
//  const [startDate, setStartDate] = useState(new Date());

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
      }
    })
    .then(jsonRes => {setMovie(jsonRes);setCasts(jsonRes[0].cast)})
    .catch(e => {console.log(e);});
  },[]);

  console.log("=="+movie[0])

  var c =[];
  for(let i=0;i<casts.length;i++)
  {
    c.push(
        <Castcard name={casts[i]} />
    );
  }
//  console.log("=="+movie[0].moviename)
function handleDateRemove(item,event)
{
  localStorage.setItem('date',"")
}
function handleDate(item,event)
{
    localStorage.setItem('date',event.date)
    if(localStorage.getItem("UserCity")!="")
      localStorage.setItem('finalcity',localStorage.getItem("UserCity")) 
    window.location.reload();
  }

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
        {c}
      </div>
      <hr className="hrstyle" />
      <div className="date__class">
       
        Selected Date: {localStorage.getItem('date')}
      
        <div style={{marginLeft:'100px',marginRight:'200px'}}>
        <Multiselect   options={datelist}  displayValue="date" placeholder="Date"  onRemove={handleDateRemove} onSelect={handleDate}/>     
        </div>
      </div>
      <TheaterWithShowTimeContainer /> 
      <Footer />
    </div>
  );
};

export default MovieDetail;
