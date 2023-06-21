var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product must have a name"],
  },
  description: {
    type: String,
    required: [true, "Product must have a description"],
  },
  price: {
    type: Number,
    required: [true, "A price is required for the product"],
  },
  image: {
    fileName: String,
    contentType: String,
  },
});

productSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Product", productSchema);
