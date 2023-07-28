import React from "react";
import bgwatch from "../img/bgwatch.png";
import bgheadphones from "../img/bgheadphones.jpg";
import bgbuds from "../img/bgbuds.png";
import { Link } from "react-router-dom";
// import { bgwatch } from "../img/bgbuds.png";

const Category = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-6 px-6 relative">
              <Link to="/products/headphones">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={bgheadphones}
                />
              </Link>
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-white font-medium title-font mb-2">
                  Headphones
                </h2>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-10 px-6 relative">
              <Link to="/products/smartwatch">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={bgwatch}
                />
              </Link>
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-white font-medium title-font mb-2">
                  Smart Watch
                </h2>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-10 px-6 relative">
              <Link to="/products/buds">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={bgbuds}
                />
              </Link>
              <div class=" relative z-10 w-full">
                <h2 class="text-xl text-white font-medium title-font mb-2">
                  Buds
                </h2>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="flex flex-wrap w-full bg-gray-800 hover:scale-110 ease-in duration-500 sm:py-24 py-16 sm:px-10 px-6 relative">
              <Link to="/products/speakers">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={bgheadphones}
                />
              </Link>
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-white font-medium title-font mb-2">
                  Speakers
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
