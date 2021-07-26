import React from "react";
import Navbar from "./Navbar";
import "../../Styles/Hero.css";
import heroImg from "../../images/heroImg.png";
import lettuce from "../../images/lettuce.png";

const Hero = ({ user }) => {
  return (
    <div className="container hero">
      <Navbar user={user} />

      <div className="underlay"></div>

      {/* HERO-SECTION */}

      <section className="hero-section">
        <div className="flex justify-between">
          <div className="flex-initial hero-section-left pt-24 ...">
            <h2 className="text-8xl tracking-wide">Food</h2>

            <h3>
              Discover Restaurant <br /> & Delicious Food
            </h3>

            <div className="flex search-container mt-6 h-12">
              <input
                type="text"
                placeholder="Search Menu"
                className="pl-20 bg-transparent w-80"
              />

              <label className="h-full w-36 text-center rounded-tl-full text-white font-bold text-xl pt-2">
                GO
              </label>
            </div>

            <div className="location absolute w-52 h-12 mt-14 left-0 rounded-r-full text-white text-xl text-center font-bold pt-2">
              <i className="fas fa-map-marker-alt pr-2 "></i>
              Florida
            </div>
          </div>

          <div className="flex-initial hero-section-right ...">
            <img className="hero-img absolute  z-20" src={heroImg} />
            <img className="lettuce absolute z-10" src={lettuce} />
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="intro mt-28">
        <div className="flex justify-between items-center">
          <div className="flex-initial w-6/12 ...">
            <h3 className="font-bold capitalize pl-4">
              some top restaurant for <br /> dining in or take away!
            </h3>
          </div>

          <div className="flex-initial w-6/12 text-gray-600 ...">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
