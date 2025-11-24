import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT: LOGO + BRAND + NAV */}
          <div className="flex items-center gap-10">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="BuyerCompass Logo"
                className="h-14 sm:h-16 w-auto rounded-md"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[#0E2847] font-semibold text-lg">
                  Buyer<span className="text-[#3C98D7]">Compass</span>
                </span>
                <span className="text-xs text-[#0E2847]/60">
                  Smart picks for smarter shopping
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link
                to="/"
                className="text-[#0E2847] hover:text-[#3C98D7] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/trending"
                className="text-[#0E2847] hover:text-[#3C98D7] transition-colors"
              >
                Trending
              </Link>
              <Link
                to="/deals"
                className="text-[#0E2847] hover:text-[#3C98D7] transition-colors"
              >
                Deals
              </Link>
              <Link
                to="/gift-guides"
                className="text-[#0E2847] hover:text-[#3C98D7] transition-colors"
              >
                Gift Guides
              </Link>
              <Link
                to="/about"
                className="text-[#0E2847] hover:text-[#3C98D7] transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* SEARCH BAR */}
          <form onSubmit={handleSearch} className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for today?"
                className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                  bg-white text-sm text-gray-800 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-[#3C98D7] focus:border-transparent placeholder:text-gray-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#649AB7] w-4 h-4" />
            </div>
          </form>
        </div>

        {/* MOBILE NAV */}
        <nav className="mt-3 flex md:hidden items-center gap-4 text-sm overflow-x-auto">
          <Link
            to="/"
            className="text-[#0E2847] hover:text-[#3C98D7] transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="/trending"
            className="text-[#0E2847] hover:text-[#3C98D7] transition-colers whitespace-nowrap"
          >
            Trending
          </Link>
          <Link
            to="/deals"
            className="text-[#0E2847] hover:text-[#3C98D7] transition-colors whitespace-nowrap"
          >
            Deals
          </Link>
          <Link
            to="/gift-guides"
            className="text-[#0E2847] hover:text-[#3C98D7] transition-colors whitespace-nowrap"
          >
            Gift Guides
          </Link>
          <Link
            to="/about"
            className="text-[#0E2847] hover:text-[#3C98D7] transition-colors whitespace-nowrap"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
