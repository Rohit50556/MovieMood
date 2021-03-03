const mongoose = require('mongoose');
const express = require("express");
const Seat= require("../database/models/Seat");

module.exports.getAllSeat = async (req,res)=>{
    await Seat.find()
            .then((m) => {res.send(m);})
            .catch((err)=>{console.log(err)});
};

module.exports.addSeat = async (req,res)=>{

    var seat = new Seat();
    seat.SeatName = req.body.SeatName;
    seat.SeatPrice = req.body.SeatPrice;
    seat.SeatType = req.body.SeatType;

    await seat.save()
            .then((m) => { res.send(m);})
            .catch((err)=>{console.log(err);});

};