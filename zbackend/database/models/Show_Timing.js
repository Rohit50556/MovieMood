const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new mongoose.Schema({
    ShowDate: {
        type: String,
        required: true,
        trim: true
    },
    Timining: {
        type: [Number],
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },  
    theaterName: {
        type: String,
        trim: true
    },
     screen: {
        type: Number,
        trim: true
    },
    movieName: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    seatArray :{
        type : [Object],
        trim:true
    },
    theaterAddress:{
        type : String,
        trim:true
    }
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;