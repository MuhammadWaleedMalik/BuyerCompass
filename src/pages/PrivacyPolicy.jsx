import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: 16-11-2025
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          At <strong>BuyerCompass.blog</strong>, your privacy is important to us.
          This Privacy Policy explains what information we collect, how we use it,
          and what rights you have. By using our website, you agree to the
          practices described on this page.
        </p>

        {/* Section */}
        <SectionTitle title="Information We Collect" />

        <SubTitle text="1. Personal Information You Provide" />
        <p className="text-gray-600 mb-5 leading-relaxed">
          When you contact us through forms or email, we may collect your name and
          email address. We do not collect payment details, sensitive personal data,
          or unnecessary information.
        </p>

        <SubTitle text="2. Automatically Collected Information" />
        <p className="text-gray-600 mb-5 leading-relaxed">
          When you visit our website, certain data may be collected automatically,
          including:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-5 space-y-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages viewed</li>
          <li>Time spent on the site</li>
        </ul>
        <p className="text-gray-600 mb-6 leading-relaxed">
          This helps us improve website performance and user experience.
        </p>

        <SubTitle text="3. Cookies and Tracking Technologies" />
        <p className="text-gray-600 mb-6 leading-relaxed">
          We use cookies to analyze traffic, improve navigation, and enhance content
          recommendations. You may disable cookies in your browser settings.
        </p>

        <SectionTitle title="How We Use Your Information" />
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>Improve our website and content</li>
          <li>Respond to inquiries</li>
          <li>Analyze visitor activity</li>
          <li>Display relevant affiliate products</li>
        </ul>

        <SectionTitle title="Third-Party Disclosure" />
        <p className="text-gray-600 mb-6 leading-relaxed">
          We may share non-personal data with analytics tools (like Google Analytics)
          and affiliate programs such as Amazon Associates. These services may use
          cookies to track clicks and conversions. We never sell your personal
          information.
        </p>

        <SectionTitle title="Affiliate Links" />
        <p className="text-gray-600 mb-6 leading-relaxed">
          BuyerCompass.blog participates in affiliate programs that may track your
          clicks using cookies (see Affiliate Disclosure page).
        </p>

        <SectionTitle title="Your Rights" />
        <p className="text-gray-600 mb-6 leading-relaxed">
          Depending on your location, you may request access, correction, deletion,
          or opt-out of data tracking. Email:
          <span className="font-semibold"> buyercompassblog@gmail.com</span>
        </p>

        <SectionTitle title="Contact" />
        <p className="text-gray-600 mb-2 leading-relaxed">
          If you have any questions, contact us at:
        </p>
        <p className="font-semibold text-gray-800">
          📧 buyercompassblog@gmail.com
        </p>
      </motion.div>
    </div>
  );
}

// Small re-usable components
function SectionTitle({ title }) {
  return (
    <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-blue-500 pl-3">
      {title}
    </h2>
  );
}

function SubTitle({ text }) {
  return (
    <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
      {text}
    </h3>
  );
}
