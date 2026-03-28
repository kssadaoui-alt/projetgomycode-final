"use client";
import Nav from "@/Components/Nav/Nav";
import ShopSideBar from "@/Components/ShopSideBar/ShopSideBar";
import Footer from "@/Components/Footer/Footer";
import React from "react";

const Page = () => {
  return (
    <div>
      <Nav />
      <div className="w-full mb-14 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4">
          {/* Side Bar */}
          <ShopSideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
