import React,{useState,useEffect} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import {Form,Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
//import axios from 'axios';
import "../css/TimeTable.css"

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

var movies=[]
var arr=[]
var str=""
    
function addMovie(name,id){
   return {name,id}
 }
 function add(i,id){
   return {i,id}
 }

const TimeTable = () =>{
   
   
   const [data,setData]=useState({
      moviename:"",
      date:"",
      price:"",
      totals:""
   })

   const [movielist,setMovie]=useState([]);


   useEffect(()=>{
          fetch('/Movie/getAllMovie').then(res=>{
            if(res.ok){
               //movies=[]

              return res.json()
          }
          else{
            console.log("err")
          }
          }).then(jsonRes => setMovie(jsonRes))
        },[])
        console.log(movielist)


        function handleChange(event){
       
         const {name,value}=event.target;
     
         setData(prevInput=>{
             return {
                 ...prevInput,
                 [name]:value
             }
         })
     }
        var i=1
      
      while(movies.length > 0) {
         movies.pop();
     }
      movielist.forEach(ele=>{
      movies.push(addMovie(ele.moviename,i))
      })
      console.log("=="+movies)
      const [movielists]=useState(movies);

      function handleAdd(item,obj){
         str=obj.name
      }

      function handleRemove(item,obj){
         str=""
      }
      while(arr.length > 0) {
         arr.pop();
     }
      for(var k=1;k<=data.totals;k++)
         arr.push(add(k,k));

      const [list]=useState(arr);

      console.log(str)
//       function handleClick(){
//          console.log(str)
//          if(str==="")
//                 alert("Please Select Movie Name")
//          else{
//        //         var link="http://localhost:3030/Movie/deleteMovieByName/"+str
//      //           console.log(link)
//    //            axios.get(link)
//          }
// //                     axios.post("http://localhostdeleteMovieByName")
         
  
//   }

   
 return(<>
 <div className="Admin">
 <div className="TheaterTimeTable"></div>
   <div className="insideForm">
   <h1 style={{marginLeft:'480px'}}>Add Show</h1>
   <hr/>
    <Form style={{width:"600px",marginLeft:'50px'}} >
      <Form.Row>
         <Form.Group as={Col} >
            <Form.Label>Select Movie</Form.Label>
            <Multiselect options={movielists} displayValue="name" onRemove={handleRemove} onSelect={handleAdd}  />
         </Form.Group>
         <Form.Group >
            <Form.Label>Show Date</Form.Label>
            <Form.Control type="date" name="date" value={data.date} onChange={handleChange} placeholder="Enter Show Time"/>
         </Form.Group>
      </Form.Row>


      <Form.Row>
         <Form.Group as={Col}>
            <Form.Label >Ticket Price</Form.Label>
            <Form.Control type="number"  name="price" value={data.price} onChange={handleChange} placeholder="Enter Price"/>
         </Form.Group>
      </Form.Row>
      
      <Form.Row>
      <Form.Group as={Col}>
         <Form.Label>Enter Total Screen</Form.Label>      
         <Form.Control type="number" name="totals" value={data.totals} onChange={handleChange} /> 
      </Form.Group>
            <Form.Group style={{marginTop:'-10px'}} as={Col}>
            <Form.Label>Screen Number</Form.Label>      
              <Multiselect  options={list}  displayValue="i" onRemove={handleRemove} onSelect={handleAdd}  />
            </Form.Group>
      </Form.Row>

<Form.Row>
   <Form.Group >
   <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="8Am - 11Am"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="12pm - 3pm"
          labelPlacement="start"
        /><FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="4pm - 7pm"
          labelPlacement="start"
        /><FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="9pm- 12am"
          labelPlacement="start"
        />
      </Form.Group>

</Form.Row>         
      <hr />
      <Button variant="primary" type="submit" style={{marginLeft:'230px'}}>
        Register
    </Button>
   </Form> 
    
   </div>
   </div>
 </>
 );
}

export default TimeTable;