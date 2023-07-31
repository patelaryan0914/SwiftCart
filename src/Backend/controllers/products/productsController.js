const product = require("../../Schemas/productSchema");

const fetchproduct = {
  async fetchallproduct(req, res, next) {
    const user = await product.find();
    res.json(user);
  },
};

module.exports = fetchproduct;
