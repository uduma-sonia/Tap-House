import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bar pt-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex-initial ..." id="logo">
          <p>Tap House</p>
        </div>

        <div class="flex-initial links ...">
          <ul className="flex flex-row justify-between">
            <li className="font-semibold flex-initial ...">About Us</li>
            <li className="font-semibold flex-initial ...">Contact</li>
            <li className="font-semibold flex-initial ...">Menu</li>
          </ul>
        </div>

        <div class="flex-initial text-right login ...">
          <button class="bg-transparent text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// 35cdbc
