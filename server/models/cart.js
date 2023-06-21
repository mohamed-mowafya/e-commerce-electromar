const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: String,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Product quantity must be greater than 0."],
        default: 1,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
    min: [0, "Cart total cannot be less than 0."],
    default: 0,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
