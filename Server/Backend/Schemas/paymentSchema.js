const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: Number,
  id: String,
  method: String,
  contact: String,
  email: {
    type: String,
    required: true,
  },
  products: [
    {
      productid: {
        type: "String",
      },
      productQuantity: {
        type: "Number",
      },
    },
  ],
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
