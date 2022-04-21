var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);