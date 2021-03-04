const mongoose = require('mongoose');
const express = require("express");
const Booking = require("../database/models/Booking");

module.exports.getAllBooking= async (req, res)=>{
    await Booking.find()
            .then((m) => {res.send(m);})
            .catch((err) => {console.log(err);});
};
module.exports.addBooking = async (req, res)=>{

    var booking = new Booking();
    booking.showId=req.body.showId;
    booking.movieId=req.body.movieId;
    booking.theaterId=req.body.theaterId;
    booking.userId=req.body.userId;
    booking.date= req.body.date;
    booking.startTime=req.body.startTime;
    booking.seat=req.body.seat;
    booking.pricePerSeat= req.body.pricePerSeat;
    booking.totalNoOfSeat= req.body.totalNoOfSeat;
    booking.total= req.body.total;
    booking.movieName= req.body.movieName;
    booking.theaterName= req.body.theaterName;
    booking.userName= req.body.userName;
    booking.bookingStatus= req.body.bookingStatus;

    await booking.save().then((m)=>{res.send(m);}).catch((err)=>{console.log(err);});


};
module.exports.getAllBookingByCustomerName = async (req, res)=>{

    await Booking.find({userName:req.params.userName})
                    .then((m)=>{res.send(m);})
                    .catch((err)=>{console.log(err);});

};
module.exports.getAllBookingByCustomerId = async (req, res)=>{

    await Booking.find({userId:req.params.userId})
                    .then((m)=>{res.send(m);})
                    .catch((err)=>{console.log(err);});
};