"use client";
import React from "react";
import Link from 'next/link';
import Nav from "@/Components/Nav/Nav";
import { useState, useEffect } from 'react';

const SuccessPage = () => {
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setOrderId(params.get('session_id'));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thank you for your purchase! Your order has been confirmed and will be processed shortly.
          </p>
          {orderId && (
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-green-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Order ID: #{orderId.slice(-8)}</h3>
              <p className="text-sm text-gray-500">Keep this for your records</p>
            </div>
          )}
          <div className="space-y-4">
            <Link 
              href="/shop"
              className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Continue Shopping
            </Link>
            <Link 
              href="/account/orders" 
              className="block w-full bg-white border-2 border-gray-200 text-gray-800 py-4 px-8 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              View Orders
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              You'll receive a confirmation email shortly. Need help?{' '}
              <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

