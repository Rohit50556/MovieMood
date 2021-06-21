const express = require("express");
const router = express.Router();

const MovieController = require("../controllers/MovieController");
const AdjustController = require("../controllers/AdjustController");
const CastController = require("../controllers/CastController");
const CustomerController = require("../controllers/CustomerController");
const PaymentController = require("../controllers/PaymentController");
const QueryController = require("../controllers/QueryController");
const SeatController = require("../controllers/SeatController");
const ShowTimingController = require("../controllers/Show_TimingController");
const SnacksMenuController = require("../controllers/Snacks_MenuController");
const SnackOrderController = require("../controllers/SnacksOrderController");
const SwapSeatRequestController = require("../controllers/SwapSeatRequestController");
const TheaterController = require("../controllers/TheaterController");
const BookingController = require("../controllers/BookingController");
const auth = require("../middleware/auth");

const nodemailer = require('nodemailer');

//Answer Of Query
function sendMail(data){
  
  //step1
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
          user:'bookmytickets233361@gmail.com',
          pass:'book@my@tickets'
        }
     })
    
     //setp2
     let mailOptions={
       from:'bookmytickets233361@gmail.com',
       to:data.messageto,
       subject:"MovieMood",
       html:"<p>Hello,</p><p>Replay Of Your Query:</p><p>Your Query: "+data.query+"</p><p style='padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;''>Answer:=&gt; "+data.message+"</p><p>Best wishes,<br />Movie Mood Team</p> "
     }

     //step3
     transporter.sendMail(mailOptions,function(err,data){
       if(err){
         console.log(err)
       }
       else{
         console.log("Success")   
       }
     })
}

//Booking Mail
function sendBookingMail(data){
  //step1
  let transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'bookmytickets233361@gmail.com',
        pass:'book@my@tickets'
      }
   })
   //setp2
   let mailOptions={
     from:'bookmytickets233361@gmail.com',
     to:data.messageto,
     subject:"MovieMood",
     html:"<section style='width: 90%; margin: 100px auto;'><h1 style='font-weight: 900; border-left: 10px solid #fec500; padding-left: 10px; margin-bottom: 30px;'>E Ticket</h1><div style='overflow: hidden;'><article style='display: table-row; width: 49%; background-color: #fff; color: #989898; margin-bottom: 10px; border-radius: 4px; position: relative; float: left;'><h2><span style='color: #000000;'><strong>Total Price:</strong>"+data.price+"</span></h2><section style='display: table-cell; width: 25%; position: relative; text-align: center; border-right: 2px dashed #dadde6;'><strong><span style='color: #000000;'><time><time>"+data.date+"</time></time></span></strong><h4><span style='color: #000000;'>"+data.startTime+"</span></h4></section><section style='display: table-cell; width: 90%; font-size: 85%; padding-top: 10px; padding-right: 10px; padding-bottom: 30px;'><h6 style='{{tectcolor: 'red',display:;'>&nbsp; &nbsp; &nbsp; &nbsp;<span style='font-size: 14pt;'> <span style='font-size: 10pt;'>Movie Name:-</span></span><span style='font-size: 10pt;'> <span style='text-decoration: underline;'>"+data.movieName+"</span></span></h6><h6 style='{{tectcolor: 'red',display:;'>&nbsp; &nbsp; &nbsp; &nbsp; <span style='font-size: 10pt;'><strong>Theater Name:- "+data.theaterName+"</strong></span></h6><h6><span style='font-size: 10pt;'>&nbsp; &nbsp; &nbsp;Theater Address:- "+data.theaterAddress+"</span></h6><h6>&nbsp; &nbsp; &nbsp; &nbsp; <span style='font-size: 10pt;'><strong>Seat No:- "+data.seats+"</strong></span></h6></section></article></div></section>"
   }
   //step3
   transporter.sendMail(mailOptions,function(err,data){
     if(err){
       console.log(err)
     }
     else{
       console.log("Success")   
     }
   })
}



//Cancel Mail
function sendBookingCancelMail(data){
  //step1
  let transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'bookmytickets233361@gmail.com',
        pass:'book@my@tickets'
      }
   })
   //setp2
   let mailOptions={
     from:'bookmytickets233361@gmail.com',
     to:data.messageto,
     subject:"MovieMood",
     html:"<h3 style='color:red'>Your Booking Is Cancelled </h3> <h1 style=''>your Ticket Id is:</h1><h4 style=''>"+data.id+"</h4>"
   }
   //step3
   transporter.sendMail(mailOptions,function(err,data){
     if(err){
       console.log(err)
     }
     else{
       console.log("Success")   
     }
   })
}




router.post('/Send',(req,res)=>{
  const data={
        query:req.body.query,
        message:req.body.message,
        messageto:req.body.messageto
    }
    console.log(data)
    sendMail(data);
});

