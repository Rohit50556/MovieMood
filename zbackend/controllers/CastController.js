const mongoose = require('mongoose');
const express = require("express");
const Cast= require("../database/models/Cast");

module.exports.getAllCast = async(req,res)=>{
    await Cast.find()
        .then((m)=>{res.send(m);})
        .catch((err)=>{console.log(err)});
};
module.exports.addCast = async(req,res)=>{

    var cast= new Cast();
    cast.castName = req.body.castName;
    cast.castImage = req.body.castImage;
    cast.castDescription= req.body.castDescription;
    await cast.save()
            .then((m)=>{res.send(m)})
            .catch((err)=>{console.log(err)});
};