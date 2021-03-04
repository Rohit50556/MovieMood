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

        const token=jwt.sign({user: TheaterSaved._id,},process.env.JWT_T_SECRET);
        // res.cookie("token", token).send();
        res.send(token);

    }catch(err){
        console.error(err);
        res.status(500).send();
    }
};
module.exports.LoginTheater = async(req,res)=>{
    try{
        const email = req.body.theaterEmail;
        const password =  req.body.password;

        if (!email || !password){
            return res.status(400).json({ errorMessage: "Please enter all required fields." });
        };
        const existingUser = await Theater.findOne({ theaterEmail:email });
        if (!existingUser){
            return res.status(401).json({ errorMessage: "Wrong email or password." });
        };
        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.password
          );
          if(!passwordCorrect){
            return res.status(401).json({ errorMessage: "Wrong email or password." });
          };
          const token = jwt.sign(
            {
              user: existingUser._id,
            },
            process.env.JWT_T_SECRET
          );      
          // send the token in a HTTP-only cookie
            console.log("ME inside Login theater");
          // res.cookie("token", token).send();
          res.send(token);
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
};
module.exports.logOutTheater=async()=>{
    try{
        const token = req.token;
        console.log(token);
        if(!token){
              res.status(400).send();
        }
        res.send({});    
     }catch(e){
        res.status(400).send(e);
     }  
};
module.exports.isLoggedInT= async(req,res)=>{

    try {
        const token = req.token;
        // console.log(req.token);
        // console.log(req.user);
        if (!token){
          return res.json(false);
        }
        jwt.verify(token, process.env.JWT_T_SECRET);
        res.send(true);
      } catch (err) {
        res.json(false);
      }

};