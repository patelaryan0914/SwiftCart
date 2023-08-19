import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Votp = () => {
  const [cotp, setCotp] = useState("");
  const navigate = useNavigate();
  const register = useSelector((state) => state.register.value);
  const { username, email, password, otp } = register;
  const style = {
    position: "bottom-center",
    backgroundColor: "rgb(17 24 39)",
    theme: "dark",
  };
  const handleVerify = () => {
    console.log(username, email, password, otp, cotp);
    // eslint-disable-next-line
    if (cotp == "") {
      enotify();
    }
    // eslint-disable-next-line
    else if (otp == cotp) {
      sendData();
      snotify();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
  const sendData = () => {
    fetch("https://swiftcart-xyih.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
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
  const enotify = () => toast.error("Enter the correct otp", style);
  const snotify = () => toast.success("Registration Successfull....", style);
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      // Move focus to the next input field
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
    setCotp((prevOtp) => {
      const newOtp = prevOtp.split("");
      newOtp[index] = value;
      return newOtp.join("");
    });
  };
  return (
    <section className="min-h-screen bg-gray-900 flex items-center">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto my-10 h-4/6 w-4/12">
          <h2 className="text-white text-xl font-medium title-font mb-7">
            Enter OTP
          </h2>
          <div className="flex justify-center mb-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                id={`otp-input-${index}`}
                name={`otp-input-${index}`}
                maxLength={1}
                className="w-12 h-12 ml-2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-white text-center text-2xl outline-none transition-colors duration-200 ease-in-out"
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
          <NavLink
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
            onClick={handleVerify}
          >
            Verify
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Votp;
