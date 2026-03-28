"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setSubmitting(true);

    try {
      await axios.post("http://localhost:8000/api/contact", {
        name: formData.username,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success("Message sent successfully!");
      setFormData({ username: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message right now. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8">
      <ToastContainer theme="dark" position="top-right" />
      <h2 className="text-3xl font-medium">
        Contact <span className="text-orange-500">Us</span>
      </h2>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-1">
          <label htmlFor="username" className="text-md font-medium">
            Name
          </label>
          <input
            value={formData.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="py-2 px-3 outline-2 outline-gray-300 focus:outline-gray-400 rounded-xs w-full mb-4 mt-2"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mb-1">
          <label htmlFor="email" className="text-md font-medium">
            Email Address
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="py-2 px-3 outline-2 outline-gray-300 focus:outline-gray-400 rounded-xs w-full mb-4 mt-2"
            placeholder="Enter Your Email Address"
          />
        </div>

        <div className="mb-1">
          <label htmlFor="subject" className="text-md font-medium">
            Subject
          </label>
          <input
            value={formData.subject}
            onChange={handleChange}
            type="text"
            name="subject"
            id="subject"
            className="py-2 px-3 outline-2 outline-gray-300 focus:outline-gray-400 rounded-xs w-full mb-4 mt-2"
            placeholder="Enter subject"
          />
        </div>

        <div className="mb-1">
          <label htmlFor="message" className="text-md font-medium">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            rows={5}
            name="message"
            id="message"
            className="py-2 px-3 outline-2 outline-gray-300 focus:outline-gray-400 rounded-xs w-full mb-4 mt-2"
            placeholder="Enter Your Message"
          />
        </div>

        <div className="mb-1">
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 bg-orange-500 py-2 rounded-xs text-white hover:bg-orange-600 transition-all duration-400 cursor-pointer disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
