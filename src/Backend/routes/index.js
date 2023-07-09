const express = require("express");
const { loginController, registerController } = require("../controllers");
const router = express.Router();

router.post("/login", loginController.login);

router.post("/register", registerController.register);

router.post("/otp", registerController.otp);

module.exports = router;
