const mongoose = require('mongoose');
const express = require("express");
const ShowTiming = require("../database/models/Show_Timing");

module.exports.getAllShowTiming = async (req,res) =>{

    await ShowTiming.find()
            .then((m)=>{res.send(m);})
            .catch((err)=>{console.log(err)});

};

module.exports.addShowTiming= async (req,res)=>{

    var showTiming = new ShowTiming();
    showTiming.ShowDate= req.body.ShowDate;
    showTiming.startTime = req.body.startTime;
    showTiming.endTime = req.body.endTime;
    showTiming.price = req.body.price;
    showTiming.theaterName = req.body.theaterName;
    showTiming.screen = req.body.screen;
    showTiming.movieName = req.body.movieName;
    showTiming.city= req.body.city;

    await showTiming.save()
                .then((m)=>{res.send(m);})
                .catch((err)=>{console.log(err);});

};

module.exports.findshow = async(req, res) => {
    ShowTiming.find({ movieName: req.params.name, city: req.params.city, ShowDate: req.params.date })
        .then((data) => { res.send(data) })
        .catch((e) => { console.log(e) });
};