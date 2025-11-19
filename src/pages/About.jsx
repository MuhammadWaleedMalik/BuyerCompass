import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200">

        <h1 className="text-4xl font-bold text-gray-800 mb-6">About BuyerCompass.blog</h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to BuyerCompass.blog, a site created to help shoppers make smarter, more 
          confident buying decisions. We understand how confusing online shopping can be — 
          so many products, reviews, and choices. Our goal is simple:
        </p>

        <p className="text-xl font-semibold text-gray-700 mb-4">
          🎯 To guide you toward the right products with clear, helpful, and honest information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What We Publish</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
          <li>Gift guides</li>
          <li>Seasonal shopping ideas</li>
          <li>Product comparisons</li>
          <li>Home & lifestyle recommendations</li>
          <li>Festive and holiday inspirations</li>
          <li>Buying tips based on research and consumer trends</li>
        </ul>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Our content is written to help real people make real decisions — without pushy 
          sales language or copied descriptions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          To become a reliable shopping guide where readers can browse curated lists, 
          practical advice, and simplified product research all in one place.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Work</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We research product categories, analyze buyer needs, and highlight items that fit 
          different budgets and lifestyles. We may earn a commission when you buy through 
          our links (see Affiliate Disclosure), but it never affects our opinions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why You Can Trust Us</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
          <li>We only recommend products that fit real user needs.</li>
          <li>We never copy product descriptions from retailers.</li>
          <li>We focus on honest, helpful, human-written insights.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact</h2>
        <p className="font-semibold text-gray-800">📧 buyercompassblog@gmail.com</p>

      </div>
    </div>
  );
}