router.post('/sendBookingInfo',(req,res)=>{
  var seats=[]
  req.body.seats.map(ele=>{
    seats.push(ele+" ")
  })

  const data={
        movieName:req.body.movieName,
        theaterName:req.body.theaterName,
        theaterAddress:req.body.theaterAddress,
        date: req.body.date,
        startTime:req.body.startTime,
        seats:seats,
        price:req.body.total,
        messageto:req.body.messageto
      }
    console.log(data)
    sendBookingMail(data);
});


router.post('/sendBookingCancelInfo',(req,res)=>{
  const data={
        id:req.body.id,
        messageto:req.body.meesageTo
    }
    
    console.log(data)
    
    sendBookingCancelMail(data);
});




//Routes For Movie
router.get("/getAllMovie", MovieController.getAllMovie);
router.post("/addMovie",MovieController.addMovie);
router.get("/deleteMovieByName/:name", MovieController.deleteMovieByName);

// router.get("/deleteMovieByName/:name",(req,res)=>{
//     console.log("get")
// });
 router.get("/getMovieByName/:name", MovieController.getMovieByName);

//Routes For Adjust
router.get("/getAllAdjust",AdjustController.getAllAdjust);
router.post("/addAdjust",AdjustController.addAdjust);

//Routes For Cast
router.get("/getAllCast",CastController.getAllCast);
// router.get("/getAllCast",(req,res)=>{
//     console.log("hello")
// });


router.post("/addCast",CastController.addCast);
router.get("/getCastByName/:name",CastController.getCastByName);

router.get("/getAllCustomer",CustomerController.getAllCustomer);
router.post("/addCustomer",CustomerController.addCustomer);
router.post("/LoginCustomer",CustomerController.LoginCustomer);
router.get("/LogOutCustomer", CustomerController.LogOutCustomer);
router.get("/isLoggedInc",auth.authCustomer,CustomerController.isLoggedInc);
router.get("/getCustomerById/:id",CustomerController.getCustomerById);
router.get("/getCustomerByName/:name",CustomerController.getCustomerByName);
router.post("/getLoggedEndUserData",CustomerController.getLoggedEndUserData)
router.post("/UpdateWallet",CustomerController.UpdateWallet)

//Route For Theater
router.get("/getTheater/:id",TheaterController.getTheater);
router.post("/updateTheater/:id",TheaterController.updateTheater);
router.post("/addTheater",TheaterController.addTheater);
router.post("/LoginTheater",TheaterController.LoginTheater);
//router.get("/isLoggedInT",TheaterController.isLoggedInT);


//Routes For Payment
router.get("/getAllPayment",PaymentController.getAllPayment);
router.post("/addPayment",PaymentController.addPayment);

//Routes For Query
router.get("/getAllQuery",QueryController.getAllQuery);
router.post("/addQuery",QueryController.addQuery);
router.get("/getQueryById/:id",QueryController.getQueryById);

//Routes For Seat
router.get("/getAllSeat",SeatController.getAllSeat);
router.post("/addSeat",SeatController.addSeat);

//Routes For ShowTiming

router.get("/getAllShowTiming",ShowTimingController.getAllShowTiming);
router.post("/getShow",ShowTimingController.getShows);
router.post("/addShowTiming",ShowTimingController.addShowTiming);
router.get("/getShow/:city/:name/:day/:month/:year", ShowTimingController.getShow);
router.get("/getShowById/:id",ShowTimingController.getShowById);

router.post("/UpdateSeatArrayAfterCancellation",ShowTimingController.UpdateSeatArrayAfterCancellation);
router.post("/UpdateSeatArray",ShowTimingController.UpdateSeatArray);

// router.get("/findshow/:name/:city/:date", ShowController.findshow);

//Routes For SnacksOrder
router.get("/getAllSnacksOrder",SnackOrderController.getAllSnacksOrder);
router.post("/addSnacksOrder",SnackOrderController.addSnacksOrder);

//Routes For SnacksMenu
router.get("/getAllSnackMenu",SnacksMenuController.getAllSnacksMenu);
// router.post("/addSnackMenu",SnacksMenuController.addSnacksMenu);

//Routes For SwapSeatRequest
//router.get("/getAllSwap",SwapSeatRequestController.getAllSwap);
router.get("/getSwapSeatDataByUserName/:name",SwapSeatRequestController.getSwapSeatDataByUserName)
router.post("/addSwap",SwapSeatRequestController.addSwap);
router.post("/updateSwapStatus",SwapSeatRequestController.updateSwapStatus);

router.post("/swapSeat",BookingController.swapSeat);
//router.post("/swapSeat2",BookingController.swapSeat2);
router.get("/getAllBooking",BookingController.getAllBooking);
router.get("/getBookingById/:id",BookingController.getBookingById);
router.get("/getBookingByName/:name",BookingController.getBookingByName);
router.post("/cancelBooking",BookingController.cancelBooking);
router.post("/addBooking",BookingController.addBooking);
router.get("/getAllBookingByCustomerName/:userName",BookingController.getAllBookingByCustomerName);
router.get("/getAllBookingByCustomerId/:userId",BookingController.getAllBookingByCustomerId);
router.get("/getUserNameBySeatNumber/:no",BookingController.getUserNameBySeatNumber);
module.exports = router;