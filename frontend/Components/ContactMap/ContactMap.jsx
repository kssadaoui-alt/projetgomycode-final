import React from "react";

const ContactMap = () => {
  return (
    <div className="mx-6 px-2 py-2 border-2 border-gray-400 rounded-sm">
      {" "}
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps?q=Tataouine,Tunisia&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
