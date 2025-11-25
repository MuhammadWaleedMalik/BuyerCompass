import { useEffect, useState } from "react";
import articlesData from "../data/articles.json";

export default function GiftGuidesPage() {
  const [giftGuideArticles, setGiftGuideArticles] = useState([]);

  useEffect(() => {
    setGiftGuideArticles(articlesData.articles.slice(0, 12));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">GIFT GUIDES</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect gift for everyone on your list with our curated gift guides.
            From tech lovers to home chefs — we've got you covered.
          </p>
        </div>

        {giftGuideArticles.length > 0 ? (
          <>

            {/* FEATURED GUIDE */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              {giftGuideArticles[0].image_url && (
                <img
                  src={giftGuideArticles[0].image_url}
                  alt={giftGuideArticles[0].title}
                  className="w-full h-96 object-cover"
                />
              )}

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{giftGuideArticles[0].title}</h2>
                <p className="text-gray-600 mb-4">{giftGuideArticles[0].excerpt}</p>

                <a
                  href={`/article/${giftGuideArticles[0].slug}`}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View Gift Guide
                </a>
              </div>
            </div>

            {/* OTHER GUIDES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {giftGuideArticles.slice(1).map((article) => (
                <a
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {article.author}</p>
                    <p className="text-sm text-gray-500">{article.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No gift guides available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
