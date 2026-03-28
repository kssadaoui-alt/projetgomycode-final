import AddProductForm from "@/Components/AddProductForm/AddProductForm";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12 mt-8">
      <h2 className="text-2xl font-medium">Add New Product</h2>
      <AddProductForm />
    </div>
  );
};

export default page;
