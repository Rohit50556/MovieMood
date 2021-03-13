const mongoose = require("mongoose");
const validator = require('validator');
const Schema = mongoose.Schema;


const SwapSeatSchema = new mongoose.Schema({

    Booking_ID1:{
        type: String,
        trim:true        
    },
    Booking_ID2:{
        type: String,
        trim:true,
        default:null        
    },
    SeatNo1:{
        type:[Number],
        trim:true
    },
    SwapStatus:{
        type:Boolean,
        trim:true,
        default:false
    },
    username1:{
        type: String,
        trim:true
    },
    username2:{
        type: String,
        trim:true,
        default:null
    }, 
    email1:{
        type: String,
        trim: true,
    },
    email2:{
        type: String,
        trim: true,
        default:null
    },
    theaterName:{
        type: String,
        trim: true,
    },
    showtime:{
        type: String,
        trim: true,
    },
    date:{
        type: String,
        trim: true,
    },
    SwapSeatNo:{
        type: Number,
        trim: true,   
    }
});

const  SwapSeat= mongoose.model('SwapSeat', SwapSeatSchema);

module.exports = SwapSeat;