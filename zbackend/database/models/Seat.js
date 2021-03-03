const mongoose = require('mongoose');
const validator = require('validator');

const SeatSchema = new mongoose.Schema({
    SeatName:{
        type: String,
        trim:true
    }, 
    SeatPrice:{
        type: Number,
        trim:true
    }, 
    SeatType:{
        type:String,
        trim:true
    } 
});

const Seat = mongoose.model('Seat', SeatSchema);

module.exports = Seat;