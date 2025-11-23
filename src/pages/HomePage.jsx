import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; 
import mockData from "../data/mockData.json";
import reviewsData from "../data/reviews.json";
import articlesData from "../data/articles.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [editorPicks, setEditorPicks] = useState([]);
  const [topRatedArticle, setTopRatedArticle] = useState(null);
  const [topDeals, setTopDeals] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // FEATURED / TRENDING / LATEST
    setFeaturedArticles(articlesData.articles.filter(a => a.is_featured).slice(0, 5));
    setTrendingArticles(articlesData.articles.filter(a => a.is_trending).slice(0, 6));
    setLatestArticles([...articlesData.articles].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 8));
    setEditorPicks(articlesData.articles.filter(a => a.is_featured && a.is_trending).slice(0, 4));

    // ⭐ RANDOM TOP-RATED ARTICLE (center)
    const allArticles = articlesData.articles;
    const random = allArticles[Math.floor(Math.random() * allArticles.length)];
    setTopRatedArticle(random);

    // DEALS + PRODUCTS
    const deals = mockData.deals.filter(d => d.is_featured);
    setTopDeals(deals.slice(1, 6));
    setTrendingProducts(mockData.products.slice(0, 6));
    setReviews(reviewsData);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ------------------ TOP 3-COLUMN SECTION ------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* LEFT: FEATURED ARTICLES */}
          <div className="space-y-4">
            <div className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-lg mb-4 text-center lg:text-left">
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

          {/* ⭐ CENTER: RANDOM TOP-RATED ARTICLE ⭐ */}
          <div className="space-y-4">
            {topRatedArticle && (
              <Link
                to={`/article/${topRatedArticle.slug}`}
                className="block bg-white rounded-lg shadow-lg overflow-hidden relative hover:shadow-2xl transition-shadow"
              >
                {topRatedArticle.image_url && (
                  <img
                    src={topRatedArticle.image_url}
                    alt={topRatedArticle.title}
                    className="w-full h-96 object-cover"
                  />
                )}

                <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 text-lg font-bold rounded-lg shadow-lg animate-pulse">
                  TOP RATED
                </div>

                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-2">{topRatedArticle.title}</h2>
                  <p className="text-gray-600 mb-4">{topRatedArticle.excerpt}</p>
                  <p className="text-sm text-gray-500 mb-2">By {topRatedArticle.author}</p>

                  <p className="text-blue-600 font-medium hover:underline">
                    Read Article →
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/* RIGHT: TOP DEALS */}
          <div className="space-y-4">
            <div className="bg-blue-800 text-white px-4 py-2 inline-block font-semibold rounded-lg mb-4 text-center lg:text-left">
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

        {/* SEARCH BOX */}
        <section className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Check out our reviews before you buy anything. Ever.
          </h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="What are you looking for today?"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all">
              SEARCH
            </button>
          </form>
        </section>

        {/* LATEST ARTICLES */}
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

        {/* TRENDING ARTICLES */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">WHAT'S TRENDING NOW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingArticles.map(article => (
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

        {/* EDITOR PICKS */}
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

        {/* TRENDING PRODUCTS */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">TRENDING PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingProducts.map(product => (
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

        {/* TESTING LAB */}
        <section className="mb-8 bg-blue-50 border border-blue-100 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
            BUYERCOMPASS TESTING LAB
          </h2>
          <p className="text-center mb-6 text-gray-600">
            Our testing experts put a wide range of products to rigorous standards with unique insights for confident shopping decisions.
          </p>
        </section>

        {/* CLIENT REVIEWS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
          <Slider {...sliderSettings}>
            {reviews.map(rev => (
              <div key={rev.id} className="px-2">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center gap-4">
                  <img
                    src={rev.image_url}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-700 mb-1 font-medium">"{rev.comment}"</p>
                    <p className="text-sm font-semibold text-gray-900">- {rev.name}</p>
                    <p className="text-yellow-400 mt-1">
                      {"★".repeat(rev.rating) + "☆".repeat(5 - rev.rating)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

      </div>
    </div>
  );
}
