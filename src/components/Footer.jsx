import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-blue-300">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-300">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* FEATURED */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">FEATURED</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/partnerships" className="hover:text-blue-300">Partnerships</Link></li>
              <li><Link to="/press" className="hover:text-blue-300">Press</Link></li>
              <li><Link to="/careers" className="hover:text-blue-300">Careers</Link></li>
              <li><Link to="/gift-guides" className="hover:text-blue-300">Gift Guides</Link></li>
              <li><Link to="/reviews" className="hover:text-blue-300">Reviews</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-4">
              Get <span className="text-blue-400">exclusive content, advice, and tips</span>
              from BuyerCompass delivered to your inbox.
            </h3>

            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 
                text-white rounded-lg font-medium transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* BRAND + PINTEREST */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row 
            justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-2xl font-semibold">
              BUYER<span className="text-blue-400">C</span>OMPASS
            </span>
          </div>

          {/* SOCIAL (ONLY PINTEREST) */}
          <div>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-400 transition"
            >
              {/* Pure CSS Pinterest Icon */}
              <div className="w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full font-bold text-sm">
                P
              </div>
              <span className="text-sm">Pinterest</span>
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>© 2025 BuyerCompass</p>
          <p className="mt-2">All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
