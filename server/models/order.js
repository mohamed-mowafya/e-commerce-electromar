var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: String,
    },
    orderNo: {
      type: Number,
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
          min: [1, "Product quantity needs be greater than 0."],
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("Order", orderSchema);
