import React,{useState,useEffect} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import {Form,Col,Button} from 'react-bootstrap';
import axios from 'axios';
import "../css/TimeTable.css"
import { Link,useHistory } from "react-router-dom";
//import { useHistory } from "react-router-dom";


var times1=[]
var buff=[]

var dates=[]
var times=[]
var movies=[]
var arr=[]

var sno=0
var scr=""
var movie=""
var date=""
var ptr1=false
var ptr2=false

    
function addMovie(name,id){
   return {name,id}
 }
   
function addTime(time,id){
   return {time,id}
 }
 
function addDate(date,id){
   return {date,id}
 }
 function add(i,id){
   return {i,id}
 }

const TimeTable = () =>{
   var history=useHistory();
   if(localStorage.getItem('token')==null){
      history.push('/Login')
   }

   sno=localStorage.getItem("scr")
   const [data,setData]=useState({
      price:"",
   })
   const [movielist,setMovie]=useState([]);


   useEffect(()=>{
          fetch('/Movie/getAllMovie').then(res=>{
            if(res.ok){
              return res.json()
          }
          else{
            console.log("err")
          }
          }).then(jsonRes => setMovie(jsonRes))
        },[])
   //     console.log(movielist)


        function handleChange(event){
       
         const {name,value}=event.target;
     
         setData(prevInput=>{
             return {
                 ...prevInput,
                 [name]:value
             }
         })
     }
      
     
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
       
      const [timelist]=useState(times);   

      var i=1
      
      while(movies.length > 0) {
         movies.pop();
     }

      movielist.forEach(ele=>{
      movies.push(addMovie(ele.moviename,i))
      })
     
      const [movielists]=useState(movies);



      while(arr.length > 0) {
         arr.pop();
     }

      for(var k=1;k<=sno;k++)
         arr.push(add(k,k));

      const [list]=useState(arr);

      function handleDateAdd(item,name){
            date=name.date
            ptr1=true
            if(ptr1 && ptr2)
            {
  //             console.log("hello")
            var info={
               scr:scr,
               date:date
            }
            console.log(info)

            axios.post('/ShowTiming/getShow',info).then((res=>{
               console.log("hell====="+res.data.length)
               if(res.data.length===0)
               {
                  while(times.length > 0) {
                     times.pop();
                  }

                     times.push(addTime("8am-11am",1))
                     times.push(addTime("12pm-3pm",2))
                     times.push(addTime("4pm-7pm",3))
                     times.push(addTime("9pm-12am",4))
               }
               else{
                  while(buff.length>0)
                  {
                     buff.pop()
                  }
          for(let i=0;i<res.data.length;i++)
         {   
               res.data[i].Timining.forEach(ele=>{
                  buff.push(ele)
               })
               
         }
         
               console.log("buff="+buff)
                  while(times.length > 0) {
                     times.pop();
                  }
                  
                  for(var j=1;j<=4;j++)
                  {
                     if(j===(buff[j-1]))
                     {
  //                      console.log("yes")
                     }
                     else{
                        if(j===1){times.push(addTime("8am-11am",1))}
                        else if(j===2){times.push(addTime("12pm-3pm",2))}
                        else if(j===3){times.push(addTime("4pm-7pm",3))}
                        else if(j===4){times.push(addTime("9pm-12am",4))}
                     }
                  }
              
               }
               
            }))
         }
      }
      function handleDateRemove(item,name){
         date=""
         ptr1=false
         
         //    var index=dates1.indexOf(name.date);
      //    dates1[index]=""
       }
      

      function handleMovieAdd(item,name){
       //  movies1.push(name.name)  
            movie=name.name
      }
      function handleMovieRemove(item,name){
         // var index=movies1.indexOf(name.name);
         // movies1[index]=""
         movie=""
      }

      function handletimeAdd(item,name){
         times1.push(name.id)   
      }
      function handletimeRemove(item,name){
         var index=times1.indexOf(name.id);
         times1[index]=""
      }

      function handleScrAdd(item,name){
        ptr2=true
         // screens  .push(name.id)  
         scr=name.id
         if(ptr1 && ptr2)
         {
//             console.log("hello")
            var info={
               scr:scr,
               date:date
            }
//            console.log(info)

         axios.post('/ShowTiming/getShow',info).then((res=>{
            console.log("hello="+res.data.length)
            if(res.data.length===0)
            {
               while(times.length > 0) {
                  times.pop();
               }

                  times.push(addTime("8am-11am",1))
                  times.push(addTime("12pm-3pm",2))
                  times.push(addTime("4pm-7pm",3))
                  times.push(addTime("9pm-12am",4))
            }
            else{
               while(buff.length>0)
               {
                  buff.pop()
               }
       for(let i=0;i<res.data.length;i++)
      {   
            res.data[i].Timining.forEach(ele=>{
               buff.push(ele)
            })
            
      }
      
            console.log("buff="+buff)
               while(times.length > 0) {
                  times.pop();
               }
               
               for(var j=1;j<=4;j++)
               {
                  if(j===(buff[j-1]))
                  {
//                      console.log("yes")
                  }
                  else{
                     if(j===1){times.push(addTime("8am-11am",1))}
                     else if(j===2){times.push(addTime("12pm-3pm",2))}
                     else if(j===3){times.push(addTime("4pm-7pm",3))}
                     else if(j===4){times.push(addTime("9pm-12am",4))}
                  }
               }
           
            }
            
         }))
         }  
      }
      
      function handleScrRemove(item,name){
        ptr2=false
         scr=""
      }
     console.log(ptr1+"="+ptr2)
      function handleClick(){
         if(movie===""){alert("please Enter Movie Name")}
         else{
         var temp=[]
         for(let i of dates)
           i && temp.push(i);
         dates=temp;
         
         temp=[]  
         for(let i of times)
            i && temp.push(i);
         times=temp;
   
         var dataInfo={
            mname:movie,
            screen:scr,
            price:data.price,
            times:times1,
            dates:date,
            name:localStorage.getItem('theaterName'),
            city:localStorage.getItem('city'),
            address:localStorage.getItem('address')
         }
//         console.log(date)
       axios.post('/ShowTiming/addShowTiming',dataInfo,{})
      // window.location.reload()
  }}
     
 return(<>
 <div className="Admin">
 <div className="TheaterTimeTable"></div>
   <div className="insideForm">
   <h1 style={{marginLeft:'480px'}}>Add Show</h1>
   <hr/>
    <Form style={{width:"650px",marginLeft:'50px'}} >
      <Form.Row>
      
      <Form.Group  >
            <Form.Label>Screen Number</Form.Label>      
              <Multiselect  options={list}  displayValue="i" onRemove={handleScrRemove} onSelect={handleScrAdd}  />
            </Form.Group>
         
      <Form.Group as={Col} >
            <Form.Label>Show Date</Form.Label>
            <Multiselect  options={datelist}  displayValue="date" placeholder="Date" onRemove={handleDateRemove} onSelect={handleDateAdd}  />      
     </Form.Group>
       
      </Form.Row>


      <Form.Row>
      <Form.Group >
            <Form.Label >Ticket Price</Form.Label>
            <Form.Control type="number"  name="price" value={data.price} onChange={handleChange} placeholder="Enter Price"/>
         </Form.Group>
         <Form.Group  as={Col} >

      <Form.Label >Select Movie</Form.Label>
      <Multiselect options={movielists} displayValue="name" onRemove={handleMovieRemove} onSelect={handleMovieAdd}  />
      </Form.Group>

      </Form.Row>

<Form.Row>
   <Form.Group as={Col}>
   <Multiselect  options={timelist}  displayValue="time" placeholder="time" onRemove={handletimeRemove} onSelect={handletimeAdd}  />      
   </Form.Group>
</Form.Row>   
   <Link to="/">
      <Button variant="primary" onClick={handleClick} style={{marginLeft:'260px'}}>
        Add 
    </Button>
    </Link>
   </Form> 
    
   </div>
   </div>
 </>
 );
}

export default TimeTable;