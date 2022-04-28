var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    registrationDate:{
        type: Date,
        default: Date.now
    },
    admin:{
        type:Boolean,
        required:true
    },
 
});

module.exports = mongoose.model('User', userSchema);