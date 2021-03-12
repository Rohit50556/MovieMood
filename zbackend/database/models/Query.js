const mongoose = require('mongoose');
const validator = require('validator');

const querySchema = new mongoose.Schema({
    userName: {
        type: String,
       trim:true,
       required:true
    },
    email: {
        type: String,
        trim: true,
        required:true
    },
    query: {
        type: String,
        trim: true,
        required:true
   
    }

});

const Query = mongoose.model("Query", querySchema);
module.exports = Query;



// const mongoose = require('mongoose');
// const validator = require('validator');

// const querySchema = new mongoose.Schema({
//     userName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('email is invalid please enter in correct formate');
//             }
//         }
//     },
//     mobile: {
//         type: String,
//         trim: true,
//         validate(value) {
//             if (!validator.isMobilePhone(value)) {
//                 throw new Error('Phone is invalid please enter in correct formate');
//             }
//         }
//     },
//     query: {
//         type: String,
//         trim: true,
//         required: true
//     }

// });

// const Query = mongoose.model("Query", querySchema);
// module.exports = Query;