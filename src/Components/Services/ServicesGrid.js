import React from "react";
import delivery from "../../images/delivery.png";
import burger from "../../images/burger.svg";
import eating from "../../images/eating.svg";

const ServicesGrid = () => {
  return (
    <div className="my-28 relative z-10 servicesGrid">
      {/* <div className="bg-dot z-0"></div> */}
      <div className="flex justify-between z-40 ">
        {/* LEFT GRID */}
        <div className="flex-initial w-2/4 z-50">
          {/* LEFT GRID TOP  */}
          <div className="flex justify-between mb-3">
            <div className="flex-initial flex justify-center items-center w-2/4  h-52 service-left1">
              <img src={eating} alt="eatingpics" className="w-32" />
            </div>

            <div className="flex-initial flex flex-col justify-center items-center text-center w-2/4  h-52 service-left2">
              <h4>
                Advanced Table <br /> Booking
              </h4>

              <p className="text-sm text-gray-600 ">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>

          {/* LEFT GRID BOTTOM  */}
          <div className="flex justify-between ">
            <div className="flex-initial flex flex-col justify-center items-center text-center  w-2/4 h-52 service-left3">
              <h4>
                24/7 Food <br /> Service
              </h4>

              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed do
              </p>
            </div>

            <div className="flex-initial relative flex justify-center items-center w-2/4  h-52 service-left4">
              <img src={burger} alt="burger" className="w-32 " />
            </div>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="flex-initial flex flex-col justify-center items-center text-center z-50 w-2/4 ml-5 service-right">
          <img src={delivery} alt="delivery" className="w-64 pb-3" />

          <h4>
            Delivery At Your <br /> Door Steps
          </h4>
          <p className="text-sm text-gray-600 pb-3">
            {" "}
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
