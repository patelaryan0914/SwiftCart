import registration from "../../Schemas/registerSchema.js";
import sendEmail from "../../../Emails/Otp.js";
import bcrypt from "bcrypt";

const registerController = {
  async register(req, res, next) {
    // console.log(req.body);
    // res.json({ msg: "REGISTER" });
    const { username, email, password } = req.body;
    try {
      const hashedpassword = await bcrypt.hash(password, 10);
      const done = await registration.create({
        username: username,
        email: email,
        password: hashedpassword,
      });
      if (done) {
        res.json({ msg: "done" });
      }
    } catch (e) {
      console.log(e);
    }
  },
  async otp(req, res, next) {
    const { email, otp } = req.body;
    console.log(email, otp);
    sendEmail(email, otp);
    res.json({ msg: "OTP" });
  },
};

export default registerController;
