const mongoose = require('mongoose');
const express = require("express");
const Customer = require("../database/models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.getAllCustomer = async(req,res)=>{
    await Customer.find()
        .then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));
};

module.exports.addCustomer = async(req,res)=>{
    try {
    console.log(req.body);
    var customer = new Customer();
    customer.fname= req.body.fname;
    customer.lname= req.body.lname;
    customer.username=req.body.username;
    customer.password=req.body.password;
    customer.email=req.body.email;
    customer.mobile=req.body.mobile;
    customer.image=req.body.image;
    customer.gender=req.body.gender;
    customer.address=req.body.address;
    customer.wallet= req.body.wallet;

    if(!customer.email || !customer.password)
    {
        return res.status(400).json({ errorMessage: "Please enter all required fields." });
    }
    const existingUser = await Customer.findOne({ email:(customer.email) });
    if (existingUser){
        return res.status(400).json({
            errorMessage: "An account with this email already exists.",
        });
    };
      
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(customer.password, salt);
    customer.password=passwordHash;

    const CustomerSaved= await customer.save();

    // sign the token

    const token=jwt.sign({user: CustomerSaved._id,},process.env.JWT_SECRET);
  
      // send the token in a HTTP-only cookie
  
    res.cookie("token", token).send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
    
};
module.exports.LoginCustomer = async (req, res)=>{
    try{
        const email = req.body.email;
        const password =  req.body.password;

        if (!email || !password){
            return res.status(400).json({ errorMessage: "Please enter all required fields." });
        };
        const existingUser = await Customer.findOne({ email });
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
            process.env.JWT_SECRET
          );
      
          // send the token in a HTTP-only cookie
            console.log("ME inside Login customer");
          res.cookie("token", token).send();


    }catch(err){
        
        console.error(err);
        res.status(500).send();
    }
};

module.exports.LogOutCustomer = async (req,res)=>{

    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    }).send();

};

module.exports.isLoggedInc=(req,res)=>{
  try {
    const token = req.cookies.token;
    console.log(req.cookies);
    if (!token){
      return res.json(false);
    }

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
};












































// const mongoose = require('mongoose');
// const express = require("express");
// const Customer = require("../database/models/Customer");

// module.exports.getAllCustomer = async(req,res)=>{
//     await Customer.find()
//         .then((m) => (res.send(m)))
//         .catch((err) => (console.log(err)));
// };

// module.exports.addCustomer = async(req,res)=>{

//     var customer = new Customer();
//     customer.fname= req.body.fname;
//     customer.lname= req.body.lname;
//     customer.username=req.body.username;
//     customer.password=req.body.password;
//     customer.email=req.body.email;
//     customer.mobile=req.body.mobile;
//     customer.image=req.body.image;
//     customer.gender=req.body.gender;
//     customer.address=req.body.address;
//     customer.wallet= req.body.wallet;

//     await customer.save()
//         .then((data) => (res.send(data)))
//         .catch((err) => (console.log(err)));
// };