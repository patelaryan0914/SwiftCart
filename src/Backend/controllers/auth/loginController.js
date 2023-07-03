import registration from "../../Schemas/registerSchema.js";
import bcrypt from "bcrypt";

const loginController = {
  async login(req, res, next) {
    // res.json({ msg: "LOGIN" });
    const { email, password } = req.body;
    try {
      const user = await registration.findOne({ email: email });

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json({ user });
      }
    } catch (err) {
      console.log(err);
    }
  },
};

export default loginController;
