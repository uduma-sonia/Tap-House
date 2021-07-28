import React, { useContext } from "react";
import { auth } from "../../Config/Config";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../Global/CartContext";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const history = useHistory();
  const { totalQty } = useContext(CartContext);

  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="nav-bar pt-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex-initial cursor-pointer" id="logo">
          <p>Tap House</p>
        </div>

        <div className="flex-initial links ...">
          <ul className="flex flex-row justify-between">
            <li className="font-semibold flex-initial cursor-pointer">
              About Us
            </li>
            <li className="font-semibold flex-initial cursor-pointer">
              Contact
            </li>
            <li className="font-semibold flex-initial cursor-pointer">Menu</li>
          </ul>
        </div>

        <div className="flex-initial text-right login ">
          {!user && (
            <button className="bg-transparent text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Login
            </button>
          )}

          {user && (
            <div className="flex justify-center items-center">
              <button
                onClick={handleLogout}
                className="bg-transparent text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Logout
              </button>
              <button className="bg-transparent text-white cursor-pointer font-semibold py-2 pl-4 rounded">
                {user}
              </button>

              <button className="bg-transparent cursor-pointer font-semibold py-2 px-1 rounded">
                <Link to="cartproducts" className="navlink">
                  <i className="fas fa-shopping-cart  text-white"></i>
                  <span className="text-white pl-2">{totalQty}</span>
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// 35cdbc
