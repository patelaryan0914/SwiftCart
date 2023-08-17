const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
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
  email: {
    type: "String",
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
