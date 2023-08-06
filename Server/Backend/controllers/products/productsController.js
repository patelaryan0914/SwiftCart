const product = require("../../Schemas/productSchema");

const fetchproduct = {
  async fetchallproductcategory(req, res, next) {
    const { category } = req.body;
    if (category == "allproducts") {
      const productcategory = await product.find();
      res.json(productcategory);
    } else {
      const productcategory = await product.find({
        product_category: category,
      });
      res.json(productcategory);
    }
  },
  async fetchoneproductid(req, res, next) {
    const { productid } = req.body;
    const singleproduct = await product.findOne({ _id: productid });
    res.json(singleproduct);
  },
};

module.exports = fetchproduct;
