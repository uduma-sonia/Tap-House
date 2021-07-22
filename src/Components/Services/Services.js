import React from "react";
import ServicesGrid from "./ServicesGrid";
import "../../Styles/Services.css";

const Services = () => {
  return (
    <div className="container">
      <section className="service mt-28">
        <div class="flex  items-center">
          <div class="flex-initial w-96 ...">
            <h3 className="font-bold capitalize pl-4 py-4">Our Services</h3>
          </div>

          <div class="flex-initial w-6/12 text-gray-600 ...">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <ServicesGrid />
    </div>
  );
};

export default Services;
