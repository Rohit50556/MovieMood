const mongoose = require('mongoose');
const express = require("express");
const Cast= require("../database/models/Cast");
var multer=require("multer");
var path=require("path")



var storage = multer.diskStorage({
    destination:"D:/project/react_project/MovieMood/User/public/Assets/Cast",
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname))
    }
  })
  
var upload = multer({ storage: storage }).single('file')   



module.exports.getAllCast = async(req,res)=>{
  console.log("get")  
  await Cast.find()
        .then((m)=>{res.send(m);})
        .catch((err)=>{console.log(err)});
};




module.exports.addCast = async(req,res)=>{

    upload(req, res, function (err) {  

        console.log(req.body)
  
              if (err instanceof multer.MulterError) 
                console.log(err)    
              else if (err)
                console.log(err)
            
              var cast= new Cast();
            cast.castName = req.body.name;
            cast.castRole= req.body.role;
            cast.castDescription= req.body.info;
            cast.castImageUrl=req.file.filename

            cast.save()
                    .then((m)=>{res.send(m)})
                    .catch((err)=>{console.log(err)});
    })
};