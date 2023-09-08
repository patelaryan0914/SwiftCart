const registerController = require("./auth/registerController.js");
const loginController = require("./auth/loginController.js");
const fetchproduct = require("./products/productsController.js");
const shippingdetails = require("./products/shippingController.js");
const paymentdetails = require("./payment/paymentController.js");
module.exports = {
  registerController,
  loginController,
  fetchproduct,
  shippingdetails,
  paymentdetails,
};
