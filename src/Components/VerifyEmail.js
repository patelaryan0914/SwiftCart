import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const [cotp, setCotp] = useState("");
  const register = useSelector((state) => state.register.value);
  const { username, email, password, otp } = register;
  const style = {
    position: "bottom-center",
    theme: "light",
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, otp);
    // eslint-disable-next-line
    if (otp == cotp) {
      sendData();
      snotify();
    } else {
      enotify();
    }
  };
  const sendData = () => {
    fetch("http://localhost:5000/register", {
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
  return (
    <div className="verifyemail">
      <ToastContainer />
      <label htmlFor="cotp">Enter Your Otp:</label>
      <input type="text" id="cotp" onChange={(e) => setCotp(e.target.value)} />
      <button type="submit" onClick={handlesubmit}>
        Submit
      </button>
    </div>
  );
};

export default VerifyEmail;
