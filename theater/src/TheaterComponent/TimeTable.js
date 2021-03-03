import React from 'react';
import {Button,Form,Col} from 'react-bootstrap';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const TimeTable = () =>{
 return(<>
 <div className="admin">
   <Form style={{marginTop:'200px'}}>
      <Form.Row>
         <Form.Group as={Col}>
            <Form.Label>Select Movie</Form.Label>
            <Form.Control as="Select" defaultValue="Movie">
               <option>Movie 1</option>
               <option>Movie 2</option>
               <option>Movie 3</option>
            </Form.Control>
         </Form.Group>
         
         <Form.Group as={Col}>
            <Form.Label>Show Timing</Form.Label>
            <Form.Control type="Time" placeholder="Enter Show Time"/>
         </Form.Group>
      </Form.Row>


      <Form.Row>
         <Form.Group as={Col}>
            <Form.Label >Gold Price</Form.Label>
            <Form.Control type="number" placeholder="Price"/>
         </Form.Group>
         
         <Form.Group as={Col}>
            <Form.Label >Platinum Price</Form.Label>
            <Form.Control type="number" placeholder="Price"/>
         </Form.Group>
         
         <Form.Group as={Col}>
            <Form.Label >Primium Price</Form.Label>
            <Form.Control type="number" placeholder="Price"/>
         </Form.Group>
      </Form.Row>

      <Form.Row>
         <Form.Group as={Col}>
         <FormControlLabel
          value="start"
          control={<Checkbox color="Secondary" />}
          label="1"
          labelPlacement="start"
        />
         </Form.Group>
         
      
         <Form.Group as={Col}>
         <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="2"
          labelPlacement="start"
        />
         </Form.Group>
         
         <Form.Group as={Col}>
         <FormControlLabel
          value="start"
          control={<Checkbox color="Secondary" />}
          label="3"
          labelPlacement="start"
        />
         </Form.Group>
         
         <Form.Group as={Col}>
         <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="4"
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
    
 </>
 );
}

export default TimeTable;