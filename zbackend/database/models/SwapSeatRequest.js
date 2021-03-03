const mongoose = require("mongoose");
const validator = require('validator');
const Schema = mongoose.Schema;


const SwapSeatSchema = new mongoose.Schema({

    Booking_ID:{
        type: Schema.Types.ObjectId,
        ref: "Booking",
        trim:true        
    },
    isSwappable:{
        type:Boolean,
        trim:true
    },
    SwapStatus:{
        type:Boolean,
        trim:true
    },
    userId1:{
        type: Schema.Types.ObjectId,
        ref: "Customer",
        trim:true
    },
    userId2:{
        type: Schema.Types.ObjectId,
        ref: "Customer",
        trim:true
    }, 
    email1:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email is invalid please enter in correct formate');
            }
        }
    },
    email2:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email is invalid please enter in correct formate');
            }
        }
    }
});

const  SwapSeat= mongoose.model('SwapSeat', SwapSeatSchema);

module.exports = SwapSeat;