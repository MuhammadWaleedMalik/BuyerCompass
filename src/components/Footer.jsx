import { Link } from "react-router-dom";

// Toggle Christmas theme on/off here
const ENABLE_CHRISTMAS_THEME = true;

export default function Footer() {
  // Set this to true AFTER you are accepted into Amazon Associates
  const isAffiliateActive = false;

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-[#3C98D7]">LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#3C98D7] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#3C98D7] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#3C98D7] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#3C98D7] transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliate-disclosure"
                  className="hover:text-[#3C98D7] transition-colors"
                >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-4 leading-relaxed">
              Get{" "}
              <span className="text-[#3C98D7]">
                exclusive content, advice,
              </span>{" "}
              and tips from BuyerCompass delivered to your inbox.
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-[#3C98D7] focus:border-transparent text-sm"
              />
              <button
                className="px-6 py-2 bg-[#3C98D7] hover:bg-[#0E2847] 
                text-white rounded-lg font-medium transition-colors shadow hover:shadow-md text-sm"
              >
                SUBMIT
              </button>
            </div>
            <p className="text-xs text-gray-500">
              No spam. Just honest guides and hand-picked ideas.
            </p>
          </div>

          {/* THIRD COLUMN: Christmas OR Generic contact */}
          <div className="space-y-3">
            {ENABLE_CHRISTMAS_THEME ? (
              <>
                <h3 className="font-semibold mb-2 text-[#0E2847]">
                  Christmas Shopping Help
                </h3>
                <p className="text-sm text-gray-600">
                  Stuck on what to buy? Explore our Christmas gift guides for ideas
                  for him, her, kids, and more.
                </p>
                <Link
                  to="/gift-guides"
                  className="inline-flex items-center text-sm text-[#0E2847] hover:text-[#3C98D7] underline underline-offset-4"
                >
                  🎁 View Christmas gift guides
                </Link>
              </>
            ) : (
              <>
                <h3 className="font-semibold mb-2 text-[#0E2847]">
                  Need help choosing?
                </h3>
                <p className="text-sm text-gray-600">
                  We create research-backed guides to help you compare products,
                  understand features, and feel confident about your purchase.
                </p>
              </>
            )}

            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-700">
                Contact
              </p>
              <p className="text-sm text-gray-600">
                Email:{" "}
                <a
                  href="mailto:buyercompassblog@gmail.com"
                  className="text-[#3C98D7] hover:underline"
                >
                  buyercompassblog@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BRAND + SOCIAL */}
        <div
          className="border-t border-gray-300 pt-6 flex flex-col md:flex-row 
          justify-between items-center gap-6 md:gap-0"
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="BuyerCompass Logo"
              className="h-20 sm:h-24 md:h-28 w-auto"
              style={{ backgroundColor: "transparent" }}
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-[#0E2847]">
                BuyerCompass
              </p>
              <p className="text-xs text-gray-500">
                Helping you navigate smarter shopping choices.
              </p>
            </div>
          </div>

          {/* PINTEREST */}
          <div>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#A9631F] transition-colors"
            >
              <div className="w-7 h-7 bg-[#A9631F] text-white flex items-center justify-center rounded-full font-bold text-sm">
                P
              </div>
              <span className="text-sm text-gray-700">Pinterest</span>
            </a>
          </div>
        </div>

        {/* COPYRIGHT + AFFILIATE NOTE + OPTIONAL CHRISTMAS MESSAGE */}
        <div className="mt-8 rounded-lg overflow-hidden">
          <div className="bg-[#0E2847] text-gray-100 text-center text-sm py-4 px-4 space-y-2">
            <p>© 2025 BuyerCompass. All Rights Reserved.</p>

            {/* Pre-affiliate (current status) */}
            {!isAffiliateActive && (
              <p className="max-w-2xl mx-auto text-xs text-[#D1E5F5]">
                BuyerCompass is currently preparing to participate in affiliate
                programs (including Amazon Associates). We do not earn any
                commissions from links at this time. Once our participation is
                active, we will clearly update this notice and our Affiliate
                Disclosure.
              </p>
            )}

            {/* After approval – just flip the flag above */}
            {isAffiliateActive && (
              <p className="max-w-2xl mx-auto text-xs text-[#D1E5F5]">
                As an Amazon Associate I earn from qualifying purchases. We may
                earn a commission when you buy through links on our site, at no
                extra cost to you.
              </p>
            )}

            {/* Christmas message only if theme enabled */}
            {ENABLE_CHRISTMAS_THEME && (
              <p className="text-xs text-[#FDE68A]">
                🎄 Wishing you a warm, stress-free Christmas shopping season.
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
