const registerController = require("./auth/registerController.js");
const loginController = require("./auth/loginController.js");
const fetchproduct = require("./products/productsController.js");

module.exports = { registerController, loginController, fetchproduct };
