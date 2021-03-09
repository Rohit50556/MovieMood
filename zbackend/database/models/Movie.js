const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
        moviename: {
            type: String,
            trim: true,
        },
        moviedescription: {
            type: String,
            trim: true
        },
        language: {
            type: [String],
            trim: true
        },
        genre: {
            type: [String],
            trim: true
        },
        cast: {
            type:[String],
            trim:true
        },
        director: {
            type: String,
            trim: true
        },
        duration: {
            type: String,
            trim: true
        },
        // releaseDate: {
        //     type: Date,
        //     trim: true
        // },
        // live: {
        //     type: Boolean,
        //     trim: true
        // },
        // future: {
        //     type: Boolean,
        //     trim: true
        // },
        poster: {
            type: String,
        },
        movieImg: {
            type: String,
        },

        url:{
            type:String,
            trim:true
        }
    });

// const movieSchema = new mongoose.Schema({
//     moviename: String,
//     movieinfo : String,
//     language: String,
//     genre : String,
//     cast:String, 
//     castinfo :String,
//     director : String,
//     duration :String,
//     poster : String,
//     card: String
// })
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
