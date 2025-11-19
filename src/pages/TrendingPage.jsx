import { useEffect, useState } from "react";
import {  getTrendingArticles } from "../lib/data";

export default function TrendingPage() {
  const [trendingArticles, setTrendingArticles] = useState([]);

  useEffect(() => {
    const data = getTrendingArticles() || [];
    setTrendingArticles(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-2">WHAT'S TRENDING NOW</h1>
        <p className="text-gray-600 mb-8">
          Want to stay current on what's trending? Stay in the know with these articles.
        </p>

        {trendingArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingArticles.map((article) => (
              <a
                key={article.id}
                href={`/article/${article.slug}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {article.image_url ? (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <div className="p-4">
                  <p className="text-xs text-blue-600 mb-2 uppercase">
                    {article.category_id || "TRENDING"}
                  </p>

                  <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>

                  <p className="text-sm text-gray-600 mb-2">
                    by {article.author || "Unknown"}
                  </p>

                  <p className="text-sm text-gray-500 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No trending articles available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
