const mongoose = require('mongoose');
const { Schema } = mongoose; 

const bookingSchema = new mongoose.Schema({
    movieName: {
        type: String,
        trim:true
    },
    theaterName: {
        type: String,
        trim: true
    },
    userName: {
        type: String,
        trim:true
    },
    theaterAddress: {
        type: String,
        trim:true
    },
    date: {
        type: String,
        trim:true
    },
    startTime: {
        type: String,
        trim:true
    },
    totalNoOfSeat: {
        type: Number,
        trim:true
    },
    seats: {
        type: [Number],
        trim:true
    },
    snacks: {
        type: [String],
        trim:true
    },
    snacksQ: {
        type: [Number],
        trim:true
    },
    seatprice: {
        type: Number,
        trim:true
    },
    snacksprice: {
        type: Number,
        trim:true
    },
    total: {
        type: Number,
        trim:true
    },
    isCanceled:{
        type: Boolean,
        trim:true,
        default:false
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
