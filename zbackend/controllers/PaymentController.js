const mongoose = require('mongoose');
const express = require("express");
const Payment = require("../database/models/Payment");

module.exports.getAllPayment = async (req,res)=>{
    await Payment.find()
            .then((m)=>{res.send(m)})
            .catch((err)=>{console.log(err)});
};
module.exports.addPayment = async (req,res)=>{

    var payment = new Payment();
    payment.bookingId = req.body.bookingId;
    payment.userName = req.body.userName;
    payment.creditcard_Details = req.body.creditcard_Details;
    payment.totalPrice = req.body.totalPrice;
    payment.movieName = req.body.movieName;
    payment.theaterName = req.body.movieName;
    payment.Number_of_Tickets = req.body.Number_of_Tickets;
    payment.CancelationfareIsThere = req.body.CancelationfareIsThere;
    payment.Cancelationfare = req.body.Cancelationfare;
    payment.WalletDeductionamount = req.body.WalletDeductionamount;

    await payment.save()
                .then((m)=>{res.send(m);})
                .catch((err)=>{console.log(err);});

};