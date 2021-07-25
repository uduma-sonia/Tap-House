import React from "react";
import "../Styles/Download.css";

const Download = () => {
  return (
    <div className=" download-container">
      <div className="container">
        <div class="flex justify-between border h-96">
          <div class="flex-initial flex flex-col justify-center items-start border w-2/4">
            <h3 className="capitalize text-3xl font-bold pl-4 py-1">
              Download app for <br /> exciting deals
            </h3>

            <p className="text-gray-600 text-base mb-5 ml-4">
              Bacon ipsum dolor amet jowl eiusmod ut venison <br />
              buffalo drumstick. Magna laboris cupidatat minim <br /> porchetta
              tongue. Tempor adipisicing chislic.
            </p>
          </div>

          <div class="flex-initial border w-2/4">RIGHT</div>
        </div>
      </div>
    </div>
  );
};

export default Download;
