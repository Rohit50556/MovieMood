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
 
    showTiming.theaterName = req.body.name;
    showTiming.city= req.body.city;
    showTiming.theaterAddress= req.body.address;


    var seatArray = []
    for(var k=0;k<60;k++)
    {
        seatArray.push({
            "seatName":k+1,
            "seatPrice": req.body.price ,
            "seatType":"Delux",
            "className":"seat"
         });
    }
    showTiming.seatArray=seatArray;
        console.log(seatArray)

    await showTiming.save()
                .then((m)=>{res.send(m);})
                .catch((err)=>{console.log(err);});

};



module.exports.getShows = async(req, res) => {

    //console.log("="+req.body)
  //  ShowTiming.find({ screen:req.body.scr,ShowDate:req.body.date})
    console.log("hello="+req.body)
    ShowTiming.find({ screen:req.body.scr,ShowDate:req.body.date})
        .then((data) => { res.send(data) })
        .catch((e) => { console.log(e) });
};


module.exports.getShow = async(req, res) => {
    console.log("hello="+JSON.stringify(req.params)) 
    var date=req.params.day+"/"+req.params.month+"/"+req.params.year;
    console.log(req.params)
    ShowTiming.find({movieName:req.params.name,ShowDate:date,city:req.params.city })
        .then((data) => { res.send(data) })
        .catch((e) => { console.log(e) });
};

module.exports.getShowById = async(req, res) => {

    console.log("this is req "+req.params.id)
    
   //  ShowTiming.findById(req.params.id)
   //      .then((data) => { res.send(data); })
   //      .catch((e) => { console.log(e); });

   const data = await ShowTiming.findById(req.params.id)
   res.send(data)
};