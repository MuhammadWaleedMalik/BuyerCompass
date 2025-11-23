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

  const themeLight = "#51A2D5";
  const themeDark = "#15324E";

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
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ------------------ TOP 3-COLUMN SECTION ------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* LEFT: FEATURED ARTICLES */}
          <div className="space-y-4">
            <div className="px-4 py-2 font-semibold rounded-lg mb-4 text-center lg:text-left" style={{ backgroundColor: themeLight, color: "#ffffff" }}>
              THE LATEST
            </div>
            {featuredArticles.map(article => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="block rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#ffffff", color: themeDark }}
              >
                <h3 className="font-semibold mb-1" style={{ color: themeLight }}>{article.title}</h3>
                <p className="text-sm">{article.excerpt}</p>
              </Link>
            ))}
          </div>

          {/* ⭐ CENTER: RANDOM TOP-RATED ARTICLE ⭐ */}
          <div className="space-y-4">
            {topRatedArticle && (
              <Link
                to={`/article/${topRatedArticle.slug}`}
                className="block rounded-lg shadow-lg overflow-hidden relative hover:shadow-2xl transition-shadow"
                style={{ backgroundColor: "#ffffff", color: themeDark }}
              >
                {topRatedArticle.image_url && (
                  <img
                    src={topRatedArticle.image_url}
                    alt={topRatedArticle.title}
                    className="w-full h-96 object-cover"
                  />
                )}
                <div className="absolute top-4 left-4 px-4 py-2 text-lg font-bold rounded-lg shadow-lg animate-pulse" style={{ backgroundColor: themeDark, color: "#ffffff" }}>
                  TOP RATED
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-2">{topRatedArticle.title}</h2>
                  <p className="mb-4">{topRatedArticle.excerpt}</p>
                  <p className="text-sm mb-2">By {topRatedArticle.author}</p>
                  <p className="font-medium" style={{ color: themeLight }}>Read Article →</p>
                </div>
              </Link>
            )}
          </div>

          {/* RIGHT: TOP DEALS */}
          <div className="space-y-4">
            <div className="px-4 py-2 font-semibold rounded-lg mb-4 text-center lg:text-left" style={{ backgroundColor: themeDark, color: "#ffffff" }}>
              TOP DEALS
            </div>
            {topDeals.map(deal => (
              <div key={deal.id} className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", color: themeDark }}>
                {deal.image_url && (
                  <img src={deal.image_url} alt={deal.title} className="w-full h-32 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{deal.title}</h3>
                  {deal.price && <p className="font-semibold" style={{ color: themeLight }}>${deal.price}</p>}
                  <Link to={deal.link || "#"} className="text-sm mt-1 block" style={{ color: themeLight }}>View Deal</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH BOX */}
        <section className="mb-8 rounded-lg p-6" style={{ backgroundColor: "#ffffff" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: themeDark }}>Check out our reviews before you buy anything. Ever.</h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="What are you looking for today?"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
              style={{ borderColor: themeLight }}
            />
            <button className="px-8 py-3 rounded-lg font-semibold" style={{ backgroundColor: themeLight, color: "#ffffff" }}>SEARCH</button>
          </form>
        </section>

        {/* LATEST ARTICLES */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: themeDark }}>LATEST ARTICLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map(article => (
              <Link key={article.id} to={`/article/${article.slug}`} className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", color: themeDark }}>
                {article.image_url && <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover" />}
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TRENDING ARTICLES */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: themeDark }}>WHAT'S TRENDING NOW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingArticles.map(article => (
              <Link key={article.id} to={`/article/${article.slug}`} className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", color: themeDark }}>
                {article.image_url && <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover" />}
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm mb-2">by {article.author}</p>
                  <p className="text-sm">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EDITOR PICKS */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: themeDark }}>EDITOR’S PICKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {editorPicks.map(article => (
              <Link key={article.id} to={`/article/${article.slug}`} className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", color: themeDark }}>
                {article.image_url && <img src={article.image_url} alt={article.title} className="w-full h-40 object-cover" />}
                <div className="p-4">
                  <h3 className="font-semibold">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TRENDING PRODUCTS */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: themeDark }}>TRENDING PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingProducts.map(product => (
              <a key={product.id} href={product.affiliate_link || "#"} target="_blank" rel="noopener noreferrer" className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow" style={{ backgroundColor: "#ffffff", color: themeDark }}>
                {product.image_url && <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />}
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm mb-2">{product.brand || "Brand"}</p>
                  <p className="font-semibold" style={{ color: themeLight }}>${product.discount_price}</p>
                  <p className="line-through text-sm" style={{ color: themeDark }}>${product.price}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CLIENT REVIEWS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: themeDark }}>What Our Clients Say</h2>
          <Slider {...sliderSettings}>
            {reviews.map(rev => (
              <div key={rev.id} className="px-2">
                <div className="rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center gap-4" style={{ backgroundColor: "#ffffff", color: themeDark }}>
                  <img src={rev.avatar || `https://i.pravatar.cc/50?img=${rev.id}`} alt={rev.name} className="w-12 h-12 rounded-full object-cover"/>
                  <div>
                    <p className="mb-1 font-medium">"{rev.comment}"</p>
                    <p className="text-sm font-semibold">- {rev.name}</p>
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
