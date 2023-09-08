import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Allproducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getproducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
      }),
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [category]);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product._id}>
              <Link
                to={{ pathname: "/item/" + product._id }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={product.product_image}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-indigo-400 text-xs tracking-widest title-font mb-1">
                  {product.product_category}
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  {product.product_name}
                </h2>
                <p className="mt-1"> ₹ {product.product_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allproducts;
