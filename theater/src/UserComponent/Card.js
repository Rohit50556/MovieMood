import React from "react";
import "../css/Card.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Card = () => {
  const [clicked, setClicked] = useState(false);
  
  const [img,setposter]=useState([{
  }])
  
  useEffect(()=>{
    fetch('/Movie/getAllMovie').then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setposter(jsonRes))
  },[])


  console.log(img)

 
  return ( 
  <>
    {img.map((data,index)=>(
      <div style={{ display: "inline-block" }} className="scene scene--card">
      
      <div className={clicked ? "card is-flipped" : "card"} onClick={() => setClicked(!clicked)}>

      <div className="card__face card__face--front">
        <img src={process.env.PUBLIC_URL+'/Assets/Upload/'+img[index].poster} alt="not available" />
      </div>
      
      <div className="card__face card__face--back">
        <h5>wonder Woman</h5>
        <h6>Geners --&gt Advwenture</h6>
        <h6>language --&gt Hindi</h6>
        <Link to="moviedetail">
          <button className="btn btn-primary book__button">Book Now</button>
        </Link>
      </div>
    </div>
  </div>
  ))}
  </>
 );
}

export default Card;