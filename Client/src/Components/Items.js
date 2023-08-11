import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Cart } from "../svgs/Cart.svg";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Items = () => {
  const [present, setPresent] = useState(" ");
  const [color, setColor] = useState("currentcolor");
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const productid = id;
  const register = useSelector((state) => state.register.value);
  const { email } = register;
  const style = {
    position: "bottom-center",
    backgroundColor: "rgb(17 24 39)",
    theme: "dark",
  };
  const addCart = () => {
    if (present === "notinCart") {
      fetch("http://localhost:5000/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          productid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          productadded();
          setPresent("inCart");
          setColor("#993a3a");
        })
        .catch((err) => {
          erroroc();
          console.log(err.message);
        });
    } else {
      fetch("http://localhost:5000/removefromcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          productid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          removed();
          setPresent("notinCart");
          setColor("currentcolor");
        })
        .catch((err) => {
          erroroc();
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/getproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productid, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.singleproduct);
        if (data.present !== 0) {
          setColor("#993a3a");
          setPresent("inCart");
        } else {
          setColor("currentcolor");
          setPresent("notinCart");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [productid, email, present]);
  const productadded = () => toast.success("Product Added Successfully", style);
  const removed = () => toast.success("Product Removed Successfully", style);
  const erroroc = () =>
    toast.error("Something Went Wrong Please try Again later....", style);
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.product_image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.product_brand_name}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {product.product_name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokelinewidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokelinewidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokelinewidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokelinewidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokelinewidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-3">{product.product_reviews} Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                <Link>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokelinewidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokelinewidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link>
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </Link>
              </span>
            </div>
            <p className="leading-relaxed">{product.product_description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                ₹ {product.product_price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <button
                className="rounded-full w-40 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-3"
                onClick={addCart}
              >
                <span className="mr-2">Add to Cart</span>
                <Cart fill={color} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
