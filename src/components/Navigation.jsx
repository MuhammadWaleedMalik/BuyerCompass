import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import navigation from "../data/navigation.json";
import ui from "../data/ui.json";

export default function Navigation() {
  const { categories, specialButtons } = navigation;

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (slug) => {
    setActiveDropdown(activeDropdown === slug ? null : slug);
  };

  // Static palette — include every Tailwind class here so the JIT sees them.
  const palette = {
    blue: "bg-blue-600 text-white",       // simple blue
    dark: "bg-blue-800 text-white",       // dark blue
    // add more named palettes here if you need
  };

  // Resolve token from ui.json to actual static class string
  const getButtonTheme = (type) => {
    const token = ui.specialButtonColors[type] || ui.specialButtonColors.default || "blue";
    return palette[token] || palette.blue;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
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
              {specialButtons.map((btn) => {
                const classes = getButtonTheme(btn.type || "default");
                return (
                  <Link
                    key={btn.slug}
                    to={`/${btn.slug}`}
                    // include padding/shape classes here so they're static too
                    className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${classes}`}
                  >
                    {btn.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
              {specialButtons.map((btn) => {
                const classes = getButtonTheme(btn.type || "default");
                return (
                  <Link
                    key={btn.slug}
                    to={`/${btn.slug}`}
                    className={`text-sm font-semibold px-5 py-2 rounded-full text-center ${classes}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {btn.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
