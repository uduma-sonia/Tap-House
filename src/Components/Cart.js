import React, { useContext, useEffect } from "react";
import { CartContext } from "../Global/CartContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../Config/Config";
import "../Styles/Cart.css";

export const Cart = ({ user }) => {
  const { shoppingCart, dispatch, totalPrice } = useContext(CartContext);

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  });

  return (
    <div id="cart">
      <div className="container">
        <div className="flex justify-between pt-3 items-center mb-20">
          <div className="flex-initial cursor-pointer" id="logo">
            <p>Tap House</p>
          </div>

          <div>
            <Link className="backlink font-black no-underline" to="/">
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className="cart-container w-4/5">
          {shoppingCart.length === 0 && (
            <>
              <div>
                no items in your cart or slow internet causing trouble (Refresh
                the page) or you are not logged in
              </div>
            </>
          )}
          {/* TITLE BAR  */}
          <section className="cart-heading flex justify-between px-2 text-sm text-gray-500 font-medium">
            <div className="w-2/5 flex">
              <p>ITEM</p>
            </div>

            <div className="w-2/4 flex justify-between items-center">
              <div>UNIT PRICE</div>

              <div className="flex items-center">
                <p className="mb-0">QTY</p>
              </div>

              <div className="cart-price">SUBTOTAL</div>
            </div>
          </section>

          {shoppingCart &&
            shoppingCart.map((cart) => (
              <section className="cart-card flex justify-between px-2 my-3">
                {/* FIRST GRID */}
                <div className="w-2/5 flex">
                  <div className="h-20 w-20">
                    <img
                      src={cart.ProductImg}
                      alt="not found"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex w-2/4 flex-col text-center justify-between">
                    <div className=" h-2/4 cart-name font-medium capitalize">
                      {cart.ProductName}
                    </div>

                    <button className="delete-btn h-2/4">
                      <p
                        className="text-sm"
                        onClick={() =>
                          dispatch({ type: "DELETE", id: cart.ProductID, cart })
                        }
                      >
                        <i className="fa fa-trash p-2" aria-hidden="true"></i>
                        REMOVE
                      </p>
                    </button>
                  </div>
                </div>

                {/* SECOND GRID */}
                <div className="w-2/4 flex justify-between items-center">
                  <div className="cart-price-orignal">
                    ${cart.ProductPrice}.00
                  </div>

                  <div className="flex h-4/5 items-center">
                    <div className="quantity mr-3">{cart.qty}</div>

                    <div>
                      <i
                        className="fa fa-plus-circle mb-1 text-lg"
                        aria-hidden="true"
                        onClick={() =>
                          dispatch({ type: "INC", id: cart.ProductID, cart })
                        }
                      ></i>
                      <br />
                      <i
                        className="fa fa-minus-circle mt-2 text-lg"
                        aria-hidden="true"
                        onClick={() =>
                          dispatch({ type: "DEC", id: cart.ProductID, cart })
                        }
                      ></i>
                    </div>
                  </div>

                  <div className="cart-price">${cart.TotalProductPrice}</div>
                </div>
              </section>
            ))}

          {shoppingCart.length > 0 && (
            <div className="cart-summary flex justify-end mt-5">
              <div>
                <div>
                  <span className="mr-3 font-medium text-gray-900 text-base">
                    Total:
                  </span>
                  <span className="cart-summary-price text-lg font-bold">
                    ${totalPrice}.00
                  </span>
                </div>

                <div className="text-gray-400 text-sm my-4">
                  <p>Delivery Fee Not Included</p>
                </div>

                <Link to="cashout" className="cashout-link">
                  <button className="py-2 px-4 checkout-btn">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
