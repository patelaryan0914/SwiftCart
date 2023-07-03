import express from "express";
import registerController from "../controllers/auth/registerController.js";
import loginController from "../controllers/auth/loginController.js";
const router = express.Router();

router.post("/login", loginController.login);

router.post("/register", registerController.register);

router.post("/otp", registerController.otp);

export default router;
