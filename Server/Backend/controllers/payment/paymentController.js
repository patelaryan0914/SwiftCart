const payment = require("../../Schemas/paymentSchema");
const Razorpay = require("razorpay");
const crypto = require("crypto");

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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Database comes here

      await payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(400).json({
        success: false,
      });
    }
  },
};

module.exports = paymentdetails;
