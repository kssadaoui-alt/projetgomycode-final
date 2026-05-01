"use client";
import React, { useState, useContext } from "react";
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import Nav from "@/Components/Nav/Nav";
import CartContext from "@/app/Context/CartContext";
import { AppContext } from "@/app/Context/AppContext"; // use named export for context
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Load Stripe with test pk (replace with env)
const stripePromise = loadStripe('pk_test_51ABC123your_pk_test_key_here_from_stripe_dashboard'); // Update with real pk_test_

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useContext(AppContext); // Assume user from auth context
  const [loading, setLoading] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Pakistan',
    phone: ''
  });
  const [clientSecret, setClientSecret] = useState('');

  const totalAmount = cartItems.reduce((total, item) => total + (item.discountedPrice || item.originalPrice || 0) * item.quantity, 0);

  const handleAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return toast.error("Cart is empty");

    setLoading(true);
    try {
      // Create order on backend
      const response = await fetch('http://localhost:8000/api/orders/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?._id || 'guest_' + Date.now(), // Guest if no user
          cartItems: cartItems.map(item => ({
            productId: item.id,
            productName: item.productName,
            image_1: item.image_1,
            quantity: item.quantity,
            price: item.discountedPrice || item.originalPrice
          })),
          shippingAddress,
          totalAmount
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Checkout failed');

      setClientSecret(data.clientSecret);

      // Initialize Stripe Elements and confirm
      const stripe = await stripePromise;
      const { error } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: shippingAddress.fullName,
            phone: shippingAddress.phone,
          },
        }
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Payment successful!');
        clearCart();
        window.location.href = '/checkout/success?session_id=' + data.orderId;
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [elements, setElements] = useState(null);

  React.useEffect(() => {
    if (clientSecret && stripePromise) {
      stripePromise.then(stripe => {
        const newElements = stripe.elements();
        const cardElement = newElements.create('card');
        cardElement.mount('#card-element');
        setElements({ card: cardElement });
      });
    }
  }, [clientSecret]);

  if (cartItems.length === 0) {
    return (
      <div>
        <Nav />
        <div className="max-w-2xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">No items in cart</h2>
          <Link href="/cart" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">
            View Cart
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <ToastContainer theme="light" position="top-right" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Shipping Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Shipping Address</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={shippingAddress.fullName}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={shippingAddress.address}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="123 Street Name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={shippingAddress.city}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={shippingAddress.postalCode}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={shippingAddress.phone}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+92 300 1234567"
                />
              </div>
              <div id="card-element" className="p-4 border border-gray-300 rounded-xl bg-white"></div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 disabled:opacity-50"
              >
                {loading ? 'Processing...' : `Pay Rs ${totalAmount.toLocaleString()}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-xl sticky top-24">
            <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-b-0">
                  <img src={`http://localhost:8000/uploads/${item.image_1}`} alt={item.productName} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.productName}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-lg">
                    Rs {((item.discountedPrice || item.originalPrice) * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-2xl text-green-600 font-black">Rs {totalAmount.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl">
              <h4 className="font-bold text-green-800 mb-2">Secure Payment</h4>
              <p className="text-sm text-green-700">Protected by Stripe. Test card: 4242 4242 4242 4242</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

