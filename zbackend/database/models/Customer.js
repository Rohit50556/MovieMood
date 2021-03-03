const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;
const customerSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
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
    mobile: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Phone is invalid please enter in correct formate');
            }
        }
    },
    image: {
        data: Buffer,
        contentType: String
    },
    gender: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required:true,
        trim: true
    },
    wallet: {
        type: Number,
        trim: true
    }
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;