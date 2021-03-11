import React from "react";
import { useState,useEffect } from "react";
import Galgadot from "../Assets/cast/gal-gadot.jpg";
import "../css/Castcard.css";
const Castcard = (props) => {
  
  const [cast,setCast]=useState([{}]); 

  useEffect(()=>{
    fetch('/Cast/getCastByName/'+props.name)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    })
    .then((jsonRes) => {
      setCast(jsonRes);
    })
    .catch(e => {console.log(e);});
  },[]);

  var castRole =[];
  var castImg = [];
  if(cast[0] !== undefined){ 
    console.log("==="+cast[0]);
    console.log(cast[0].castName);
    castRole.push(cast[0].castRole);
    castImg.push(cast[0].castImageUrl);
  }
    
  return (
    <div className="cast__detail">
      <div className="cast__image">
       { <img src={process.env.PUBLIC_URL+'/Assets/Cast/'+castImg} alt="woman cast" /> }
      </div>
      <a href="castdetailpage" onClick={(e)=>{localStorage.setItem("castName",props.name);}}> <h5 className="name">{props.name}</h5></a>
      <a href="castdetailpage" onClick={(e)=>{localStorage.setItem("castName",props.name);}}><h5 className="role">{castRole}</h5></a>
    </div>
  );
};

export default Castcard;









// import React from "react";
// import Galgadot from "../Assets/cast/gal-gadot.jpg";
// import "../css/Castcard.css";
// const Castcard = () => {
  
//   return (
//     <div className="cast__detail">
//       <div className="cast__image">
//         <img src={Galgadot} alt="woman cast" />
//       </div>
//       <h5 className="name">Gal Gadot</h5>
//       <h5 className="role">as wonder Woman</h5>
//     </div>
//   );
// };

// export default Castcard;
