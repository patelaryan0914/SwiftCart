const mongoose = require("mongoose");
const shippingSchema = new mongoose.Schema({
  email: {
    type: "String",
  },
  first_Name: {
    type: "String",
  },
  last_Name: {
    type: "String",
  },
  address: {
    type: "String",
  },
  mobile_No: {
    type: "String",
  },
  city: {
    type: "String",
  },
  state: {
    type: "String",
  },
  zip_code: {
    type: "String",
  },
});

const Shipping = mongoose.model("shippingDetails", shippingSchema);

module.exports = Shipping;
