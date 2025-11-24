import { Link } from "react-router-dom";

export default function Footer() {
  // Change this to true AFTER you are accepted into Amazon Associates
  const isAffiliateActive = false;

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-600">LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-500 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliate-disclosure"
                  className="hover:text-blue-500 transition-colors"
                >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-4 leading-relaxed">
              Get <span className="text-blue-600">exclusive content, advice,</span> and tips
              from BuyerCompass delivered to your inbox.
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 
                text-white rounded-lg font-medium transition-colors shadow hover:shadow-md"
              >
                SUBMIT
              </button>
            </div>
          </div>

          {/* (Optional) third column – can stay empty or be used later */}
          <div className="hidden md:block" />
        </div>

        {/* BRAND + SOCIAL */}
        <div
          className="border-t border-gray-300 pt-8 flex flex-col md:flex-row 
          justify-between items-center gap-6 md:gap-0"
        >
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="./logo.jpg"
              alt="BuyerCompass Logo"
              className="h-24 sm:h-28 md:h-32 w-auto"
              style={{ backgroundColor: "transparent" }}
            />
          </div>

          {/* PINTEREST */}
          <div>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              <div className="w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full font-bold text-sm">
                P
              </div>
              <span className="text-sm">Pinterest</span>
            </a>
          </div>
        </div>

        {/* COPYRIGHT + AFFILIATE NOTICE */}
        <div className="text-center text-sm text-gray-500 mt-8 space-y-3">
          <p>© 2025 BuyerCompass</p>
          <p>All Rights Reserved.</p>

          {/* Pre-affiliate (current situation) */}
          {!isAffiliateActive && (
            <p className="max-w-2xl mx-auto text-xs text-gray-500">
              BuyerCompass is currently preparing to participate in affiliate programs
              (including Amazon Associates). We do not earn any commissions from links
              at this time. Once our participation is active, we will clearly update
              this notice and our Affiliate Disclosure.
            </p>
          )}

          {/* After approval – switch isAffiliateActive to true */}
          {isAffiliateActive && (
            <p className="max-w-2xl mx-auto text-xs text-gray-600">
              As an Amazon Associate I earn from qualifying purchases. We may earn a
              commission when you buy through links on our site, at no extra cost to you.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
