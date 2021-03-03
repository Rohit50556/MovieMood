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

//Routes For Movie
router.get("/getAllMovie", MovieController.getAllMovie);
router.post("/addMovie",MovieController.addMovie);
// router.get("/deleteMovieByName/:name", MovieController.deleteMovieByName);
// router.get("/getByName/:name", MovieController.getMovieByName);

//Routes For Adjust
router.get("/getAllAdjust",AdjustController.getAllAdjust);
router.post("/addAdjust",AdjustController.addAdjust);

//Routes For Cast
router.get("/getAllCast",CastController.getAllCast);
router.post("/addCast",CastController.addCast);

//Routes For Customer
router.get("/getAllCustomer",CustomerController.getAllCustomer);
router.post("/addCustomer",CustomerController.addCustomer);
router.post("/LoginCustomer",CustomerController.LoginCustomer);
router.get("/LogOutCustomer",CustomerController.LogOutCustomer);
router.get("/isLoggedInc",CustomerController.isLoggedInc);

//Route For Theater
router.get("/getAllTheater",TheaterController.getAllTheater);
router.post("/addTheater",TheaterController.addTheater);

//Routes For Payment
router.get("/getAllPayment",PaymentController.getAllPayment);
router.post("/addPayment",PaymentController.addPayment);

//Routes For Query
// router.get("/getAllQuery",(req,res)=>{
//     console.log("rohit")
// });
router.get("/getAllQuery",QueryController.getAllQuery);

router.get("/getQueryById/:id",QueryController.getQueryById);

// router.get("/getQueryById/:id",(req,res)=>{
//     console.log("ayiiiiiiiiiiiii")
// });
//router.post("/addQuery",QueryController.addQuery);

//Routes For Seat
router.get("/getAllSeat",SeatController.getAllSeat);
router.post("/addSeat",SeatController.addSeat);

//Routes For ShowTiming
router.get("/getAllShowTiming",ShowTimingController.getAllShowTiming);
router.post("/addShowTiming",ShowTimingController.addShowTiming);
// router.get("/findshow/:name/:city/:date", ShowController.findshow);

//Routes For SnacksOrder
router.get("/getAllSnacksOrder",SnackOrderController.getAllSnacksOrder);
router.post("/addSnacksOrder",SnackOrderController.addSnacksOrder);

//Routes For SnacksMenu
router.get("/getAllSnackMenu",SnacksMenuController.getAllSnacksMenu);
// router.post("/addSnackMenu",SnacksMenuController.addSnacksMenu);

//Routes For SwapSeatRequest
router.get("/getAllSwap",SwapSeatRequestController.getAllSwap);
// router.post("/addSwap",SwapSeatRequestController.addSwap);

module.exports = router;























































// const express = require("express");
// const router = express.Router();


// const MovieController = require("../controllers/MovieController");
// const AdjustController = require("../controllers/AdjustController");
// const CastController = require("../controllers/CastController");
// const CustomerController = require("../controllers/CustomerController");
// const PaymentController = require("../controllers/PaymentController");
// const QueryController = require("../controllers/QueryController");
// const SeatController = require("../controllers/SeatController");
// const ShowTimingController = require("../controllers/Show_TimingController");
// const SnacksMenuController = require("../controllers/Snacks_MenuController");
// const SnackOrderController = require("../controllers/SnacksOrderController");
// const SwapSeatRequestController = require("../controllers/SwapSeatRequestController");



// //Routes For Movie
// router.get("/getMovie", MovieController.getMovie);


// router.post("/addMovie",MovieController.addMovie);
// // app.post("/addMovie",(req,res)=>{
// //     console.log(req.body)
// // });
// // router.get("/deleteMovieByName/:name", MovieController.deleteMovieByName);
// // router.get("/getByName/:name", MovieController.getMovieByName);

// //Routes For Adjust
// router.get("/getAllAdjust",AdjustController.getAllAdjust);
// router.post("/addAdjust",AdjustController.addAdjust);

// //Routes For Cast
// router.get("/getAllCast",CastController.getAllCast);
// router.post("/addCast",CastController.addCast);

// //Routes For Customer
// router.get("/getAllCustomer",CustomerController.getAllCustomer);
// router.post("/addCustomer",CustomerController.addCustomer);


// //Routes For Payment
// router.get("/getAllPayment",PaymentController.getAllPayment);
// router.post("/addPayment",PaymentController.addPayment);

// //Routes For Query
// router.get("/getAllQuery",QueryController.getAllQuery);
// router.post("/addQuery",QueryController.addQuery);

// //Routes For Seat
// router.get("/getAllSeat",SeatController.getAllSeat);
// router.post("/addSeat",SeatController.addSeat);

// //Routes For ShowTiming
// router.get("/getAllShowTiming",ShowTimingController.getAllShowTiming);
// router.post("/addShowTiming",ShowTimingController.addShowTiming);
// // router.get("/findshow/:name/:city/:date", ShowController.findshow);

// //Routes For SnacksOrder
// router.get("/getAllSnacksOrder",SnackOrderController.getAllSnacksOrder);
// router.post("/addSnacksOrder",SnackOrderController.addSnacksOrder);

// //Routes For SnacksMenu
// router.get("/getAllSnackMenu",SnacksMenuController.getAllSnacksMenu);
// // router.post("/addSnackMenu",SnacksMenuController.addSnacksMenu);

// //Routes For SwapSeatRequest
// router.get("/getAllSwap",SwapSeatRequestController.getAllSwap);
// // router.post("/addSwap",SwapSeatRequestController.addSwap);

// module.exports = router;