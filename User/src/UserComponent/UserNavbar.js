import React from 'react';
import {Navbar,Nav,Form,Button,FormControl,SplitButton,Dropdown} from "react-bootstrap";


const Menu = () =>{
 return(
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Movie Mood</Navbar.Brand>
    <Nav style={{marginLeft:'50px'}} className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/History">History</Nav.Link>
      <Nav.Link href="/Adjust">Adjust</Nav.Link>
      <Nav.Link href="/Swap">Swap</Nav.Link>
      <Nav.Link href="/Snacks">Snacks</Nav.Link>
       
      <div style={{marginLeft:"200px"}}></div>
      <SplitButton
        key={'Success'}
        id={`dropdown-split-variants-${'Success'}`}
        variant={'Success'.toLowerCase()}
        title="City"
       >
       
       <Dropdown.Item eventKey="1">x</Dropdown.Item>
        <Dropdown.Item eventKey="2">y</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          z
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">other</Dropdown.Item>
      </SplitButton>
    
    <div style={{marginRight:"20px"}}></div>
        
    <Form inline>
      <FormControl type="text" placeholder="Search Movie" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>

    <div style={{marginRight:"150px"}}></div>
   
    <Nav.Link href="/Login">Login</Nav.Link>
    <Nav.Link href="/Register">Register</Nav.Link>
     
    </Nav>
   
  </Navbar>
     </>
    );
}    


export default Menu;        