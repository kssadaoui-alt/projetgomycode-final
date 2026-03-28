"use client";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Nav from "@/Components/Nav/Nav";
import Link from "next/link";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Page = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    uName: "",
    uEmail: "",
    uAddress: "",
    uPhone: "",
    uPass: "",
    confirmPassword: "",
    uType: "User",
  });

  // Regex Validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

  console.log(formData);

  // Input Handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const onSubmit = async (e) => {
    e.preventDefault();

    // Check is the email is valid
    if (formData.uEmail.trim().match(emailRegex) === null) {
      toast.error("Email is not valid");
    }

    // Check is the password is valid
    if (formData.uPass.trim().match(passRegex) === null) {
      toast.error(
        "Password must be 8-20 chars long, include uppercase, lowercase, number, and special character."
      );
    } else if (formData.uPass !== formData.confirmPassword) {
      toast.error("Passwords Not Match");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/register",
          formData
        );
        console.log(response.data);
        if (response.data.error === "User already exists") {
          toast.error("User already exists!");
        } else if (response.data.message === "User registered successfully") {
          window.location.href = "/Login";
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);
  return (
    <div>
      <Nav />
      <ToastContainer theme="dark" position="top-right" />
      <div className=" flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-2xl w-full bg-white  rounded-lg shadow-md mt-10 mb-12 p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Register <span className="text-orange-500">Now</span>
          </h2>
          <form className="space-y-5" onSubmit={onSubmit}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                onChange={onChangeHandler}
                value={formData.uName}
                name="uName"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                onChange={onChangeHandler}
                value={formData.uEmail}
                name="uEmail"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
            {/* Address Input */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="address"
                required
                onChange={onChangeHandler}
                value={formData.uAddress}
                name="uAddress"
                placeholder="Enter your address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Phone<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="phone"
                required
                onChange={onChangeHandler}
                value={formData.uPhone}
                name="uPhone"
                placeholder="Enter your phone"
                onInput={(e) => {
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>
            {/* Password Input */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="uPass"
                required
                maxLength={12}
                placeholder="Enter your password"
                onChange={onChangeHandler}
                value={formData.uPass}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 pr-10"
              />
              {/* Eye Icon for Password Visibility */}
              <div
                className="absolute top-9 right-3 cursor-pointer text-gray-500"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </div>
            </div>
            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="cPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                maxLength={12}
                required
                id="cPassword"
                onChange={onChangeHandler}
                value={formData.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 cursor-pointer rounded-md hover:bg-orange-600 transition duration-300"
              >
                Register Now
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Do Not have an account?{" "}
            <Link href={"/Login"} className="text-orange-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
