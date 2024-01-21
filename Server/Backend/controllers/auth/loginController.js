const registration = require("../../Schemas/registerSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = {
  async login(req, res, next) {
    // res.json({ msg: "LOGIN" });
    const { JWT_SECRET } = process.env;
    const { email, password } = req.body;
    try {
      const user = await registration.findOne({ email: email });

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ email: email }, JWT_SECRET, {
          expiresIn: "1 days",
        });
        res.json({ user, token, status: 200 });
      } else {
        res.json({ message: "User Not Found", status: 400 });
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = loginController;
