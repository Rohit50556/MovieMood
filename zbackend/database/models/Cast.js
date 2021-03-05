const mongoose = require('mongoose');
const castSchema = new mongoose.Schema({

    castName :{
        type: String,
        trim: true
    }, 
    castImageUrl :{
      type: String,
        trim: true
    }, 
    castDescription :{
        type: String,
        trim: true
    },
    castRole:{
        type:String,
        trim:true
    },
    BirthDate:{
        type:String,
        trim:true
    }
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;