const mongoose = require('mongoose');
const { Schema } = mongoose; 

const bookingSchema = new mongoose.Schema({
    showId: {
        type: Schema.Types.ObjectId,
        ref: "show_Timing",
        trim:true
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        trim:true
    },
    theaterId: {
        type: Schema.Types.ObjectId,
        ref: 'Theater',
        trim:true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        trim:true
    },
    date: {
        type: Date,
        trim:true
    },
    startTime: {
        type: String,
        trim:true
    },
    seat: {
        type: [Number],
        trim:true
    },
    pricePerSeat: {
        type: Number,
        trim:true
    },
    totalNoOfSeat: {
        type: Number,
        trim:true
    },
    total: {
        type: Number,
        trim:true
    },
    movieName: {
        type: String,
        trim:true
    },
    theaterName: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim:true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
