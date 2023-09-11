import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  return <section className="text-gray-400 bg-gray-900 body-font min-h-screen">
  {/* <ToastContainer /> */}
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-4xl font-medium title-font text-white mb-1">
        Payment Successfull
      </h1>
      <h2 className="text-xl text-indigo-400 tracking-widest font-medium title-font">
        Your Payment id is....
      </h2>
    </div>
    <h2 className="text-xl text-indigo-400 text-center pb-40 tracking-widest font-medium title-font">
        Your Cart is Empty Fill it up...
      </h2>
    </div>
</section>;
};

export default PaymentSuccess;
