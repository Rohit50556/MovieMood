const mongoose = require('mongoose');
const express = require("express");
const SwapSeatRequest = require("../database/models/SwapSeatRequest");

// module.exports.getAllSwap = async(req,res)=>{
    
// };


module.exports.addSwap = async(req,res)=>{

    console.log("requ")
    console.log(req.body)
    if(req.body.seat===undefined){}
    else if(req.body.user2===undefined){}
    else{
    var swap=new SwapSeatRequest()
    
    swap.Booking_ID1=req.body.ticketid;
    swap.SeatNo1=req.body.seat;
    swap.username1=req.body.username;
    swap.email1=req.body.email;
    swap.theaterName=req.body.theaterName
    swap.showtime=req.body.showTime
    swap.date=req.body.date
    swap.SwapSeatNo=req.body.seatNo
    swap.username2=req.body.user2
    swap.email2=req.body.email2;
    swap.Booking_ID2=req.body.user2id;
    
    

    swap.save()
    .then((data) => (res.send(data)))
    .catch((err) => (console.log(err)));
    }
};



module.exports.getSwapSeatDataByUserName = async(req,res)=>
 {
     console.log("name")
     console.log(req.params.name)
        await SwapSeatRequest.find({username2:req.params.name}).then((data) => (res.send(data)))
        .catch((err) => (console.log(err)));
};

module.exports.updateSwapStatus = async(req,res)=>

{
    console.log(req.body)
    await SwapSeatRequest.findOne({_id:req.body.id},function(err,swapData){
        if(err){console.log(err)
            res.status(500).send()
          }
          else{
                swapData.SwapStatus=true;
            }
            swapData.save();
    })

}