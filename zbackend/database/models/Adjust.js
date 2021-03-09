const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdjustSchema = new mongoose.Schema({
    userName_seller:{
        type:String,
        trim:true
    },
    userName_Buyer:{
        type:String,
        trim:true
    },
    SellerId:{
        type: Schema.Types.ObjectId,
        ref: "Customer",
        trim:true
    },
    buyerId:{
        type: Schema.Types.ObjectId,
        ref: "Customer",
        trim:true
    },
    bookingId:{
        type: Schema.Types.ObjectId,
        ref: "Booking",
        trim:true        
    },
    screen_num:{
        type:Number,
        trim:true
    },
    theaterName:{
        type:String,
        trim:true
    },
    movieName:{
        type:String,
        trim:true
    },
    date:{
        type:Date,
        trim:true
    },
    Time:{
        type: Date,
        trim:true
    },
    paymentStates:{
        type:Boolean,
        trim:true
    }

});

const Adjust = mongoose.model('Adjust', AdjustSchema);

module.exports = Adjust;