import React from 'react';
import {Button,Form,Col} from "react-bootstrap";
import { useState } from "react";

const AddSnacks = () =>{
    const [input,setInput]=useState(
        {
            name: "",
            price : "",
            image: ""
           
        })

        function handleChange(event){
       
            const {name,value}=event.target;
        
            setInput(prevInput=>{
                return {
                    ...prevInput,
                    [name]:value
                }
            })
        }
        
    
 return(<>
 <div className="admin">
 <Form action="/AddSnacks" method="post" role="form" style={{marginTop:'200px',marginLeft:'100px'}} encType="multipart/form-data" >
    <Form.Row>
        <Form.Group as={Col}>
        <Form.Label>Snacks Name</Form.Label>
        <Form.Control type="text" onChange={handleChange} value={input.name} name="name" placeholder="Enter Snacks Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" onChange={handleChange} value={input.price} name="price" placeholder="EnterPrice" />
        </Form.Group>
        
    </Form.Row>
      
   
<Form.Row>
   
    <Form.Group  controlId="formGridAddress1">
         <Form.Label>Snacks Image</Form.Label>
         <input type="file" name="file" />
      </Form.Group>
      </Form.Row>
        <Button variant="primary" type="submit" style={{marginLeft:'10px'}}>
            Add
        </Button>
    </Form>
    </div>
 </>
 );
}


export default AddSnacks;