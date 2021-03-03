// var express = require('express');
// var app = express();
// var multer = require('multer')
// var cors = require('cors');
// app.use(cors())
// app.use(express.json());
// var storage = multer.diskStorage({
//     destination: ('D:/project/react_project/MovieMood/User/public/Assets/Upload')
//     ,
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' +file.originalname )
//     }
//   })
  
//   var upload = multer({ storage: storage }).any('file')
  
// app.post('/upload',function(req, res) {
  
//    upload(req, res, function (err) {
//     console.log(req.body.name[1])
  
//     if (err instanceof multer.MulterError) {
//           res.status(500)
//         } else if (err) {
//           res.status(500)
//             console.log(err)
//         } 
//   //      console.log(1)
//         return res.status(200)
//         // Everything went fine.
//       })
//       return res.status(200).send("file uploaded")
      

// });

// app.listen(3004, function() {
//     console.log('App running on port 3004');
// });
























// //require('dotenv').config();
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
// const session = require('express-session');
// const flash = require('express-flash');
const routerIndex = require("./routes/router");
//const passport = require('passport');
const cors=require('cors')
var app = express();
app.use(cors())

//session Store
// let mongoStore =new MongoDBStore({
//     mongooseConnection: connection,
//     collection: 'sessions'

// });
// //Session Config
// app.use(session({
//     secret:process.env.COOKIE_SECRET,
//     resave:false,
//     store:mongoStore,
//     saveUninitialized:false,
//     cookie:{maxAge:1000*60*60*24}
// }));



// Serve static files from the Angular app
// app.use(express.static(path.join(__dirname, '../../client/build')));
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
//middleware
//app.use(flash());

app.use(express.json());

app.use(cors());

app.use('/Movie',routerIndex);
app.use('/Adjust',routerIndex);
app.use('/Booking',routerIndex);
app.use('/Cast',routerIndex);
app.use('/Customer',routerIndex);
app.use('/Payment',routerIndex);
app.use('/Query',routerIndex);
app.use('/Seat',routerIndex);
app.use('/ShowTiming',routerIndex);
app.use('/SnacksMenu',routerIndex);
app.use('/SnacksOrder',routerIndex);
app.use('/SwapSeatRequest',routerIndex);
app.use('/Theater',routerIndex);



//DataBase Connection
const url = "mongodb://localhost:27017/MovieMood";
mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify:true
});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Database Connected...");
}).catch(err =>{
    console.log("Error:-"+err);
});

//port number
const PORT= process.env.PORT || 3030;
app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
});