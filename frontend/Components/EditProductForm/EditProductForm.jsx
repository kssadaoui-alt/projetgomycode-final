"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditProductForm = ({ product, closeModal }) => {
  const [formData, setFormData] = useState({
    productName: product.productName || "",
    originalPrice: product.originalPrice || "",
    discountedPrice: product.discountedPrice || "",
    availability: product.availability || "",
    status: product.status || "",
    details: product.details || "",
    brand: product.brand || "",
    type: product.type || "",
    tag: product.tag || "",
    image_1: null,
    image_2: null,
    image_3: null,
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Append all fields to formData
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await axios.put(
        `http://localhost:8000/api/edit-product/${product._id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.message === "Product updated successfully!") {
        toast.success("Product updated successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error("Failed to update product.");
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
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
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
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
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
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
        >
          <option value="">Select Availability</option>
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
          onChange={handleChange}
          value={formData.status}
          id="status"
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
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
          onChange={handleChange}
          value={formData.details}
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
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
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
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
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
        >
          <option value="">Select Product Type</option>
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
          className="py-2 px-3 outline outline-1 outline-gray-300 focus:outline-gray-400 rounded w-full mt-2"
        />
      </div>

      {/* Image 1 */}
      <div className="mb-4">
        <label htmlFor="image_1" className="text-md font-medium">
          Upload Image 01
        </label>
        <input
          type="file"
          name="image_1"
          id="image_1"
          accept="image/*"
          onChange={handleChange}
          className="py-2 px-3 w-full mt-2 border border-gray-300 rounded"
        />
      </div>

      {/* Image 2 */}
      <div className="mb-4">
        <label htmlFor="image_2" className="text-md font-medium">
          Upload Image 02
        </label>
        <input
          type="file"
          name="image_2"
          id="image_2"
          accept="image/*"
          onChange={handleChange}
          className="py-2 px-3 w-full mt-2 border border-gray-300 rounded"
        />
      </div>

      {/* Image 3 */}
      <div className="mb-4">
        <label htmlFor="image_3" className="text-md font-medium">
          Upload Image 03
        </label>
        <input
          type="file"
          name="image_3"
          id="image_3"
          accept="image/*"
          onChange={handleChange}
          className="py-2 px-3 w-full mt-2 border border-gray-300 rounded"
        />
      </div>

      {/* Submit Button */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="mt-6 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded w-1/3"
        >
          Update Product
        </button>
        <button
          onClick={closeModal}
          className="mt-6 cursor-pointer bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-1 rounded w-1/6"
        >
          Clear All
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
