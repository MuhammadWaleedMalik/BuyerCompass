import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/data.json";

export default function CategoryPage() {
  const { catSlug, subSlug } = useParams();
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    if (!catSlug || !subSlug) return;

    // 1. Find the matching category
    const foundCat = data.categories.find(
      (c) => c.slug.toLowerCase() === catSlug.toLowerCase()
    );

    if (!foundCat) {
      setCategory(null);
      setItems([]);
      setFeaturedItems([]);
      return;
    }

    setCategory(foundCat);

    // 2. Find matching subcategory products
    const matchedProducts = foundCat.products.filter(
      (p) => p.slug.toLowerCase() === subSlug.toLowerCase()
    );

    // 3. Flatten all items (handle single object or array)
    const allItems = matchedProducts.flatMap((prod) =>
      Array.isArray(prod.item) ? prod.item : [prod.item]
    );

    // 4. Top 3 featured items for top banner
    setFeaturedItems(allItems.slice(0, 3));
    setItems(allItems);
  }, [catSlug, subSlug]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-xl">Category not found...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6">
          {category.name} → {subSlug.replace(/-/g, " ")}
        </h1>

        {/* TOP FEATURED BANNER */}
        {featuredItems.length > 0 && (
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300 bg-gradient-to-tr from-blue-100 via-white to-blue-50"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
                  onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x300?text=No+Image")
                  }
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4">
                  <h2 className="text-white font-bold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-200 truncate">{item.description}</p>
                  <p className="text-green-400 font-bold mt-1">
                    ${item.discountPrice ?? item.price}
                    {item.discountPrice && (
                      <span className="line-through text-gray-300 ml-2">
                        ${item.price}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROMO BANNER */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 p-6 text-center text-white font-bold text-xl animate-pulse">
          🔥 Special Deals in {category.name} - Limited Time Offers! 🔥
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <Link
              to={`/product/${item.slug || item.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition-all duration-300 relative block"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
                onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/400x300?text=No+Image")
                }
              />
              {/* Optional badge */}
              {idx % 3 === 0 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                  HOT
                </span>
              )}
              <div className="p-4">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-700 my-2 line-clamp-2">{item.description}</p>
                {/* Price removed as requested */}
                <span className="text-blue-500 font-medium mt-2 inline-block">View Details →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* EXTRA SECTION: Related Highlights */}
        <div className="mt-12 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">You may also like</h2>
          <p className="text-gray-700">
            Check out more products in {category.name} and find the perfect deal.
          </p>
        </div>
      </div>
    </div>
  );
}
