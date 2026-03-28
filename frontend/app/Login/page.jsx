"use client";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Nav from "@/Components/Nav/Nav";
import Link from "next/link";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Page = () => {
  const [formData, setFormData] = useState({
    uEmail: "",
    uPass: "",
  });
  console.log(formData);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (formData.uEmail.trim().match(emailRegex) === null) {
      toast.error("Email is not valid");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );
      console.log(response.data);

      if (response.data.message === "Found User") {
        window.location.href = "/";
      } else if (response.data.message === "Found Admin") {
        window.location.href = "/Admin/";
      } else {
        toast.error("Can Not Find User");
      }

      toast.success(response.data);
    } catch (err) {
      console.log(err);
      toast.error("Can Not Find User");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <Nav />
      <ToastContainer theme="dark" position="top-right" />
      <div className=" flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-2xl w-full bg-white  rounded-lg shadow-md mt-24 p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Login <span className="text-orange-500">Now</span>
          </h2>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                onChange={onChangeHandler}
                value={formData.uEmail}
                id="email"
                required
                name="uEmail"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                required
                onChange={onChangeHandler}
                value={formData.uPass}
                type={showPassword ? "text" : "password"}
                name="uPass"
                maxLength={12}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 pr-10"
              />
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

            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 cursor-pointer rounded-md hover:bg-orange-600 transition duration-300"
              >
                Login Now
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              href={"/Register"}
              className="text-orange-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
