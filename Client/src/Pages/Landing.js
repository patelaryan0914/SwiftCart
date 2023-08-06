import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import { Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Landing;
