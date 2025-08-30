import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "../styles/Homepage.css";
import FlipTimer from "../components/FlipTimer";
import Desc from "../components/Desc";
import Footer from "../components/Footer";
function Homepage() {
  return(
    <>
      <div className="bg">
      <div className="page-container">
        <Navbar />
        <Title />
        <FlipTimer />
        <Desc />
        <Footer />
        </div>
      </div>
    </>
  )
}
export default Homepage