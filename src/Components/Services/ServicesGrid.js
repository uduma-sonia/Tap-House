import React from "react";

const ServicesGrid = () => {
  return (
    <div className="my-28 servicesGrid">
      <div className="flex justify-between ">
        {/* LEFT GRID */}
        <div className="flex-initial w-2/4 ">
          {/* LEFT GRID TOP  */}
          <div className="flex justify-between mb-3">
            <div className="flex-initial flex justify-center items-center w-2/4  h-52 service-left1">
              <i className="fas fa-utensils text-8xl"></i>
            </div>

            <div className="flex-initial flex flex-col justify-center items-start w-2/4 pl-5 h-52 service-left2">
              <h4>
                Advanced Table <br /> Booking
              </h4>

              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>

          {/* LEFT GRID BOTTOM  */}
          <div className="flex justify-between ">
            <div className="flex-initial w-2/4  h-52 service-left3">
              LEFT DOWN
            </div>

            <div className="flex-initial flex justify-center items-center w-2/4  h-52 service-left4">
              <i className="fas fa-utensils text-8xl"></i>
            </div>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="flex-initial w-2/4 border">RIGHT</div>
      </div>
    </div>
  );
};

export default ServicesGrid;
