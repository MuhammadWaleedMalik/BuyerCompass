// src/pages/AffiliateDisclosure.jsx
import React from "react";

const AffiliateDisclosure = () => {
  const isAffiliateActive = false; // set to true AFTER approval

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Affiliate Disclosure
      </h1>

      {/* Status note */}
      {!isAffiliateActive && (
        <p className="text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 px-4 py-3 rounded-lg mb-6">
          <strong>Note:</strong> BuyerCompass is currently preparing to apply
          for affiliate programs, including Amazon Associates. We do not
          currently earn commissions from any links on this site. The
          information below describes how our affiliate relationships will work
          once they are active.
        </p>
      )}

      {isAffiliateActive && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-3 rounded-lg mb-6">
          BuyerCompass participates in affiliate programs, including the Amazon
          Services LLC Associates Program. As an Amazon Associate I earn from
          qualifying purchases.
        </p>
      )}

      <p className="text-gray-700 mb-6 leading-relaxed">
        At BuyerCompass, our goal is to help you make smarter buying decisions
        with honest reviews, comparisons, and curated product recommendations.
        To support the time and research that goes into creating this content,
        we may use affiliate links on some of our pages.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        What is an affiliate link?
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        An affiliate link is a special URL that tracks when you click through
        from our site to a retailer’s website and make a purchase. If you buy
        something through one of these links, we may earn a small commission.
        Importantly, this does not increase the price you pay as a customer.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Amazon Associates Program
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        BuyerCompass intends to participate in the Amazon Services LLC
        Associates Program, an affiliate advertising program designed to provide
        a means for sites to earn advertising fees by advertising and linking
        to Amazon.com and related regional sites.
      </p>

      {/* This sentence is the key one – only "active" once you're accepted */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        Once our participation is active, the following will apply:{` `}
        <span className="font-semibold">
          “As an Amazon Associate I earn from qualifying purchases.”
        </span>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        How this affects you
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>You pay the same price you would pay without our link.</li>
        <li>
          Any commission we earn helps support the work of researching and
          writing our guides.
        </li>
        <li>
          We only recommend products that we genuinely believe are worth
          considering, regardless of commission.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Editorial independence
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Our recommendations are based on research, product features, brand
        reputation, user feedback, and our own judgment. Affiliate
        relationships do not dictate which products we recommend or how we talk
        about them. If a product is not good, we will say so—even if it has an
        affiliate program.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Your trust matters
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Transparency is important to us. If you ever have questions about how
        affiliate links are used on this site, feel free to reach out at{" "}
        <a
          href="mailto:buyercompassblog@gmail.com"
          className="text-blue-500 hover:underline"
        >
          buyercompassblog@gmail.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-500">
        This disclosure may be updated as our monetization methods or affiliate
        partnerships change.
      </p>
    </div>
  );
};

export default AffiliateDisclosure;
