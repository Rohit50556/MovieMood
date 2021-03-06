import React , { useState}from 'react';
import "../css/SnackContainer.css"

import Snack1 from "../Assets/snack1.webp"
import SnackCard from "../UserComponent/SnackCard"
const SnackContainer = (props) => {
    
      const [snacks, setSnacks] = useState([
       {
           _id:1, 
           photo :Snack1, 
           name:"Cheesey burger", 
           price : 150,
           quant : 0,
       },
       {
           _id:2, 
           photo :Snack1, 
           name:" burger", 
           price :150,
           quant : 0,
       },
        {
           _id:3  , 
           photo :Snack1 , 
           name:"Paneer", 
           price :150,
           quant : 0,
       },
       {
           _id: 4, 
           photo :Snack1 , 
           name:"Daal", 
           price :150,
           quant : 0,
       },
       {
           _id:5, 
           photo :Snack1, 
           name:"Cheesey burger", 
           price :150,
           quant : 0,
       },
   ])

   const [count,setCount] = useState(0)

   const forceRender = () => {
       setCount(count+1)
   }

   let cartRender = []

   for(let i=0;i<snacks.length;i++) {
        if(snacks[i].quant > 0) {
            let temp = (
                <div className="snack__divArr">
                    <p style={{color:"black"}}>{snacks[i].name + "    " + snacks[i].quant+"    "+snacks[i].quant*snacks[i].price}</p>
                </div>
            )
            cartRender.push(temp)
        }
   }

    return (
        <div className="outer__div">
             <div className="inner__div1">
            {snacks.map((s, i)=>{
                return(
                    <SnackCard forceRender={forceRender} object={s} snacks={snacks} setSnacks={setSnacks} idx={i} />
                )
            })}
         
                </div>
          
             <div className="inner__div2">
                 <h3 className="count__seat">Toatl booked seats : </h3>
                 <h3  className="count__seat"> Seat Price : </h3>
                    <h1 style={{color:"black", textAlign:"center" , marginTop:"10%", textDecoration:"underline"}}>Snack Details</h1>
                    {cartRender}
             </div>
        </div>
    );
};

export default SnackContainer;