const mongoose = require('mongoose');
const validator = require('validator');

const theatersSchema = new mongoose.Schema({
    theaterName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    theaterEmail: {
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
    theaterMobile: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Phone is invalid please enter in correct formate');
            }
        }
    },
    theaterAddress: {
        type: String,
        trim: true
    },
    noOfScreen: {
        type: Number,
        trim: true
    }
});


const Theater = mongoose.model('Theater', theatersSchema);

module.exports = Theater;