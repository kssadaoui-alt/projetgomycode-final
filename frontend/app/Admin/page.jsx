"use client";
import Link from "next/link";
import axios from "axios";
import { useContext, useMemo, useEffect, useState } from "react";
import { AppContext } from "@/app/Context/AppContext";

const AdminPage = () => {
  const { productsList } = useContext(AppContext);

  const [messageCount, setMessageCount] = useState(0);
  const [messageLoading, setMessageLoading] = useState(true);

  const stats = useMemo(() => {
    const total = productsList?.length || 0;
    const active = productsList?.filter((item) => item.status === "Active").length || 0;
    const outOfStock = productsList?.filter(
      (item) => item.availability?.toLowerCase() !== "in stock"
    ).length || 0;
    const lastProducts = productsList?.slice(-5).reverse() || [];

    return { total, active, outOfStock, lastProducts };
  }, [productsList]);

  useEffect(() => {
    const fetchContactMessages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/contact-messages");
        setMessageCount(response.data.length || 0);
      } catch (error) {
        console.error("Unable to fetch contact messages:", error);
      } finally {
        setMessageLoading(false);
      }
    };

    fetchContactMessages();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-8 pb-16">
      <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-8 text-white shadow-lg shadow-orange-200">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] opacity-90">Admin Dashboard</p>
            <h1 className="text-4xl font-semibold mt-3">Welcome back, Admin</h1>
            <p className="mt-3 max-w-xl text-orange-100 text-sm md:text-base">
              Monitor products, add new items, and manage the catalog from one modern panel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Link href="/Admin/AddProduct" className="rounded-3xl bg-white/15 px-5 py-4 text-center transition hover:bg-white/25">
              <p className="text-sm uppercase opacity-80">Add Product</p>
              <p className="mt-2 text-lg font-semibold">Quick create</p>
            </Link>
            <Link href="/Admin/AllProducts" className="rounded-3xl bg-white/15 px-5 py-4 text-center transition hover:bg-white/25">
              <p className="text-sm uppercase opacity-80">All Products</p>
              <p className="mt-2 text-lg font-semibold">Manage inventory</p>
            </Link>
            <Link href="/Admin/EditProducts" className="rounded-3xl bg-white/15 px-5 py-4 text-center transition hover:bg-white/25">
              <p className="text-sm uppercase opacity-80">Edit Products</p>
              <p className="mt-2 text-lg font-semibold">Update items</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Total Products</p>
            <p className="mt-4 text-4xl font-semibold text-gray-900">{stats.total}</p>
            <p className="mt-2 text-sm text-gray-500">All products currently in the catalog.</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Active Products</p>
            <p className="mt-4 text-4xl font-semibold text-emerald-600">{stats.active}</p>
            <p className="mt-2 text-sm text-gray-500">Products marked as active and visible in store.</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Out of Stock</p>
            <p className="mt-4 text-4xl font-semibold text-rose-600">{stats.outOfStock}</p>
            <p className="mt-2 text-sm text-gray-500">Products currently unavailable for sale.</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Contact Messages</p>
            <p className="mt-4 text-4xl font-semibold text-sky-600">
              {messageLoading ? "..." : messageCount}
            </p>
            <p className="mt-2 text-sm text-gray-500">Messages received through the contact form.</p>
            <Link href="/Admin/Messages" className="mt-4 inline-block text-sm text-orange-500 hover:text-orange-600">
              Review messages
            </Link>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Quick Actions</p>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>• Add a new product</p>
              <p>• Edit or delete items</p>
              <p>• Check messages</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Latest products</p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">Recently added</h2>
            </div>
            <Link href="/Admin/AllProducts" className="text-sm text-orange-500 hover:text-orange-600">
              View all
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {stats.lastProducts.length === 0 ? (
              <p className="text-gray-500">No products yet.</p>
            ) : (
              stats.lastProducts.map((product) => (
                <div key={product._id} className="rounded-3xl border border-gray-100 bg-slate-50 p-4">
                  <p className="font-semibold text-gray-900">{product.productName}</p>
                  <p className="text-sm text-gray-500 mt-1">{product.brand || "Unknown brand"}</p>
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                    <span>{product.status || "Status N/A"}</span>
                    <span>Rs. {product.originalPrice || "0"}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
