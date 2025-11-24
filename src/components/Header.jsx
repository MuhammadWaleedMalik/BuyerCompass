import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-[#0E2847] border-b border-[#3C98D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* LEFT: LOGO + NAV */}
          <div className="flex items-center gap-8">
            {/* LOGO / BRAND */}
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-[#3C98D7] flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold text-lg">
                  Buyer<span className="text-[#3C98D7]">Compass</span>
                </span>
                <span className="text-xs text-[#649AB7]">
                  Smart picks for smarter shopping
                </span>
              </div>
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <Link
                to="/"
                className="text-gray-100 hover:text-[#3C98D7] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/trending"
                className="text-gray-100 hover:text-[#3C98D7] transition-colors"
              >
                Trending
              </Link>
              <Link
                to="/deals"
                className="text-gray-100 hover:text-[#3C98D7] transition-colors"
              >
                Deals
              </Link>
              <Link
                to="/gift-guides"
                className="text-gray-100 hover:text-[#3C98D7] transition-colors"
              >
                Gift Guides
              </Link>
              <Link
                to="/about"
                className="text-gray-100 hover:text-[#3C98D7] transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* RIGHT: SEARCH */}
          <form onSubmit={handleSearch} className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for today?"
                className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg border border-[#649AB7]/60 
                  bg-white/95 text-sm text-gray-800
                  focus:outline-none focus:ring-2 focus:ring-[#3C98D7] focus:border-transparent placeholder:text-gray-400"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#649AB7] w-4 h-4" />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
