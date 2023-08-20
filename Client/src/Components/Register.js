import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Redux/Reducers/registerReducer.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const generateotp = () => {
    var otp = ~~(Math.random() * 1000000);
    if (otp.length === 6) {
      return otp;
    } else {
      otp = "1" + otp.toString(10);
      return parseInt(otp);
    }
  };
  const otp = generateotp();
  const style = {
    position: "bottom-center",
    theme: "dark",
  };
  const handleonclick = (e) => {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      cpassword === ""
    ) {
      edet();
    } else if (password === cpassword) {
      dispatch(
        register({
          username: username,
          email: email,
          password: password,
          cpassword: cpassword,
          otp: otp,
        })
      );
      sendotp();
      spass();
      navigate("/verifyotp");
    } else {
      epass();
    }
  };
  const sendotp = () => {
    fetch("https://swiftcart-ui77.onrender.com/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const epass = () => toast.error("Passwords Does not match.", style);
  const spass = () => toast.success("Otp Send to the email you entered", style);
  const edet = () => toast.error("Fill up all the required details", style);
  return (
    <section className="text-gray-400 bg-gray-900	min-h-screen body-font">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
        <div className=" bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto my-10 h-4/6 w-4/12 ">
          <h1 className="text-white text-xl font-medium title-font mb-5">
            Sign Up
          </h1>
          <div className="relative mb-5">
            <label
              htmlFor="username"
              className="leading-7 text-base text-gray-400"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-5">
            <label
              htmlFor="email"
              className="leading-7 text-base text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-5">
            <label
              htmlFor="password"
              className="leading-7 text-base text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-5">
            <label
              htmlFor="cpassword"
              className="leading-7 text-base text-gray-400"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              onChange={(e) => setCpassword(e.target.value)}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
            onClick={handleonclick}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
