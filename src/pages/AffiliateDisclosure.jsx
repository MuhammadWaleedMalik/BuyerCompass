import React from "react";

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Affiliate Disclosure – BuyerCompass.blog
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          BuyerCompass.blog participates in several affiliate marketing programs. 
          This means that when you click certain links and make a purchase, we may 
          earn a small commission — at no extra cost to you.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amazon Associates Disclosure</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We are a participant in the Amazon Services LLC Associates Program — 
          designed to provide a means for sites to earn fees by linking to Amazon.com. 
          As an Amazon Associate, we earn from qualifying purchases.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How This Affects You</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
          <li>Prices remain the same for you</li>
          <li>Our earnings help support the site</li>
          <li>We only recommend useful, relevant products</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Editorial Integrity</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Even though we may earn commissions, our recommendations are based on research, 
          product relevance, seasonal trends, and user needs. We do not receive payment 
          for positive reviews.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact</h2>
        <p className="font-semibold text-gray-800">📧 buyercompassblog@gmail.com</p>

      </div>
    </div>
  );
}
