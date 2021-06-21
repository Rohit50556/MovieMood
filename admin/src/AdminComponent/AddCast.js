import axios from 'axios';
import React,{useState} from 'react';
import {Button,Form} from "react-bootstrap";
import '../css/castForm.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


var file=""  
const AddCast=() =>{
    function alert()
    {
    toast.success("Cast Successfully Added",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })


}
function alert1()
    {
    toast.warn("Please Entre All Required Data",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })


}
    const [data,setData]=useState({
        name:"",
        role:"",
        info:"",
        date:""
    })

    function handleChange(event){
       
        const {name,value}=event.target;
    
        setData(prevInput=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleFile(e){
        file=e.target.files[0]
        console.log(file)
        console.log(data)
    }

    function handleClick(){
        var formdata=new FormData()
        if(data.name==="" || data.role==="" || data.info==="")
        {
            alert1();
        }
        else{
            alert();
        

        formdata.append('name',data.name);
        formdata.append('info',data.info);
        formdata.append('role',data.role);
        formdata.append('date',data.date);
        formdata.append('file',file);
        //console.log(data.date)
     //   alert();
        axios.post("http://localhost:3030/Cast/addCast",formdata,{})
    }
}


    return(<>
        <ToastContainer style={{marginTop:'30px'}}/>
        <div className="cast"> 
        <div className="castForm">
        <h1 style={{marginLeft:'400px'}}>AddCast</h1>
        <hr />
        <Form style={{marginLeft:'100px'}}>
            <Form.Row>
               <Form.Group>
                    <Form.Label>Cast Name</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="name" value={data.name} placeholder="Enter Cast Name"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group>
                    <Form.Label>Role In Cineme</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="role" value={data.role} placeholder="Enter Cast Name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" formate="DD-MM-YYYY" onChange={handleChange} name="date"  value={data.date} />
                </Form.Group>
            </Form.Row>
          
            <Form.Row>
               <Form.Group>
                    <Form.Label>Cast Description</Form.Label>
                    <textarea class="form-control"  onChange={handleChange} value={data.info} name="info" placeholder="Cast Description" style={{width:'500px'}}rows="3"></textarea>
                </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group>
                    <Form.Label>Cast Image</Form.Label>
                    <Form.Control onChange={handleFile} type="file" name="file" />
                </Form.Group>
            </Form.Row>
            <Button style={{marginLeft:'300px',marginTop:"-100px "}}onClick={handleClick}>Upload</Button>
            
        </Form>
        </div>
        </div>
    </>);

}

export default AddCast;