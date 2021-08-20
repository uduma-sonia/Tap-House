import React from "react";
import "../../Styles/Booking.css";
import burger from "../../images/burger.jpg";
import pizza from "../../images/pizza.jpg";
import AdvanceBooking from "./AdvanceBooking";

const Booking = () => {
  return (
    <div className="booking mt-28 px-1">
      <div className="flex booking-inner">
        {/* PIZZA */}
        <div className="pizza-container flex-initial relative w-96 h-80 rounded-3xl mr-4">
          <img
            alt="pizza"
            src={pizza}
            className="h-full object-cover rounded-3xl"
          />

          <div className="booking-overlay absolute bottom-0 w-full h-3/6 z-10 rounded-b-3xl px-4">
            <p className="text-white text-xl font-bold pt-2">
              Pizza al tegamino
            </p>

            <p className="text-white text-base">
              Bacon ipsum dolor amet boudin kielbasa pancetta
            </p>
          </div>

          <div className="order absolute bottom-5 right-0 z-30 bg-white h-8 w-32 rounded-l-full text-center font-bold pt-1 cursor-pointer">
            Order Now
          </div>
        </div>

        {/* BURGER */}
        <div className="burger-container flex-initial relative w-96 h-80 rounded-3xl">
          <img
            alt="burger"
            src={burger}
            className="h-full object-fit rounded-3xl"
          />

          <div className="booking-overlay absolute bottom-0 w-full h-3/6 z-10 rounded-b-3xl px-4">
            <p className="text-white text-xl font-bold pt-2">Bison Burger</p>

            <p className="text-white text-base">
              Bacon ipsum dolor amet boudin kielbasa pancetta
            </p>
          </div>

          <div className="order absolute bottom-5 right-0 z-30 bg-white h-8 w-32 rounded-l-full text-center font-bold pt-1 cursor-pointer">
            Order Now
          </div>
        </div>
      </div>

      <AdvanceBooking />
    </div>
  );
};

export default Booking;
