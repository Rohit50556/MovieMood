import React , { useState}from 'react';
import "../css/SnackContainer.css"
import {Link} from 'react-router-dom';
import Snack1 from "../Assets/snack1.webp"
import SnackCard from "../UserComponent/SnackCard"



const SnackContainer = (props) => {
   
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

        const images = importAll(require.context('../Assets/Snacks', false, /\.(png|jpe?g|svg)$/));
        console.log(images)
        var priceArray  = [60,100,80,120,300,250,150,120,200,160,100,120,50,130,220,100,210,230] 
        var picNameArray = ["Oreo.jpg","Popcorn.jpg","Pepsi.jpg","Snickers.jpg","Barbecue.jpg","Breakfast.jpg","Brown Cookie.jpg","Chessey Burger.jpg","Cherry Cake.jpg","Choclate.jpg","Coffe.jpg",
        "CreamCookie.jpg","Kurkure.jpeg","Tost.jpg","TostFrenhFries.jpg"
        ,"Maggie.jpg","Margerita.jpg","OlivePizza.jpg"]
        var nameArray = ["Oreo","Popcorn","Pepsi","Snickers","Barbecue","Breakfast","Brown Cookie","Chessey Burger","Cherry Cake","Choclate","Coffe","CreamCookie","Kurkure","Chessey Tost","Tost-FrenhFries"
     ,"Spicy Maggie","Margerita","Olive Pizza"]
        var arrayobjsnack = []
         for(var k=0;k<18;k++)
        {
            arrayobjsnack.push( {
            _id: k+1, 
            photo :images[picNameArray[k]].default, 
            name:nameArray[k], 
            price : priceArray[k],
            quant : 0,
        });
    }
    const [snacks, setSnacks] = useState(
        arrayobjsnack 
 )
//     const [snacks, setSnacks] = useState([
//      {
//          _id:1, 
//          photo :Snack1, 
//          name:"Cheesey burger", 
//          price : 150,
//          quant : 0,
//      },
//      {
//          _id:2, 
//          photo :Snack1, 
//          name:"burger", 
//          price :150,
//          quant : 0,
//      },
//       {
//          _id:3  , 
//          photo :Snack1 , 
//          name:"Paneer", 
//          price :150,
//          quant : 0,
//      },
//      {
//          _id: 4, 
//          photo :Snack1 , 
//          name:"Daal", 
//          price :150,
//          quant : 0,
//      },
//      {
//          _id:5, 
//          photo :Snack1, 
//          name:"Cheesey burger", 
//          price :150,
//          quant : 0,
//      },
//  ])

 const [count,setCount] = useState(0)

 const forceRender = () => {
     setCount(count+1)
 }

 let cartRender = []
 let dummy=[]

 for(let i=0;i<snacks.length;i++) {
      if(snacks[i].quant > 0) {
          let temp = (
             <div>
                  <div className="snack__divArr">
                  <img src={snacks[i].photo} alt=""></img>
                  <p>{snacks[i].name}</p>
                  <p>{snacks[i].quant}</p>
                  <p>{snacks[i].quant*snacks[i].price}</p>
         
              </div>
              <hr style={{width:"90%", marginLeft:"auto", marginRight:"auto" , marginBottom:"5px", color:"black"}}/>
             </div>
          
          )
        let temp2={
            name:snacks[i].name, 
            price :snacks[i].price,
            quant : snacks[i].quant
        }
          dummy.push(temp2)
          cartRender.push(temp)
      }
 }
// console.log("length "+cartRender.length )
// alert(JSON.stringify(props.location.seatArray.selectedSeats))
// localStorage.setItem("seats",props.location.seatArray.selectedSeats)  
// localStorage.setItem("snacks",cartRender)  
var tprice=props.location.seatPrice.totalPrice
var seatArray=[]
seatArray=props.location.seatArray.selectedSeats;
var snackArray=[]


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
               <h3 className="count__seat">Toatl booked seats : {props.location.seatArray.selectedSeats.length} </h3>
               
               <h3 className="count__seat">Selected seats is given Below</h3>
                {props.location.seatArray.selectedSeats.map((el) => (
          <h1 className="seat__showRealtime">{el.seatName}</h1>
        ))}
                  <h3  className="count__seat">Total Seat Price : {props.location.seatPrice.totalPrice} </h3>
                  <h1 style={{color:"black", textAlign:"center" , marginTop:"10%", textDecoration:"underline"}}>Snack Details</h1>
                  {cartRender.length === 0?(<h3 className="count__seat">Please select a snack or skip it.</h3>): (cartRender)}
                  {cartRender.length === 0?
                  ( <Link to={{pathname:"bookingpage",
                   
                    seatPrice:{tprice},
                    seatArray:{seatArray},
                    snacksArray:[]
                  }}><button className="button__Book">Skip</button></Link>): 
                  (<Link to={{pathname:"bookingpage",
                   
                   seatPrice:{tprice},
                   seatArray:{seatArray},
                   snacksArray:{dummy}
                 }} ><button className="button__Book">Countinue</button></Link>)}
                  <Link to="seatbookcontainer"><button  className="button__Book">Back</button></Link>
           </div>
      </div>
  );
};

export default SnackContainer;


// const SnackContainer = (props) => {
    
//       const [snacks, setSnacks] = useState([
//        {
//            _id:1, 
//            photo :Snack1, 
//            name:"Cheesey burger", 
//            price : 150,
//            quant : 0,
//        },
//        {
//            _id:2, 
//            photo :Snack1, 
//            name:" burger", 
//            price :150,
//            quant : 0,
//        },
//         {
//            _id:3  , 
//            photo :Snack1 , 
//            name:"Paneer", 
//            price :150,
//            quant : 0,
//        },
//        {
//            _id: 4, 
//            photo :Snack1 , 
//            name:"Daal", 
//            price :150,
//            quant : 0,
//        },
//        {
//            _id:5, 
//            photo :Snack1, 
//            name:"Cheesey burger", 
//            price :150,
//            quant : 0,
//        },
//    ])

//    const [count,setCount] = useState(0)

//    const forceRender = () => {
//        setCount(count+1)
//    }

//    let cartRender = []

//    for(let i=0;i<snacks.length;i++) {
//         if(snacks[i].quant > 0) {
//             let temp = (
//                 <div className="snack__divArr">
//                     <p style={{color:"black"}}>{snacks[i].name + "    " + snacks[i].quant+"    "+snacks[i].quant*snacks[i].price}</p>
//                 </div>
//             )
//             cartRender.push(temp)
//         }
//    }

//     return (
//         <div className="outer__div">
//              <div className="inner__div1">
//             {snacks.map((s, i)=>{
//                 return(
//                     <SnackCard forceRender={forceRender} object={s} snacks={snacks} setSnacks={setSnacks} idx={i} />
//                 )
//             })}
         
//                 </div>
          
//              <div className="inner__div2">
//                  <h3 className="count__seat">Toatl booked seats : </h3>
//                  <h3  className="count__seat"> Seat Price : </h3>
//                     <h1 style={{color:"black", textAlign:"center" , marginTop:"10%", textDecoration:"underline"}}>Snack Details</h1>
//                     {cartRender}
//              </div>
//         </div>
//     );
// };

// export default SnackContainer;