const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SnacksOrderSchema = new mongoose.Schema({
    Booking_id:{
        type: Schema.Types.ObjectId,
        ref: "Booking",
        trim:true 
    },
    username:{
        type:String,
        trim:true
    },
    therter_name:{
        type:String,
        trim:true
    }, 
    Snack_Order_Details:{
        type:[Object],
        trim:true
    },
    totalPrice:{
        type:Number,
        trim:true
    },
    seat_details:{
        type:[Object],
        trim:true
    }
    
});

const SnacksOrder = mongoose.model('SnacksOrder', SnacksOrderSchema);

module.exports = SnacksOrder;