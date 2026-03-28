"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProductForm = () => {
  // Store Product Data
  const [formData, setFormData] = useState({
    productName: "",
    originalPrice: "",
    discountedPrice: "",
    availability: "",
    status: "",
    details: "",
    brand: "",
    type: "",
    tag: "",
    image_1: File,
    image_2: File,
    image_3: File,
  });

  // Handle  Input Changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      // Handle image file inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      // Handle regular text/number inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [];

    if (!formData.productName) requiredFields.push("Product Name");
    if (!formData.originalPrice) requiredFields.push("Original Price");
    if (!formData.availability) requiredFields.push("Availability");
    if (!formData.status) requiredFields.push("Status");
    if (!formData.details) requiredFields.push("Details");
    if (!formData.brand) requiredFields.push("Brand");
    if (!formData.type) requiredFields.push("Type");
    if (!formData.tag) requiredFields.push("Tag");
    if (!formData.image_1) requiredFields.push("Image 01");
    if (!formData.image_2) requiredFields.push("Image 02");
    if (!formData.image_3) requiredFields.push("Image 03");

    // Return Error Response
    if (requiredFields.length > 0) {
      toast.error(` ${requiredFields.join(", ")} field(s) are required!`);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/add-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure files are properly handled
          },
        }
      );

      if (response.data.message === "Product added successfully!") {
        toast.success("Product added successfully!");
        setFormData({
          productName: "",
          originalPrice: "",
          discountedPrice: "",
          availability: "-----",
          status: "",
          details: "",
          brand: "",
          type: "-----",
          tag: "",
          image_1: null,
          image_2: null,
          image_3: null,
        });
      } else {
        toast.error(response.data.message || "Failed to add product.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      {/* Product Name */}
      <div className="mb-4">
        <label htmlFor="productName" className="text-md font-medium">
          Product Name<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="productName"
          onChange={handleChange}
          value={formData.productName}
          id="productName"
          required
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
          placeholder="ASUS TUF GAMING F15 FX507VI i7 13th GEN RTX 4070 8GB"
        />
      </div>

      {/* Original Price */}
      <div className="mb-4">
        <label htmlFor="originalPrice" className="text-md font-medium">
          Original Price (LKR)<span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          name="originalPrice"
          id="originalPrice"
          onChange={handleChange}
          value={formData.originalPrice}
          required
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
          placeholder="199000"
        />
      </div>

      {/* Discounted Price */}
      <div className="mb-4">
        <label htmlFor="discountedPrice" className="text-md font-medium">
          Discounted Price (LKR)
        </label>
        <input
          type="number"
          name="discountedPrice"
          id="discountedPrice"
          onChange={handleChange}
          value={formData.discountedPrice}
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
          placeholder="169000"
        />
      </div>

      {/* Availability */}
      <div className="mb-4">
        <label htmlFor="availability" className="text-md font-medium">
          Availability<span className="text-red-600">*</span>
        </label>
        <select
          name="availability"
          id="availability"
          onChange={handleChange}
          value={formData.availability}
          required
          placeholder="Select Availability"
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
        >
          <option value="">-----</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="Discontinued">Discontinued</option>
          <option value="Available Soon">Available Soon</option>
          <option value="Limited Stock">Limited Stock</option>
          <option value="Pre-Order">Pre-Order</option>
        </select>
      </div>

      {/* Discount/Status */}
      <div className="mb-4">
        <label htmlFor="status" className="text-md font-medium">
          Discount / Status (ex: -15%)<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="status"
          required
          onChange={handleChange}
          value={formData.status}
          id="status"
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
          placeholder="Top Rated - Low Stock - New Arrival - Best Deal - Featured"
        />
      </div>

      {/* Product Details */}
      <div className="mb-4">
        <label htmlFor="name" className="text-md font-medium">
          Description / Details<span className="text-red-600">*</span>
        </label>
        <textarea
          name="details"
          rows={3}
          type="text"
          id="name"
          required
          onChange={handleChange}
          value={formData.details}
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
          placeholder="Product details "
        />
      </div>

      {/* Brand */}
      <div className="mb-4">
        <label htmlFor="brand" className="text-md font-medium">
          Brand<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          onChange={handleChange}
          value={formData.brand}
          required
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
          placeholder="ASUS"
        />
      </div>

      {/* Product Type */}
      <div className="mb-4">
        <label htmlFor="type" className="text-md font-medium">
          Product Type<span className="text-red-600">*</span>
        </label>
        <select
          name="type"
          id="type"
          onChange={handleChange}
          value={formData.type}
          required
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
        >
          <option value="">-----</option>
          <option value="Laptop">Laptop</option>
          <option value="Monitor">Monitor</option>
          <option value="PC">PC</option>
          <option value="Gaming Accessories">Gaming Accessories</option>
          <option value="Keyboard & Mouse">Keyboard & Mouse</option>
          <option value="Audio">Audio</option>
          <option value="Networking">Networking</option>
          <option value="Camera & Security">Camera & Security</option>
        </select>
      </div>

      {/* Tag */}
      <div className="mb-4">
        <label htmlFor="tag" className="text-md font-medium">
          Tag<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="tag"
          id="tag"
          onChange={handleChange}
          value={formData.tag}
          required
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
          placeholder="Best-Deal - Featured - New Arrival"
        />
      </div>

      {/* Image 1 */}
      <div className="mb-4">
        <label htmlFor="image_1" className="text-md font-medium">
          Upload Image 01<span className="text-red-600">*</span>
        </label>
        <input
          type="file"
          name="image_1"
          id="image_1"
          accept="image/*"
          onChange={handleChange}
          required
          className="py-2 px-3 w-full mt-2 border border-gray-300 rounded"
        />
      </div>

      {/* Image 2 */}
      <div className="mb-4">
        <label htmlFor="image_2" className="text-md font-medium">
          Upload Image 02<span className="text-red-600">*</span>
        </label>
        <input
          type="file"
          name="image_2"
          id="image_2"
          accept="image/*"
          onChange={handleChange}
          required
          className="py-2 px-3 w-full mt-2 border border-gray-300 rounded"
        />
      </div>

      {/* Image 3 */}
      <div className="mb-4">
        <label htmlFor="image_3" className="text-md font-medium">
          Upload Image 03<span className="text-red-600">*</span>
        </label>
        <input
          type="file"
          name="image_3"
          id="image_3"
          accept="image/*"
          onChange={handleChange}
          required
          className="py-2 px-3 w-full mt-2 border border-gray-300 rounded"
        />
      </div>

      {/* Submit Button */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="mt-6 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded w-1/3"
        >
          Add Product
        </button>
        <button
          type="reset"
          className="mt-6 cursor-pointer bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-1 rounded w-1/6"
        >
          clear All
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
