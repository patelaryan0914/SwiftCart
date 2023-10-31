import React from "react";
import { useLocation } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const location = useLocation();
  const razorpay_payment_id = location.state.razorpay_payment_id;
  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-screen">
      {/* <ToastContainer /> */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-4xl font-medium title-font text-white mb-1">
            Payment Successfull
          </h1>
          <h2 className="text-xl text-indigo-400 tracking-widest font-medium title-font">
            Your Payment id is....{razorpay_payment_id}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
