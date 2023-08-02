import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category";

const Intro = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="ml-3 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome to SwiftCart,
            <br />
          </h1>
          <p className="mb-8 leading-relaxed">
            At SwiftCart, we strive to make your shopping journey swift,
            convenient, and enjoyable. Discover a wide selection of products
            ranging from electronics and fashion to home essentials and more,
            all just a few clicks away.
          </p>
          <div className="flex justify-center">
            <Link
              to="/products/allproducts"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6
              focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {" "}
              Start Shopping
            </Link>
          </div>
        </div>
        <div className="mr-3 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/buds.jpg"
          />
        </div>
      </div>
      <Category />
    </section>
  );
};

export default Intro;
