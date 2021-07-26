import React from "react";
import "../../Styles/Booking.css";
import lettuce from "../../images/lettuce.png";
import cabbage from "../../images/cabbage.png";

const AdvanceBooking = () => {
  return (
    <div className="a-booking relative my-28 overflow-x-hidden">
      <div className="flex justify-center items-center h-full ">
        <div className="form-container relative flex-initial h-80 w-3/5 bg-white ...">
          left
        </div>
      </div>

      <img src={lettuce} className="absolute -left-72 top-0 h-full" />

      <img src={cabbage} className="absolute -right-72 bottom-60 " />
    </div>
  );
};

export default AdvanceBooking;
