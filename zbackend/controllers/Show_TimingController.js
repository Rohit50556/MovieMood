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


// module.exports.UpdateSeatArray = async(req, res) => {

//     //console.log("hello="+req.body)
//     var data=ShowTiming.findById(req.body.id)
//         .then((data) => { res.send(data) })
//         .catch((e) => { console.log(e) });
// };
module.exports.UpdateSeatArrayAfterCancellation= async(req,res)=>{
 
    console.log(req.body)
    var bookSeats=[]
    var removeseat=[]
    var arr=[]
    removeseat=req.body.seats
    
    await ShowTiming.findOne({_id:req.body.id},function(err,ShowData){
        if(err){console.log(err)
        res.status(500).send()
      }
      else{
            //var price=ShowData.seatArray[0].price;
               
            for(let i=0;i<60;i++)
            {
                if(ShowData.seatArray[i].className==="seat occupied")
                    bookSeats.push(i+1)
            }

            
            for(var k=0;k<60;k++)
            {
                arr.push({
                    "seatName":k+1,
                    "seatType":"Delux",
                    "className":"seat"
                });
            }
    
            
            bookSeats.map(ele=>{
                arr[ele-1].className="seat occupied"
            })

            removeseat.map(ele=>{
                arr[ele-1].className="seat"
            })

            ShowData.seatArray=arr
         
        }
        ShowData.save();
      })
    };


module.exports.UpdateSeatArray = async(req,res)=>{
 
    //console.log(req.body)
    var bookSeats=[]
    var arr=[]
    bookSeats=req.body.seats
    await ShowTiming.findOne({_id:req.body.id},function(err,ShowData){
        if(err){console.log(err)
        res.status(500).send()
      }
      else{
            for(let i=0;i<60;i++)
            {
                if(ShowData.seatArray[i].className==="seat occupied")
                    bookSeats.push(i+1)
            }

            
            for(var k=0;k<60;k++)
            {
                arr.push({
                    "seatName":k+1,
                    "seatType":"Delux",
                    "className":"seat"
                });
            }
    
            
            bookSeats.map(ele=>{
                arr[ele-1].className="seat occupied"
            })

            ShowData.seatArray=arr
         
        }
        ShowData.save();
      })
    };

    

module.exports.getShows = async(req, res) => {

    //console.log("="+req.body)
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
    
   const data = await ShowTiming.findById(req.params.id)
   res.send(data)
};