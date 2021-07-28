import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import "../Styles/Products.css";

export const Products = () => {
  const { products } = useContext(ProductsContext);

  const { dispatch } = useContext(CartContext);

  return (
    <div className="container product-container mb-28">
      {/* {products.length !== 0 && <h1>Products</h1>} */}
      <div className="text-center">
        <h3 className="capitalize text-3xl font-bold">explore our menu</h3>

        <p className="text-gray-600 text-base mb-5">
          Bacon ipsum dolor amet jowl eiusmod ut venison in prosciutto <br />
          buffalo drumstick. Magna laboris cupidatat minim <br /> porchetta
          tongue. Tempor adipisicing chislic.
        </p>
      </div>

      <section className="grid grid-cols-3 gap-5 relative">
        {products.length === 0 && (
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        )}
        {products.map((product) => (
          <div
            className="product-card bg-white rounded-2xl shadow pb-3"
            key={product.ProductID}
          >
            <div className="product-img">
              <img
                src={product.ProductImg}
                alt="not found"
                className="w-96 h-80 rounded-t-2xl"
              />
            </div>

            <div className="flex justify-between p-3">
              <div className="product-name font-semibold capitalize text-lg">
                {product.ProductName}
              </div>

              <div className="product-price font-semibold text-lg">
                $ {product.ProductPrice}.00
              </div>
            </div>

            <div className="px-3">
              <button
                className="addcart-btn px-3 py-1 font-semibold text-white"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    id: product.ProductID,
                    product,
                  })
                }
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
