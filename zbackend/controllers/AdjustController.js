const mongoose = require('mongoose');
const express = require("express");
const Adjust = require("../database/models/Adjust");

module.exports.getAllAdjust= async(req,res)=>{
    await Adjust.find()
            .then((m) => (res.send(m)))
            .catch((err) => (console.log(err)));
};
module.exports.addAdjust = async (req,res)=>{

    var adjust = new Adjust();
    adjust.userName_seller=req.body.userName_seller;
    adjust.userName_Buyer= req.body.userName_buyer;
    adjust.SellerId=req.body.SellerId;
    adjust.buyerId=req.body.buyerId;
    adjust.bookingId=req.body.bookingId;
    adjust.screen_num= req.body.screen_num;
    adjust.theaterName = req.body.theaterName;
    adjust.movieName = req.body.movieName;
    adjust.date=req.body.date;
    adjust.Time =  req.body.Time;
    adjust.paymentStates=req.body.paymentStates;

    await adjust.save()
        .then((data) => (res.send(data)))
        .catch((err) => (console.log(err)));

};