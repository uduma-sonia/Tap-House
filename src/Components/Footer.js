import React from "react";
import "../Styles/Footer.css";
import leaf from "../images/leaf.png";

const Footer = () => {
  return (
    <footer className="container pt-36 pb-10 relative">
      <div class="flex justify-center items-center">
        <div class="flex-initial text-center">
          <h3 className="capitalize text-3xl font-semibold">
            get notified <br /> about amazing new recipes
          </h3>

          <p className="text-gray-600 text-base mb-5 ml-4 px-64">
            Bacon ipsum dolor amet jowl eiusmod ut venison buffalo drumstick.
            Magna laboris cupidatat minim porchetta tongue.
          </p>

          <form className="flex justify-center mb-5">
            <div className="flex justify-center items-center w-1/4 h-12 bg-white rounded-3xl">
              <input
                className="h-full outline-none text-xl"
                placeholder="E-Mail"
              />
              <i class="fas fa-arrow-circle-right"></i>
            </div>
          </form>

          <ul className="text-gray-600 text-base font-semibold flex capitalize justify-center">
            <li>company</li>
            <li className="mx-5">learn more</li>
            <li>get in touch</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <ul className="text-base flex items-center justify-end">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li className="mx-4">
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li className="ml-5 font-bold">@2021 Tap House</li>
        </ul>
      </div>

      <img src={leaf} className="h-96 w-96 absolute top-0 -left-24" />
    </footer>
  );
};

export default Footer;
