import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import { Outlet } from "react-router-dom"; 
import Contactus from "../Components/Contactus.js"; 

const Landing = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contactus/>
      <Footer />
    </>
  );
};

export default Landing;
