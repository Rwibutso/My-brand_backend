const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{type: String,
    required: true
    },
    lastname:{type: String,
        required: true
        },
    email: {
        type: String,
        required:true,
        min: 6
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', userSchema);