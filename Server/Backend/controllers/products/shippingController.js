const shipping = require("../../Schemas/shippingSchema");

const shippingdetails = {
  async addDetails(req, res, next) {
    const { email, fname, lname, address, mnumber, city, state, zip } =
      req.body;
    const added = await shipping.create({
      email: email,
      first_Name: fname,
      last_Name: lname,
      address: address,
      mobile_No: mnumber,
      city: city,
      state: state,
      zip_code: zip,
    });
    res.send(added);
  },
};

module.exports = shippingdetails;
