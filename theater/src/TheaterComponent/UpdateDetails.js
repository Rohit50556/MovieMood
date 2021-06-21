import React,{useState,useEffect} from 'react';
import {Form,Col,Button} from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
//import "../css/TimeTable.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var id=localStorage.getItem("theaterId")
   

const UpdateDetails = () =>{
   function alert()
       {

              toast.warn("Details Successfully Updated",{
             position: "bottom-left",
             autoClose: 2000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             })
    
    
       }

   var history=useHistory();
   if(localStorage.getItem('token')==null){
      history.push('/Login')
   }


   const [TheaterData,setData]=useState({
      theaterName:"",
      city:"",
      theaterEmail:"",
      theaterMobile:"",
      noOfScreen:"",
      theaterAddress:""
   })

   useEffect(()=>{
      axios.get("/Theater/getTheater/"+id).then(res=>{
         setData(res.data[0])
//         console.log(res.data[0])
      })   
   },[])


  // console.log(TheaterData.theaterAddress)

   
   function handleChange(event){
      
      const {name,value}=event.target;
     
      setData(prevInput=>{
          return {
              ...prevInput,
              [name]:value
          }
      })      
   }

  
function handleUpdate(){
   alert();
   localStorage.setItem("scr" ,TheaterData.noOfScreen)
   console.log(TheaterData)
   axios.post("/Theater/updateTheater/"+id,TheaterData)
}
   
 return(<>
 <div className="Admin">
 <div className="TheaterTimeTable"></div>
   <div className="insideForm">
   <h1 style={{marginLeft:'300px'}}>Update Theater Details</h1>
   <hr/>
    <Form style={{width:"600px",marginLeft:'50px'}} >
      <Form.Row>
         <Form.Group as={Col} >
            <Form.Label>Theater Name</Form.Label>
            <Form.Control type="text"  name="theaterName" value={TheaterData.theaterName} onChange={handleChange} placeholder="" required/>
         </Form.Group>
         <Form.Group as={Col}>
            <Form.Label >Total Screen</Form.Label>
            <Form.Control type="number"  name="noOfScreen" value={TheaterData.noOfScreen} onChange={handleChange} required/>
         </Form.Group>

      </Form.Row>


      <Form.Row>
      <Form.Group as={Col} >
            <Form.Label>Email Id</Form.Label>
            <Form.Control type="email"  name="theaterEmail" value={TheaterData.theaterEmail} onChange={handleChange} required/>
     </Form.Group>
         <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>      
            <Form.Control type="text"  name="theaterMobile" value={TheaterData.theaterMobile} onChange={handleChange} required/>
         </Form.Group>
            
         <Form.Group as={Col}>
               <Form.Label>City</Form.Label>
               <Form.Control type="text"  name="city" value={TheaterData.city} onChange={handleChange} required/>
            </Form.Group>
      </Form.Row>

   <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>Theater Address</Form.Label>
         <Form.Control type="text"  name="theaterAddress" value={TheaterData.theaterAddress} onChange={handleChange} required/>
      </Form.Group>
   </Form.Row>         
      <hr />
      <Button variant="primary" onClick={handleUpdate} style={{marginLeft:'230px'}}>
        Update
    </Button>
   </Form> 
    
   </div>
   </div>
   <ToastContainer style={{marginLeft:'10px'}}/>
 </>
 );
}

export default UpdateDetails;