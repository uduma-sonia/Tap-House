import React from "react";
import "../../Styles/Booking.css";
import lettuce from "../../images/lettuce.png";
import cabbage from "../../images/cabbage.png";

const AdvanceBooking = () => {
  return (
    <div className="a-booking relative my-28 overflow-x-hidden">
      <div className="flex justify-center items-center h-full ">
        <div className="form-container relative flex-initial h-80 w-3/5 p-4 bg-white text-center">
          <h3 className="capitalize font-bold">advance booking</h3>
          <p className="text-gray-600">
            Let us send you available dates <br /> and you pick the one that
            suits you
          </p>

          <form className="flex justify-center mt-14">
            <div className="flex flex-col items-start">
              <p className="mb-0 pl-2 font-semibold">E-Mail</p>
              <input
                type="text"
                placeholder="johndoe@example.com"
                className="border-gray-400 border-2 h-10 pl-2"
              />
            </div>

            <div className="mx-3 flex flex-col items-start">
              <p className="mb-0 pl-2 font-semibold">Month</p>
              <input
                type="text"
                placeholder="July"
                className="border-gray-400 border-2 h-10 pl-2"
              />
            </div>

            <div className="flex items-end">
              <button className="submit border-gray-50 border-2 h-10 w-28 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <img
        src={lettuce}
        alt="lettuce"
        className="absolute -left-72 top-0 h-full"
      />

      <img
        src={cabbage}
        alt="cabbage"
        className="absolute -right-72 bottom-60 a-cabbage"
      />
    </div>
  );
};

export default AdvanceBooking;
