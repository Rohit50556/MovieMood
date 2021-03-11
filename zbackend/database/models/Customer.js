const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;
const customerSchema = mongoose.Schema({
    fname: {
        type: String,
        trim: true
    },
    lname: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
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
    }
    ,
    gender: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    wallet: {
        type: Number,
        trim: true
    },
    city: {
        type: String,
        trim: true
    }
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;













// const mongoose = require('mongoose');
// const validator = require('validator');

// const { Schema } = mongoose;
// const customerSchema = mongoose.Schema({
//     fname: {
//         type: String,
//         trim: true
//     },
//     lname: {
//         type: String,
//         trim: true
//     },
//     username: {
//         type: String,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('email is invalid please enter in correct formate');
//             }
//         }
//     }
//     ,
//     gender: {
//         type: String,
//         trim: true
//     },
//     address: {
//         type: String,
//         trim: true
//     },
//     wallet: {
//         type: Number,
//         trim: true
//     }
// });


// const Customer = mongoose.model('Customer', customerSchema);

// module.exports = Customer;