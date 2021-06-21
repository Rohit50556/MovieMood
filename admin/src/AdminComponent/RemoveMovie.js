import React,{useState,useEffect} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import { Form,Col} from 'react-bootstrap';
import '../css/removemovie.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var movies=[]
var movies1=[]
var str=""
   

function addMovie(name,id){
       return {name,id}
     }
const RemoveMovie = () =>{
       function alert()
       {

              toast.error("Movie Successfully Removed",{
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

              toast.warn("Please Select Movie Name",{
             position: "top-right",
             autoClose: 3000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             })
    
       }
          
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
            },[])

            while(movies.length>0)
              movies.pop()

//      console.log(movielist)
      var i=1
       movielist.forEach(ele=>{
      movies.push(addMovie(ele.moviename,i))
//    console.log(ele.castName)
})
            
//       console.log(movies)

       const [languageoptions]=useState(movies);
  //     console.log("="+languageoptions[0].name)

       function handleAdd(item,obj){
              str=obj.name
       }

       function handleRemove(item,obj){
              str=""
       }
       function handleClick(){
              // console.log(str)
              if(str==="")
                     alert1()
              else{
                     var link="http://localhost:3030/Movie/deleteMovieByName/"+str
                    // console.log(link)
                    axios.get(link)
                    alert();
                   // window.location.reload();
              }
//                     axios.post("http://localhostdeleteMovieByName")
              
       
       }
       
       

 return(<>
 <div className="remove">
 <div className="removeForm" >
 <h1 style={{marginLeft:'30px'}}>Remove Movie</h1>
        <hr />
<Form style={{marginTop:'5px',marginLeft:'30px',marginRight:'50px'}}>
       <Form.Row>
              <Form.Group as={Col} >
                     <Multiselect  options={languageoptions}  displayValue="name" style={{chips:{background:'red'}}}  onRemove={handleRemove} onSelect={handleAdd}  />
              </Form.Group>
       </Form.Row>
        
        <Button variant="outlined" onClick={handleClick} color="secondary" >
         Remove
         </Button>
       </Form>
</div>
 </div>
 <ToastContainer style={{marginTop:'30px'}}/> 
 </>
 );
}


export default RemoveMovie;
