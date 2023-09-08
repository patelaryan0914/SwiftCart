import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("0");
  const [empty, SetEmpty] = useState("notempty");
  const [shipping, setShipping] = useState("notpresent");
  const navigate = useNavigate();
  const register = useSelector((state) => state.register.value);
  const { email } = register;
  const style = {
    position: "bottom-center",
    backgroundColor: "rgb(17 24 39)",
    theme: "dark",
  };
  useEffect(() => {
    fetch("http://localhost:5000/getforcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.cartproducts);
        setTotal(data.total);
        if (data.present === "present") {
          setShipping("present");
        } else {
          setShipping("notpresent");
        }
        if (
          data.msg === "Your Cart is empty" ||
          data.cartproducts.products.length === 0
        ) {
          SetEmpty("empty");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [email]);
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const dopayment = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }

    const data = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total }),
    }).then((t) => t.json());

    const options = {
      key: "rzp_test_NUWHhjnJv0jNAE", // Enter the Key ID generated from the Dashboard
      amount: data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.order.currency,
      order_id: data.order.id,
      handler: function (response) {
        // const razorpay_payment_id = response.razorpay_payment_id;
        navigate("/paymentsuceess");
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  // const buysuccess = () => {
  //   toast.success("Purchase Succesfull", style);
  // };
  const notpresent = () => {
    toast.error("Please add your shipping details", style);
  };
  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-screen">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-4xl font-medium title-font text-white mb-1">
            Cart
          </h1>
          <h2 className="text-xl text-indigo-400 tracking-widest font-medium title-font">
            Shop now and turn your desires into delivered delights!
          </h2>
        </div>
        {empty === "empty" ? (
          <h2 className="text-xl text-indigo-400 text-center pb-40 tracking-widest font-medium title-font">
            Your Cart is Empty Fill it up...
          </h2>
        ) : (
          products.map((product) => (
            <>
              <div
                className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
                key={product.products._id}
              >
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                  <Link to={{ pathname: "/item/" + product.products._id }}>
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg  object-cover object-center sm:mb-0 mb-4"
                      src={product.products.product_image}
                    />
                  </Link>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-white text-lg title-font font-medium mb-2">
                    {product.products.product_name}
                  </h2>
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl text-indigo-500">
                      ₹ {product.products.product_price}
                    </h1>
                    <div className="inline-flex">
                      <button
                        className="bg-white-500 text-lg text-indigo-400 py-2 px-4"
                        disabled
                      >
                        {product.productQuantity}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
        <div className="container mx-auto py-4 px-24 sm:px-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          {shipping === "present" ? (
            <button
              className="flex text-white bg-indigo-500 border-0 py-2 px-4 sm:px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={dopayment}
            >
              Buy
            </button>
          ) : (
            <button
              className="flex text-white bg-indigo-500 border-0 py-2 px-4 sm:px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={notpresent}
            >
              Buy
            </button>
          )}
          <h1 className="text-xl text-indigo-400 tracking-widest font-medium title-font mt-2 sm:mt-0">
            <span className="text-white">Total Amount: </span>₹ {total}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Cart;
