import React, { useEffect, useState } from "react";
import "../css/TheaterWithShowTime.css";
import { Link } from "react-router-dom";
//import axios from 'axios'; 

var finaltime=[]
const TheaterWithShowTime = () => {
  var date=localStorage.getItem('date')
  var city=localStorage.getItem('finalcity')
  var name=localStorage.getItem('movieName')
  var [info,setData]=useState([{}])

//  alert(date)
  useEffect(()=>{
    fetch("/ShowTiming/getShow/"+city+"/"+name+"/"+date).then(res=>{
      if(res.ok){
        return res.json()
      }
    else
      console.log("err")
    }).then(jsonres=>setData(jsonres))      
  },[])



  while(finaltime.length>0)
    finaltime.pop();

  var ele=[]

  while(ele.length>0)
    ele.pop()
  var i=0;

function AddLine(item,index){
  
  var temp=[]
  if(info[index].Timining!=undefined)
  {
    ele=info[index].Timining
    for(var i=0;i<ele.length;i++){
      if(ele[i]===item)
      {
          while(temp.length>0)temp.pop()
           
          if(ele[i]===1){
           // alert(1)
            temp.push(
             <Link to="seatBookContainer" onClick={()=>(localStorage.setItem("show","1"),localStorage.setItem("name",city),localStorage.setItem("id",info[index]._id),localStorage.setItem("theaterName",info[index].theaterName),localStorage.setItem("theaterAddress",info[index].theaterAddress))}>
             {" "}
             <li>8am-11pm</li>
             </Link> 
           )
           return temp;
          
          }
          else if(ele[i]===2)
          {
          //  alert(2)
            temp.push(
             <Link to="seatBookContainer"  onClick={()=>(localStorage.setItem("show","2"),localStorage.setItem("name",city),localStorage.setItem("id",info[index]._id),localStorage.setItem("theaterName",info[index].theaterName),localStorage.setItem("theaterAddress",info[index].theaterAddress))}>
             {" "}
             <li>12pm-3am</li>
             </Link> 
           )
           return temp;
          
          }  
          else if(ele[i]===3)
          {
          //  alert(3)
            temp.push(
             <Link to="seatBookContainer" onClick={()=>(localStorage.setItem("show","3"),localStorage.setItem("name",city),localStorage.setItem("id",info[index]._id),localStorage.setItem("theaterName",info[index].theaterName),localStorage.setItem("theaterAddress",info[index].theaterAddress))}>
             {" "}
             <li>4pm-7pm</li>
             </Link> 
           )
           return temp;
          
          }
          else if(ele[i]===4)
          {
            //alert(4)
            temp.push(
             <Link to="seatBookContainer" onClick={()=>(localStorage.setItem("show","4"),localStorage.setItem("name",city),localStorage.setItem("id",info[index]._id),localStorage.setItem("theaterName",info[index].theaterName),localStorage.setItem("theaterAddress",info[index].theaterAddress))}>
             {" "}
             <li>9pm-12am</li>
             </Link> 
           )
          return temp;
          }
//          alert(temp)
      }
    }

  }
}


  var movies=[]
  if(info!=undefined){
  for(let i=0;i<info.length;i++)
  {
    movies.push(
        <div>
        <hr />
        <div className="cinema__show">
          <div>
            <h5>{info[i].theaterName}</h5>
          </div>
          <div className="ul__shows" style={{marginLeft:'100px'}}>
            <ul>
              {AddLine(1,i)}
              {AddLine(2,i)}
              {AddLine(3,i)}
              {AddLine(4,i)}
            </ul>
          </div>
        </div>

      </div>
      
    )
  }}
  return (
   <>{movies}</>
   );
  
}


export default TheaterWithShowTime;
















