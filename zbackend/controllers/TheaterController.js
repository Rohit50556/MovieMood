const mongoose = require('mongoose');
const express = require("express");
const Theater = require("../database/models/Theater");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.getAllTheater = async(req,res)=>{
    await Theater.find()
        .then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));
};

module.exports.addTheater = async(req,res)=>{
    try{
        var theater = new Theater();
        theater.theaterName = req.body.theaterName;
        theater.password= req.body.password;
        theater.city = req.body.city;
        theater.theaterEmail= req.body.theaterEmail;
        theater.theaterMobile=req.body.theaterMobile;
        theater.theaterAdd= req.body.theaterAdd;
        theater.noOfScreen= req.body.noOfScreen;

        if(!theater.theaterEmail || !theater.password)
        {
            return res.status(400).json({ errorMessage: "Please enter all required fields." });
        }
        const existingTheater = await Theater.findOne({ theaterEmail:(theater.theaterEmail) });
        if (existingTheater){
            return res.status(400).json({
                errorMessage: "An THEATER account with this email already exists.",
            });
        };
      
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(theater.password, salt);
        theater.password=passwordHash;

        const TheaterSaved= await theater.save();

        // sign the token

        const token=jwt.sign({user: TheaterSaved._id,},process.env.JWT_TH_SECRET);
        res.cookie("token", token).send();

    }catch(err){
        console.error(err);
        res.status(500).send();
    }
};