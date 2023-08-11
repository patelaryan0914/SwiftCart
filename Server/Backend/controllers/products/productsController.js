const product = require("../../Schemas/productSchema");
const cart = require("../../Schemas/cartSchema");

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
  async addtocart(req, res, next) {
    const { email, productid } = req.body;
    const user = await cart.findOne({ email: email });
    if (!user) {
      const added = await cart.create({ email: email, products: productid });
      res.send(added);
    } else {
      const added = await cart.updateOne(
        { email: email },
        { $push: { products: productid } }
      );
      res.send(added);
    }
  },
};

module.exports = fetchproduct;
