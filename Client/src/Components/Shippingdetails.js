import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shippingdetails = () => {
  const style = {
    position: "bottom-center",
    backgroundColor: "rgb(17 24 39)",
    theme: "dark",
  };
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [mnumber, setMnumber] = useState(" ");
  const [city, setCity] = useState(" ");
  const [state, setState] = useState(" ");
  const [zip, setZip] = useState(" ");
  const register = useSelector((state) => state.register.value);
  const { email } = register;
  const handlesubmit = () => {
    console.log(fname, lname, address, mnumber, city, state, zip);
    fetch("http://localhost:5000/addshippingaddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        fname,
        lname,
        address,
        mnumber,
        city,
        state,
        zip,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        added();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const added = () =>
    toast.success("Shipping details Added Succesfully", style);
  return (
    <section className="text-gray-400 bg-gray-900 min-h-screen body-font">
      <ToastContainer />
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-3xl text-4xl font-medium title-font text-white mb-1">
          Shipping Details
        </h1>
        <h2 className="text-xl text-indigo-400 tracking-widest mt-10 font-medium title-font">
          Add Your Shipping Details
        </h2>
      </div>
      <div className="flex flex-wrap mx-auto pt-24 mb-6 ">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-first-name"
            type="text"
            placeholder="Aryan"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-last-name"
            type="text"
            placeholder="Patel"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mb-6">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-password"
          >
            Address:
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-outappearance-none"
            id="grid-password"
            type="text"
            placeholder=""
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Mobile No.
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-first-name"
            type="text"
            placeholder="91*********"
            onChange={(e) => setMnumber(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-city"
            type="text"
            placeholder="Nadiad"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-state"
          >
            State
          </label>
          <div className="relative">
            <input
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="grid-state"
              type="text"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-indigo-400 text-sm font-bold mb-2"
            htmlFor="grid-zip"
          >
            Zip
          </label>
          <input
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="grid-zip"
            type="text"
            placeholder="387002"
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-auto mt-10 mb-2">
        <button
          className="flex text-white bg-indigo-500 mx-auto border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Shippingdetails;
