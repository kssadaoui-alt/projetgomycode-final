"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/contact-messages");
        setMessages(response.data || []);
      } catch (error) {
        console.error("Failed to load contact messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Contact Form Messages
        </h2>

        {loading ? (
          <p className="text-gray-600">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-600">No messages have been received yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-white rounded-lg p-5 border border-gray-300"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {msg.subject || "No subject"}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  From: <span className="font-medium">{msg.name}</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Email: {" "}
                  <a
                    href={`mailto:${msg.email}`}
                    className="text-orange-500 underline"
                  >
                    {msg.email}
                  </a>
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Date: {new Date(msg.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
