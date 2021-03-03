const mongoose = require('mongoose');
const express = require("express");
const Snacks = require("../database/models/SnacksOrder");

module.exports.getAllSnacksOrder =  async (req,res)=>{
    await Snacks.find()
                .then((m)=>{res.send(m);})
                .catch((err)=>{console.log(err);});
};
module.exports.addSnacksOrder = async(req,res)=>{

    var snacks = new Snacks();
    snacks.Booking_id= req.body.booking_id;
    snacks.username = req.body.username;
    snacks.therter_name = req.body.therter_name;
    snacks.Snack_Order_Details = req.body.Snack_Order_Details;
    snacks.totalPrice= req.body.totalPrice;
    snacks.seat_details= req.body.seat_details;

    await snacks.save()
            .then((m)=>{res.send(m);})
            .catch((err)=>{console.log(err);});
};