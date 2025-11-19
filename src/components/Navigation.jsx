import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import navigation from "../data/navigation.json";

export default function Navigation() {
  const { categories, specialButtons } = navigation;

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (slug) => {
    setActiveDropdown(activeDropdown === slug ? null : slug);
  };

  // Elite gradient themes for special buttons
  const getButtonTheme = (slug) => {
    const themes = {
      trending:
        "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg",
      deals:
        "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg",
      "gift-guides":
        "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-lg",
    };
    return themes[slug] || "bg-gray-800 hover:bg-gray-700 text-white shadow-md";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-white to-amber-50 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {categories.map((cat) => (
              <div key={cat.slug} className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown(cat.slug)}
                  onClick={() => toggleDropdown(cat.slug)}
                  className="text-sm font-medium hover:text-blue-600 flex items-center gap-1 transition-colors duration-200"
                >
                  {cat.name} <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === cat.slug && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 bg-white shadow-xl mt-2 z-50 w-64 p-4 grid gap-2 rounded-lg border border-gray-100 transition-transform transform scale-95 group-hover:scale-100 duration-200"
                  >
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/category/${cat.slug}/${sub.slug}`}
                        className="text-xs hover:text-blue-600 py-1 transition-colors duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Special Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              {specialButtons.map((btn) => (
                <Link
                  key={btn.slug}
                  to={`/${btn.slug}`}
                  className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${getButtonTheme(
                    btn.slug
                  )}`}
                >
                  {btn.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {categories.map((cat) => (
              <div key={cat.slug}>
                <button
                  onClick={() => toggleDropdown(cat.slug)}
                  className="w-full text-left flex justify-between items-center text-sm font-medium py-2 hover:text-blue-600 transition-colors duration-200"
                >
                  {cat.name} <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === cat.slug && (
                  <div className="pl-4 mt-1 space-y-1">
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/category/${cat.slug}/${sub.slug}`}
                        className="block text-xs hover:text-blue-600 py-1 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col space-y-2">
              {specialButtons.map((btn) => (
                <Link
                  key={btn.slug}
                  to={`/${btn.slug}`}
                  className={`text-sm font-semibold px-5 py-2 rounded-full text-center transition-all duration-300 ${getButtonTheme(
                    btn.slug
                  )}`}
                >
                  {btn.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
