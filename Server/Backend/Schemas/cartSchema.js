const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  products: {
    type: ["String"],
  },
  email: {
    type: "String",
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
