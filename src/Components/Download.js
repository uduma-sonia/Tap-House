import React from "react";
import "../Styles/Download.css";
import downloadImg from "../images/downloadImg.png";
import cabbage from "../images/cabbage.png";

const Download = () => {
  return (
    <div className="relative download-container py-20 z-10">
      <div className="container">
        <div className="flex justify-between h-96">
          <div className="flex-initial flex flex-col justify-center items-start w-2/4 download-container-left">
            <h3 className="capitalize text-3xl font-bold pl-4 py-1">
              Download app for <br className="break" /> exciting deals
            </h3>

            <p className="text-gray-600 text-base mb-5 ml-4 pr-36">
              Bacon ipsum dolor amet jowl eiusmod ut venison buffalo drumstick.
              Magna laboris cupidatat minim porchetta tongue. Tempor adipisicing
              chislic.
            </p>
          </div>

          <div className="relative flex-initial w-2/4 download-container-right">
            <img
              src={downloadImg}
              alt="downloadImg"
              className="absolute -top-20 z-20 phone-img"
            />
            <img
              src={cabbage}
              alt="cabbage"
              className="absolute -top-10 -left-16 z-0 download-cabbage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;

// drop-shadow-lg
