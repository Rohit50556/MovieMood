require('dotenv').config();
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const flash = require('express-flash');
const routerIndex = require("./routes/router");
var cookieParser = require('cookie-parser')
const cors = require('cors');
var app = express();

app.use(express.json());
app.use(cookieParser());
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
app.use('/SendMail',routerIndex);

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