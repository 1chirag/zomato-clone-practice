// Libraries
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  orderDetails: [
    {
      food: {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
      },
      quantity: {
        type: Number,
        required: true,
      },
      paymode: { type: "String", required: true },
      status: { type: "String", required: true },
      paymentDetails: {
        itemTotal: {
          type: Number,
          required: true,
        },
        Promo: {
          type: Number,
          required: true,
        },
        tax: {
          type: Number,
          required: true,
        },
      },
    },
  ],
  orderRating: {
    type: Number,
    required: true,
  },
});
