import axios from 'axios';
import React,{useState} from 'react';
import {Button,Form} from "react-bootstrap";
import '../css/castForm.css'

var file=""  
const AddCast=() =>{
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

        formdata.append('name',data.name);
        formdata.append('info',data.info);
        formdata.append('role',data.role);
        formdata.append('date',data.date);
        formdata.append('file',file);
        //console.log(data.date)
        axios.post("http://localhost:3030/Cast/addCast",formdata,{})
    }


    return(
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
    );
}

export default AddCast;