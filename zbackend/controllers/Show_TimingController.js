const mongoose = require('mongoose');
const express = require("express");
const ShowTiming = require("../database/models/Show_Timing");

module.exports.getAllShowTiming = async (req,res) =>{

    await ShowTiming.find()
            .then((m)=>{res.send(m);})
            .catch((err)=>{console.log(err)});

};

module.exports.addShowTiming= async (req,res)=>{

   console.log(req.body)
    var showTiming = new ShowTiming();
    showTiming.movieName = req.body.mname;
    showTiming.ShowDate= req.body.dates;
    showTiming.price = req.body.price;
    showTiming.screen = req.body.screen;
    showTiming.Timining=req.body.times
 
    showTiming.theaterName = "xyz";
    showTiming.city= "xyz";

    await showTiming.save()
                .then((m)=>{res.send(m);})
                .catch((err)=>{console.log(err);});

};




module.exports.getShow = async(req, res) => {

    //console.log("="+req.body)
    
    ShowTiming.find({ screen:req.body.scr,ShowDate:req.body.date})
        .then((data) => { res.send(data) })
        .catch((e) => { console.log(e) });
};


// module.exports.findShow = async(req, res) => {
//     ShowTiming.find({ movieName:req.params.name, city: req.params.city, ShowDate: req.params.date })
//         .then((data) => { res.send(data) })
//         .catch((e) => { console.log(e) });
// };