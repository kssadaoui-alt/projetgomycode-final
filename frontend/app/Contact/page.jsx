import ContactForm from "@/Components/ContactForm/ContactForm";
import ContactMap from "@/Components/ContactMap/ContactMap";
import Footer from "@/Components/Footer/Footer";
import Nav from "@/Components/Nav/Nav";
import React from "react";

const page = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
