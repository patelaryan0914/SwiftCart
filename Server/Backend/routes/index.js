const express = require("express");
const {
  loginController,
  registerController,
  fetchproduct,
} = require("../controllers");
const router = express.Router();

router.post("/login", loginController.login);

router.post("/register", registerController.register);

router.post("/otp", registerController.otp);

router.get("/getproducts", fetchproduct.fetchallproduct);

router.post("/getproduct", fetchproduct.fetchoneproduct);
module.exports = router;
