const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: {
    type: "String",
  },
  product_brand_name: {
    type: "String",
  },
  product_category: {
    type: "String",
  },
  product_description: {
    type: "String",
  },
  product_price: {
    type: "Number",
  },
  product_reviews: {
    type: "Number",
  },
  product_image: {
    type: "String",
  },
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;
