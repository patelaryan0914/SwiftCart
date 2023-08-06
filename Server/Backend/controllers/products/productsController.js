const product = require("../../Schemas/productSchema");

const fetchproduct = {
  async fetchallproduct(req, res, next) {
    const products = await product.find();
    res.json(products);
  },
  async fetchoneproduct(req, res, next) {
    const { productid } = req.body;
    const singleproduct = await product.findOne({ _id: productid });
    res.json(singleproduct);
  },
};

module.exports = fetchproduct;
