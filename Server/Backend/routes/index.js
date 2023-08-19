const express = require("express");
const {
  loginController,
  registerController,
  fetchproduct,
  shippingdetails,
} = require("../controllers");
const router = express.Router();

router.post("/login", loginController.login);

router.post("/register", registerController.register);

router.post("/otp", registerController.otp);

router.post("/getproducts", fetchproduct.fetchallproductcategory);

router.post("/getproduct", fetchproduct.fetchoneproductid);

router.post("/addtocart", fetchproduct.addtocart);

// router.post("/removefromcart", fetchproduct.removefromcart);

router.post("/getforcart", fetchproduct.fetchproductfromcart);

router.post("/addshippingaddress", shippingdetails.addDetails);

module.exports = router;
