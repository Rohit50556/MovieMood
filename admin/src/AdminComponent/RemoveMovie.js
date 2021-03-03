import React from 'react';
import { Form} from 'react-bootstrap';

import Button from '@material-ui/core/Button';

const RemoveMovie = () =>{
 return(<>
 <div className="remove">
 <Form style={{marginTop:'100px',marginLeft:'10px'}}>
    <Form.Row>
        <Form.Group >
        <Form.Control type="text" placeholder="Enter Movie Name" />
        </Form.Group>
        </Form.Row>
        
        <Button variant="outlined" color="secondary" type="submit">
         Remove
         </Button>
</Form>
 </div> 
 </>
 );
}


export default RemoveMovie;