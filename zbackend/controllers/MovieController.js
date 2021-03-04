const mongoose = require('mongoose');
const express = require("express");
const Movie = require("../database/models/Movie");
var multer=require("multer");
var path=require("path")


module.exports.getAllMovie = async(req, res) => {
    console.log("hello")
    await Movie.find()
        .then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));

};


var storage = multer.diskStorage({
    destination:"D:/project/react_project/MovieMood/User/public/Assets/Upload",
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname))
    }
  })
  
var upload = multer({ storage: storage }).array('file',2)   

module.exports.addMovie = async(req,res)=>{
    upload(req, res, function (err) {  

      console.log(req.body)

            if (err instanceof multer.MulterError) 
              console.log(err)    
            else if (err)
              console.log(err)
            const movie=new Movie();
 
              
            movie.moviename=req.body.moviename;
            movie.moviedescription=req.body.movieinfo;
            
            movie.language=req.body.lang;
            movie.genre=req.body.genre;
            movie.cast=req.body.cast;
            movie.director=req.body.director;
            movie.duration=req.body.duration;

            movie.url=req.body.url
            movie.poster=req.files[0].filename;
            movie.movieImg=req.files[1].filename;

             movie.save()
            .then((data) => (res.send(data)))
            .catch((err) => (console.log(err)));
        
    })
};

module.exports.deleteMovieByName = async(req, res) => {

 // console.log("get")
    await Movie.findOneAndRemove({ moviename: req.params.name })
        .then((deleted) => (res.send(deleted)))
        .catch((err) => (console.log(err)));

};

module.exports.getMovieByName = async(req, res) => {
    await Movie.find({ movieName: req.params.name })
        .then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));
}