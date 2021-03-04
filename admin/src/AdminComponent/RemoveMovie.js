import React,{useState,useEffect} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import { Form} from 'react-bootstrap';
import '../css/removemovie.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'
var movies=[]
var movies1=[]
var str=""
function addMovie(name,id){
       return {name,id}
     }
const RemoveMovie = () =>{

       movies=movies1;
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
            })


//      console.log(movielist)
      var i=1
       movielist.forEach(ele=>{
      movies.push(addMovie(ele.moviename,i))
//    console.log(ele.castName)
})
            
       console.log(movies)

       const [languageoptions]=useState(movies);

       function handleAdd(item,obj){
              str=obj.name
       }

       function handleRemove(item,obj){
              str=""
       }
       function handleClick(){
              console.log(str)
              if(str=="")
                     alert("Please Select Movie Name")
              else{
                     var link="http://localhost:3030/Movie/deleteMovieByName/"+str
                     console.log(link)
                    axios.get(link)
              }
//                     axios.post("http://localhostdeleteMovieByName")
              
       
       }
       
       

 return(<>
 <div className="remove">
 <div className="removeForm">
 <h1 style={{marginLeft:'30px'}}>Remove Movie</h1>
        <hr />
 <Form style={{marginTop:'30px',marginLeft:'50px'}}>
    <Form.Row>
        <Form.Group >
              <Multiselect options={languageoptions}  displayValue="name" onRemove={handleRemove} onSelect={handleAdd}  />
       </Form.Group>
        </Form.Row>
        
        <Button variant="outlined" onClick={handleClick} color="secondary" >
         Remove
         </Button>
       </Form>
</div>
 </div> 
 </>
 );
}


export default RemoveMovie;