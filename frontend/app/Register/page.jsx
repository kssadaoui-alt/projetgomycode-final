"use client";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Nav from "@/Components/Nav/Nav";
import Link from "next/link";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Page = () => {
  // ✅ State
  const [formData, setFormData] = useState({
    uName: "",
    uEmail: "",
    uAddress: "",
    uPhone: "",
    uPass: "",
    confirmPassword: "",
    uType: "User",
  });

  // ✅ Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,20}$/;

  // ✅ Handle input
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit
  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending:", formData);

// ✅ Email validation
    if (!formData.uEmail.trim().match(emailRegex)) {
      toast.error("Email is not valid");
      return;
    }

// ✅ Password validation
    if (!formData.uPass.trim().match(passRegex)) {
      toast.error(
        "Password must be 8-20 chars, include uppercase, lowercase, number, and special character."
      );
      return;
    }

// ✅ Confirm password
    if (formData.uPass !== formData.confirmPassword) {
      toast.error("Passwords Not Match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        formData
      );

      console.log("Response:", response.data);

      if (response.data.error === "User already exists") {
        toast.error("User already exists!");
      } else if (response.data.message === "User registered successfully") {
        toast.success("Account created successfully 🎉");
        window.location.href = "/Login";
      } else {
        toast.error(response.data.message || "Unexpected response");
      }
    } catch (err) {
      console.log("Error:", err.response);

      toast.error(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  // ✅ Show password
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <Nav />
      <ToastContainer theme="dark" position="top-right" />

      <div className="flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-md mt-10 mb-12 p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Register <span className="text-orange-500">Now</span>
          </h2>

          <form className="space-y-5" onSubmit={onSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name *
              </label>
              <input
                type="text"
                name="uName"
                required
                value={formData.uName}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="uEmail"
                required
                value={formData.uEmail}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address *
              </label>
              <input
                type="text"
                name="uAddress"
                required
                value={formData.uAddress}
                onChange={onChangeHandler}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone *
              </label>
              <input
                type="text"
                name="uPhone"
                required
                value={formData.uPhone}
                onChange={onChangeHandler}
                maxLength={10}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                Password *
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="uPass"
                required
                value={formData.uPass}
                onChange={onChangeHandler}
                maxLength={20} // ✅ FIXED
                className="w-full px-4 py-2 border rounded-md pr-10"
              />

              <div
                className="absolute top-9 right-3 cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={onChangeHandler}
                maxLength={20} // ✅ FIXED
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
            >
              Register Now
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/Login" className="text-orange-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;