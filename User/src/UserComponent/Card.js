import React from "react";
import "../css/Card.css";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom'
const Card = () => {
  const [clicked, setClicked] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  
  const [img,setposter]=useState([{
  }])
  
  useEffect(()=>{
    fetch('/Movie/getAllMovie')
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    })
    .then((jsonRes) => {setposter(jsonRes);
      console.log(jsonRes);
    })
    .catch(e => (console.log(e)))
  })


  


  var rows = [];
  for(let index=0;index<img.length;index++)
  {
    rows.push(
      
      <div style={{ display: "inline-block" ,marginRight:"15px"}} className="scene scene--card">
        
        <div className={clicked[index] ? "card is-flipped" : "card"} onClick={() => {
      
            let Dummy = [...clicked];
               Dummy[index]=!clicked[index]
                setClicked(Dummy);
         
        }}>
          <div className="card__face card__face--front">
            <img src={process.env.PUBLIC_URL+'/Assets/Upload/'+img[index].poster} alt="not available" />
          </div>
          <div className="card__face card__face--back">
            <h3><b>{img[index].moviename}</b></h3>
            <h6>Geners :-{img[index].genre}</h6>
            <h6>language :- {img[index].language}</h6>
            <Link to="moviedetail">
            <button className="btn btn-primary book__button"  onClick={(e)=>{ localStorage.setItem("movieName",img[index].moviename)}}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
 
    return(<div>
      {rows}
    </div>);
}

export default Card;