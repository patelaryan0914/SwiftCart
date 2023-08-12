import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Redux/Reducers/registerReducer.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const style = {
    position: "bottom-center",
    theme: "dark",
  };
  const handleonclick = (e) => {
    e.preventDefault();
    handlelogin();
  };
  const handlelogin = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        slogin();
        dispatch(
          register({
            username: data.user.username,
            email: data.user.email,
            token: data.token,
            islogin: "on",
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // const elogin = () => toast.error("Passwords Does not match.", style);
  const slogin = () => toast.success("Login Successful", style);
  return (
    <section className="text-gray-400 bg-gray-900	min-h-screen body-font">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
        <div className=" bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto my-10 h-4/6 w-4/12 ">
          <h1 className="text-white text-xl font-medium title-font mb-5">
            Log in
          </h1>
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
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
            onClick={handleonclick}
          >
            Submit
          </button>
          {/* <NavLink className="text-sm mt-4 text-center">
            Forgot password?
          </NavLink> */}
          <h4 className="text-center my-4">OR</h4>
          <Link
            to="/register"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
          >
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
