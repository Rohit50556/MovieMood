const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Snacks_menuSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true
    },
    theater_name:{
        type:String,
        trim:true
    },
    theater_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Theater',
        trim:true
    },
    price:{
        type:Number,
        trim:true
    },
    image:{
        data: Buffer,
        contentType: String
    }


});

const Snacks_menu = mongoose.model('Snacks_menu', Snacks_menuSchema);

module.exports = Snacks_menu;