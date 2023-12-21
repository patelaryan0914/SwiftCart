const payment = require("../../Schemas/paymentSchema");
const cart = require("../../Schemas/cartSchema");
const Razorpay = require("razorpay");
const crypto = require("crypto");
function pick(obj, ...props) {
  return props.reduce(function (result, prop) {
    result[prop] = obj[prop];
    return result;
  }, {});
}
const paymentdetails = {
  async payment(req, res, next) {
    try {
      const { amount } = req.body;
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET,
      });
      const options = {
        amount: Number(amount * 100),
        currency: "INR",
      };
      const order = await instance.orders.create(options);
      res.status(200).json({
        success: true,
        order,
      });
    } catch (err) {
      console.log(err);
    }
  },
  async paymentverify(req, res, next) {
    const secret = process.env.RAZORPAY_API_SECRET;
    const crypto = require("crypto");

    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest === req.headers["x-razorpay-signature"]) {
      const obj = req.body.payload.payment.entity;
      const takeobj = pick(obj, "amount", "email", "id", "method", "contact");
      const object = await cart
        .findOne({ email: takeobj.email })
        .select("-_id -email -__v");
      const objf = pick(object, "products");
      const finalobj = { ...takeobj, ...objf };
      console.log(finalobj);
      await payment.create(finalobj);
    } else {
      res.json({ msg: "payment not Received" });
    }
    res.json({ status: "ok" });
  },
};

module.exports = paymentdetails;
