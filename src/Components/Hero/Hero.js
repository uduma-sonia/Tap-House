import React from "react";
import Navbar from "./Navbar";
import "../../Styles/Hero.css";

const Hero = () => {
  return (
    <div className="container  hero">
      <Navbar />
      {/* SIDE UNDERLAY */}
      <div className="underlay"></div>
      <section></section>
    </div>
  );
};

export default Hero;
