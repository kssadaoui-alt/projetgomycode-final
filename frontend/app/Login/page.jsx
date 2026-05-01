"use client";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Nav from "@/Components/Nav/Nav";
import Link from "next/link";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Page = () => {
  const [formData, setFormData] = useState({
    uEmail: "",
    uPass: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending:", formData);

    // ✅ Email validation
    if (!formData.uEmail.trim().match(emailRegex)) {
      toast.error("Email is not valid");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        formData
      );

      console.log("Response:", response.data);

      // ✅ Check message
if (response.data.status === "ok" && response.data.message === "Found User") {
        toast.success("Login successful");
        window.location.href = "/";
} else if (response.data.status === "ok" && response.data.message === "Found Admin") {
        toast.success("Admin login successful");
        window.location.href = "/Admin/";
      } else {
        toast.error(response.data.message || "User not found");
      }
    } catch (err) {
      console.log("Error:", err.response);

      // ✅ Show real error from backend
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <Nav />
      <ToastContainer theme="dark" position="top-right" />

      <div className="flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-md mt-24 p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Login <span className="text-orange-500">Now</span>
          </h2>

          <form className="space-y-5" onSubmit={onSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                onChange={onChangeHandler}
                value={formData.uEmail}
                required
                name="uEmail"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-orange-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                required
                onChange={onChangeHandler}
                value={formData.uPass}
                type={showPassword ? "text" : "password"}
                name="uPass"
                maxLength={20} // ✅ FIXED
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-orange-400 pr-10"
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

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Login Now
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/Register" className="text-orange-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;