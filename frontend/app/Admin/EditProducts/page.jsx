"use client";

import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { AppContext } from "@/app/Context/AppContext";
import { IoClose } from "react-icons/io5";
import EditProductForm from "@/Components/EditProductForm/EditProductForm";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const { productsList } = useContext(AppContext);
  const [product, setProduct] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (product) => {
    setProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/delete-product/${id}`
      );
      if ((response.data.message = "Product deleted successfully!")) {
        toast.success("Product deleted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error("Failed to delete product.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8">
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Brand</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsList.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No products available.
                </td>
              </tr>
            ) : (
              productsList.map((product, index) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{product.productName}</td>
                  <td className="py-2 px-4">{product.brand}</td>
                  <td className="py-2 px-4">Rs. {product.originalPrice}.00</td>
                  <td className="py-2 px-4">{product.status}</td>
                  <td className="py-2 px-4 flex gap-2 flex-wrap">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="bg-blue-500 text-white px-3 py-1 cursor-pointer  rounded hover:bg-blue-600 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-lg relative">
            <div className="flex w-full justify-between items-center mb-4">
              <span className="text-xl font-bold">Edit Product</span>
              <button
                className="absolute top-4 right-2 text-gray-600 hover:text-black text-2xl cursor-pointer"
                onClick={closeModal}
              >
                <IoClose />
              </button>
            </div>
            <EditProductForm product={product} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
