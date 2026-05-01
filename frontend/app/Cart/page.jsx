"use client";
import React, { useContext } from "react";
import Link from "next/link";
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
            <>
              {cartItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="bg-white shadow-lg border rounded-xl p-6 mb-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-bold text-gray-500">#{index + 1}</span>

                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={`http://localhost:8000/uploads/${item.image_1}`}
                        alt={item.productName}
                        className="w-20 h-20 rounded-lg object-cover shadow-md"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{item.productName}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition w-10 h-10 flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="font-bold text-xl min-w-[2rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition w-10 h-10 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-bold text-xl text-green-600">
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
                      onClick={() => {
                        toast.success("Item removed from cart");
                        removeFromCart(item.id);
                      }}
                      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Order Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-2xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items):</span>
                    <span className="font-bold">
                      Rs {new Intl.NumberFormat("en-US").format(
                        cartItems.reduce((total, item) => total + (item.discountedPrice || item.originalPrice || 0) * item.quantity, 0)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Shipping:</span>
                    <span>Rs 0.00</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black text-green-600 pt-4 border-t border-gray-200">
                    <span>Total:</span>
                    <span>
                      Rs {new Intl.NumberFormat("en-US").format(
                        cartItems.reduce((total, item) => total + (item.discountedPrice || item.originalPrice || 0) * item.quantity, 0)
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={clearCart}
                    className="flex-1 bg-gray-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-600 transition-all duration-300 shadow-lg"
                  >
                    Clear Cart
                  </button>
                  <Link href="/checkout" className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                    Proceed to Checkout →
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-medium text-gray-500 mb-4">Your cart is empty</p>
              <Link href="/shop" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Page;
