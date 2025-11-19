import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Carousel
import mockData from "../data/mockdata.json";
import reviewsData from "../data/reviews.json"; // Client reviews
import articlesData from "../data/articles.json"; // NEW — full article list
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]); // NEW SECTION
  const [editorPicks, setEditorPicks] = useState([]); // NEW SECTION

  const [topDeals, setTopDeals] = useState([]);
  const [mainDeal, setMainDeal] = useState(null);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // NEW — Using articles.json instead of mockdata.json
    setFeaturedArticles(articlesData.articles.filter(a => a.is_featured).slice(0, 5));
    setTrendingArticles(articlesData.articles.filter(a => a.is_trending).slice(0, 6));

    // NEW — Latest Articles
    setLatestArticles(
      articlesData.articles
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 8)
    );

    // NEW — Editor Picks (just another slice)
    setEditorPicks(
      articlesData.articles
        .filter(a => a.is_featured && a.is_trending)
        .slice(0, 4)
    );

    // ORIGINAL PRODUCT + DEAL DATA (unchanged)
    const deals = mockData.deals.filter(d => d.is_featured);
    setMainDeal(deals[0]);
    setTopDeals(deals.slice(1, 6));
    setTrendingProducts(mockData.products.slice(0, 6));
    setReviews(reviewsData);
  }, []);

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ------------------ TOP 3-COLUMN SECTION ------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* LEFT: ARTICLES */}
          <div className="space-y-4">
            <div className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-lg mb-4">
              THE LATEST
            </div>
            {featuredArticles.map(article => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-blue-600 mb-1">{article.title}</h3>
                <p className="text-gray-500 text-sm">{article.excerpt}</p>
              </Link>
            ))}
          </div>

          {/* CENTER: MAIN TOP DEAL */}
          <div className="space-y-4">
            {mainDeal && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden relative hover:shadow-2xl transition-shadow">
                {mainDeal.image_url && (
                  <img
                    src={mainDeal.image_url}
                    alt={mainDeal.title}
                    className="w-full h-96 object-cover"
                  />
                )}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 text-lg font-bold rounded-lg shadow-lg animate-pulse">
                  HOT DEAL
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-2">{mainDeal.title}</h2>
                  <p className="text-gray-600 mb-4">{mainDeal.excerpt}</p>
                  {mainDeal.price && (
                    <p className="text-green-600 font-bold text-xl mb-2">${mainDeal.price}</p>
                  )}
                  <Link
                    to={mainDeal.link || "#"}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Deal →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: TOP DEALS */}
          <div className="space-y-4">
            <div className="bg-green-500 text-white px-4 py-2 inline-block font-semibold rounded-lg mb-4">
              TOP DEALS
            </div>
            {topDeals.map(deal => (
              <div key={deal.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {deal.image_url && (
                  <img
                    src={deal.image_url}
                    alt={deal.title}
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{deal.title}</h3>
                  {deal.price && (
                    <p className="text-green-600 font-semibold">${deal.price}</p>
                  )}
                  <Link
                    to={deal.link || "#"}
                    className="text-blue-600 text-sm hover:underline block mt-1"
                  >
                    View Deal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------ SEARCH BOX (unchanged) ------------------ */}
        <section className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">
            Check out our reviews before you buy anything. Ever.
          </h2>
          <form className="flex gap-2">
            <input
              type="text"
              placeholder="What are you looking for today?"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              SEARCH
            </button>
          </form>
        </section>

        {/* ------------------ NEW: LATEST ARTICLES ------------------ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">LATEST ARTICLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map(article => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
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
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ------------------ TRENDING ARTICLES (original) ------------------ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">WHAT'S TRENDING NOW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
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
              </Link>
            ))}
          </div>
        </section>

        {/* ------------------ NEW: EDITOR PICKS ------------------ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">EDITOR’S PICKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {editorPicks.map(article => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ------------------ TRENDING PRODUCTS (original) ------------------ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">TRENDING PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
              <a
                key={product.id}
                href={product.affiliate_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {product.image_url && (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.brand || "Brand"}</p>
                  <p className="text-green-600 font-semibold">${product.discount_price}</p>
                  <p className="line-through text-gray-400 text-sm">${product.price}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ------------------ LAB SECTION (unchanged) ------------------ */}
        <section className="mb-8 bg-blue-50 border border-blue-100 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
            BUYERCOMPASS TESTING LAB
          </h2>
          <p className="text-center mb-6 text-gray-600">
            Our testing experts put a wide range of products to rigorous standards with unique insights for confident shopping decisions.
          </p>
        </section>

        {/* ------------------ CLIENT REVIEWS CAROUSEL (unchanged) ------------------ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
          <Slider {...sliderSettings}>
            {reviews.map((rev) => (
              <div key={rev.id} className="px-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 mb-2">"{rev.comment}"</p>
                  <p className="text-sm font-semibold text-gray-900">- {rev.name}</p>
                  <p className="text-yellow-400 mt-1">
                    {"★".repeat(rev.rating) + "☆".repeat(5 - rev.rating)}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </section>

      </div>
    </div>
  );
}
