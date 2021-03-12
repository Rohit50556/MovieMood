const mongoose = require('mongoose');
const express = require("express");
const Query = require("../database/models/Query");


module.exports.getAllQuery = async (req,res)=>{
    //console.log("hello")
    await Query.find()
            .then((m)=>{res.send(m);})
            .catch((err)=>{console.log(err);});
};

module.exports.getQueryById = async(req,res)=>{
   
    console.log("inside Query")
    await Query.findOne({ _id: req.params.id })
                    .then((query) =>{ res.send(query);} )
                    .catch((err) =>{ console.log(err);} );
};
    
// module.exports.addQuery = async (req,res)=>{
//     var query = new Query();
//     query.userName = req.body.userName;
//     query.email = req.body.email;
//     query.mobile= req.body.mobile;
//     query.query = req.body.query;
//    // query.QueryAnswer= req.body.QueryAnswer;

//     await query.save()
//             .then((m)=>{res.send(m);})
//             .catch((err)=>{console.log(err);});

// };


    
module.exports.addQuery = async (req,res)=>{
    var query = new Query();
    query.userName = req.body.userName;
    query.email = req.body.email;
    query.query = req.body.query;
   // query.QueryAnswer= req.body.QueryAnswer;
console.log("quert"+req.body.query)
    await query.save()
            .then((m)=>{res.send(m);})
            .catch((err)=>{console.log(err);});
};