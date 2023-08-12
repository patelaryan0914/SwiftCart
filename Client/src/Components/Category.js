import React from "react";
import { Link } from "react-router-dom";
import Contactus from "./Contactus.js";

const Category = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-6 px-6 relative">
                <Link to="/products/smartphones">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="/images/bgsmartphone.jpg"
                  />
                </Link>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Smart Phones
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Link to="/products/smartwatch">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="/images/bgwatch.png"
                  />
                </Link>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Smart Watch
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Link to="/products/buds">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="/images/bgbuds.png"
                  />
                </Link>
                <div className=" relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Buds
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Link to="/products/headphones">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="/images/bgheadphones.jpg"
                  />
                </Link>
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Headphones
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactus />
    </>
  );
};

export default Category;
