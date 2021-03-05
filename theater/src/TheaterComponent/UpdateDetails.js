// import * as React from 'react';

// import {Multiselect} from 'multiselect-react-dropdown';

// const sports = [
//     { text: 'Basketball', id: 1 },
//     { text: 'Football', id: 2 },
//     { text: 'Tennis', id: 3 },
//     { text: 'Volleyball', id: 4 }
// ];

// class UpdateDetails extends React.Component {
//     state = {
//         // Since the items references of the initial value are not from the 'sports' collection,
//         // 'dataItemKey' have to be set.
//         value: [
//             { text: 'Football', id: 2 },
//             { text: 'Tennis', id: 3 }
//         ]
//     };

//     handleChange = (event) => {
//         this.setState({
//             value: event.target.value
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Multiselect
//                     options={sports}
//                     onChange={this.handleChange}
//                     selectedValues={this.state.value}
//                     displayValue="text"
//                     dataItemKey="id"
//                 />
//             </div>
//         );
//     }
// }

// export default UpdateDetails;







import React,{useState,useEffect} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import {Form,Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
//import axios from 'axios';
import "../css/TimeTable.css"

var dates=[]
var times=[]
var movies=[]
var arr=[]
var str=""
    
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

const UpdateDetails = () =>{
   
   
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
      
     
     while(dates.length > 0) {
      dates.pop();
      }
     
      var currentDate=new Date();
      var day = currentDate.getDate()
      var month = currentDate.getMonth() + 1
      var year = currentDate.getFullYear()
      dates.push(addDate(day+"/"+month+"/"+year,1))
      dates.push(addDate((day+1)+"/"+month+"/"+year,2))
      dates.push(addDate((day+2)+"/"+month+"/"+year,2))
      
      const [datelist]=useState(dates);
     


      while(times.length > 0) {
         times.pop();
         }
        
      times.push(addTime("8am-11am",1))
      times.push(addTime("12pm-3pm",2))
      times.push(addTime("4pm-7pm",3))
      times.push(addTime("9pm-12am",4))
      
         
      const [timelist]=useState(times);
     
      

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
         <Form.Group as={Col}>
            <Form.Label >Ticket Price</Form.Label>
            <Form.Control type="number"  name="price" value={data.price} onChange={handleChange} placeholder="Enter Price"/>
         </Form.Group>

      </Form.Row>


      <Form.Row>
      <Form.Group as={Col} >
            <Form.Label>Show Date</Form.Label>
            <Multiselect  options={datelist}  displayValue="date" placeholder="Date" onRemove={handleRemove} onSelect={handleAdd}  />      
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
   <Form.Group as={Col}>
   <Multiselect  options={timelist}  displayValue="time" placeholder="time" onRemove={handleRemove} onSelect={handleAdd}  />      
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

export default UpdateDetails;