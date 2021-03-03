const mongoose = require('mongoose');
const validator = require('validator');

const querySchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    mobile: {
        type: String,
        unique: true,
        trim: true,
    },
    query: {
        type: String,
        trim: true,
        required: true
    }

});

const Query = mongoose.model("Query", querySchema);
module.exports = Query;