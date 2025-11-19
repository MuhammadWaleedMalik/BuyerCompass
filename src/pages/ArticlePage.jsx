import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import articlesData from '../data/articles.json';
import mockData from '../data/mockdata.json'; // For related products

export default function ArticlePage() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]); // NEW

  useEffect(() => {
    if (!slug) return;

    // Find article by slug
    const foundArticle = articlesData.articles.find(
      (a) => a.slug === slug
    );

    if (foundArticle) {
      setArticle(foundArticle);

      // Related articles (same category)
      const relArts = articlesData.articles
        .filter((a) => a.category_id === foundArticle.category_id && a.slug !== slug)
        .slice(0, 3);
      setRelatedArticles(relArts);

      // NEW — Related products based on category
      const relProds = mockData.products
        .filter((prod) => prod.category_id === foundArticle.category_id)
        .slice(0, 4);

      setRelatedProducts(relProds);
    }
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-96 object-cover"
            />
          )}

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            <div className="flex items-center text-sm text-gray-600 mb-6">
              <span>By {article.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(article.created_at).toLocaleDateString()}</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-700 mb-6">{article.excerpt}</p>

              <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </div>
            </div>
          </div>
        </article>

        {/* ------------------ RELATED ARTICLES ------------------ */}
        {relatedArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/article/${related.slug}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {related.image_url && (
                    <img
                      src={related.image_url}
                      alt={related.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{related.title}</h3>
                    <p className="text-sm text-gray-600">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ------------------ RELATED PRODUCTS (NEW) ------------------ */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <a
                  key={prod.id}
                  href={prod.affiliate_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {prod.image_url && (
                    <img
                      src={prod.image_url}
                      alt={prod.name}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{prod.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {prod.brand || "Brand"}
                    </p>
                    <p className="text-green-600 font-semibold">${prod.discount_price}</p>
                    <p className="line-through text-gray-400 text-sm">${prod.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
