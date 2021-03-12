const mongoose = require('mongoose');
const express = require("express");
const Booking = require("../database/models/Booking");

module.exports.getAllBooking= async (req, res)=>{
    await Booking.find()
            .then((m) => {res.send(m);})
            .catch((err) => {console.log(err);});
};
module.exports.addBooking = async (req, res)=>{

    console.log(req.body)
    var booking = new Booking();

    booking.userName=req.body.userName;
    booking.movieName= req.body.movieName;
    booking.theaterName= req.body.theaterName;
    booking.theaterAddress= req.body.theaterAddress;
    booking.date= req.body.date;
    booking.startTime=req.body.startTime;
    booking.totalNoOfSeat= req.body.totalNoOfSeat;
    booking.seats=req.body.seats;
    booking.snacks=req.body.snacks;
    booking.snacksQ=req.body.snacksQ;
    booking.seatprice=req.body.seatPrice;
    booking.snacksprice=req.body.snacksPrice;
    booking.total= req.body.total;
    

     await booking.save().then((m)=>{res.send(m);}).catch((err)=>{console.log(err);});


};
module.exports.getAllBookingByCustomerName = async (req, res)=>{

    await Booking.find({userName:req.params.userName})
                    .then((m)=>{res.send(m);})
                    .catch((err)=>{console.log(err);});

};


module.exports.cancelBooking = async (req, res)=>{

    console.log(req.body)
    await Booking.findOne({_id:req.body.id},function(err,BookingData){
        if(err){console.log(err)
        res.status(500).send()
      }
      else{
            BookingData.isCanceled=true   
        }
        BookingData.save()
      })
};

module.exports.getAllBookingByCustomerId = async (req, res)=>{

    await Booking.find({userId:req.params.userId})
                    .then((m)=>{res.send(m);})
                    .catch((err)=>{console.log(err);});
};