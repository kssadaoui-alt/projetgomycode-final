"use client"; // Add this if you are using Next.js App Router (app/ folder)

import BestDeals from "@/Components/BestDealsSection/BestDeals";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Nav from "@/Components/Nav/Nav";
import PopularProductSection from "@/Components/PopularProductSection/PopularProductSection";
import ReviewsSection from "@/Components/ReviewsSection/ReviewsSection";
import ServicesSection from "@/Components/ServicesSection/ServicesSection";
import SponsorSection from "@/Components/SponsorSection/SponsorSection";
import React from "react";
import AppContextProvider from "./Context/AppContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Page() {
  return (
    <div>
      <AppContextProvider>
        <Nav />
        <Header />
        <PopularProductSection />
        <SponsorSection />
        <BestDeals />
        <ServicesSection />
        <ReviewsSection />
        <Footer />
        <ToastContainer theme="dark" position="top-right" />
      </AppContextProvider>
      <ToastContainer theme="dark" position="top-right" />
    </div>
  );
}

export default Page;
