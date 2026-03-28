"use client";
import React, { useContext } from "react";
import CartContext from "@/app/Context/CartContext";
import Nav from "@/Components/Nav/Nav";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(CartContext);

  return (
    <div>
      <Nav />
      <ToastContainer theme="dark" />

      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
        <h3 className="text-3xl font-medium mt-6">Product Cart</h3>

        <div className="mt-8">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-gray-200 border-b-2 border-b-gray-400 w-full py-3 px-8 flex justify-between items-center gap-4 "
              >
                <span className="font-bold">#{index + 1}</span>

                <div className="flex items-center gap-4 w-1/4">
                  <img
                    src={`http://localhost:8000/uploads/${item.image_1}`}
                    alt={`Image of ${item.name}`}
                    className="w-20 h-20 rounded-md"
                  />
                  <span className="font-semibold">{item.productName}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className=" px-3 rounded text-gray-600 font-bold  text-lg cursor-pointer"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className=" px-3 rounded text-gray-600 font-bold text-lg cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Formatted Price */}

                <span className="font-semibold">
                  Rs{" "}
                  {item.discountedPrice
                    ? new Intl.NumberFormat("en-US").format(
                        item.discountedPrice * item.quantity
                      )
                    : new Intl.NumberFormat("en-US").format(
                        item.originalPrice * item.quantity
                      )}
                </span>

                <button
                  onClick={() =>
                    toast.success("Item removed from cart") &&
                    removeFromCart(item.id)
                  }
                  className="bg-black text-white px-3 py-1 rounded cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div>
              <p className="mt-8">Not Found Any Cart Items.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
