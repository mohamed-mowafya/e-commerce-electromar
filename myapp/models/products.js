var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Product must have a name']
    },
    description:{
        type: String,
        required: [true,'Product must have a description']
    },
    price:{
        type: Number,
        required : [true,'A price is required for the product']
    },
    image :{
        data:Buffer,
        contentType: String
    }

});

module.exports = mongoose.model('Product', productSchema);