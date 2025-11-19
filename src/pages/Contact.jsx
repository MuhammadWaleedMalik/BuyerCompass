import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact BuyerCompass.blog</h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          We’d love to hear from you! Whether you have a question, collaboration request, 
          feedback, or a suggestion for new content, feel free to reach out.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Email:</h3>
        <p className="font-semibold text-gray-800 mb-6">📧 buyercompassblog@gmail.com</p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Response Time:</h3>
        <p className="text-gray-600 mb-6">We typically respond within 24–48 hours.</p>

        <p className="text-gray-700 leading-relaxed">
          Thank you for visiting BuyerCompass.blog — we appreciate your support!
        </p>

      </div>
    </div>
  );
}
