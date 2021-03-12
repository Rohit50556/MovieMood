const mongoose = require('mongoose');
const express = require("express");
const Theater = require("../database/models/Theater");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.getTheater = async(req,res)=>{
//  console.log("get="+req.params.id)
   await Theater.find({_id:req.params.id})
        .then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));
};

module.exports.updateTheater = async(req,res)=>{
 
  await Theater.findOne({_id:req.params.id},function(err,TheaterData){
      if(err){console.log(err)
      res.status(500).send()
    }
    else{
        TheaterData.theaterName=req.body.theaterName;
        TheaterData.theaterEmail= req.body.theaterEmail;
        TheaterData.theaterMobile=req.body.theaterMobile;
        TheaterData.noOfScreen= req.body.noOfScreen;
        TheaterData.theaterAddress=req.body.theaterAddress;
        TheaterData.theaterEmail=req.body.theaterEmail;
      
      }
       TheaterData.save();

    })
  };


      
  
module.exports.addTheater = async(req,res)=>{
  console.log(req.body)  
  try{
        var theater = new Theater();
        theater.theaterName = req.body.fname;
        theater.userName=req.body.username;
        theater.password= req.body.password;
        theater.city = req.body.city;
        theater.theaterEmail= req.body.email;
        theater.theaterMobile=req.body.pno;
        theater.theaterAddress= req.body.address;
        theater.noOfScreen= req.body.screen;

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
    
  console.log(req.body)
  try{
        const email = req.body.email;
        const password =  req.body.password;

        if (!email || !password){
            return res.status(400).json({ errorMessage: "Please enter all required fields." });
        };
        const existingUser = await Theater.findOne({ theaterEmail:email });
        console.log(existingUser)
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
          res.send({token,existingUser});
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