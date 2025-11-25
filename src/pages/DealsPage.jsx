import { useEffect, useState } from "react";
import data from "../data/data.json";
import articlesData from "../data/articles.json";

export default function DealsPage() {
  const [topDeals, setTopDeals] = useState([]);
  const [dealArticles, setDealArticles] = useState([]);

  useEffect(() => {
    // Flatten products from data.json
    const allProducts = [];
    let idCounter = 1;
    data.categories.forEach(cat => {
      if (cat.products) {
        cat.products.forEach(sub => {
          if (sub.item) {
            sub.item.forEach(item => {
              allProducts.push({
                id: item.id || `prod-${idCounter++}`,
                name: item.name,
                slug: item.slug || item.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
                description: item.description,
                price: item.priceText || "Check Price",
                image_url: item.image || "https://placehold.co/600x400?text=No+Image",
                category_id: cat.slug,
                affiliate_link: item.priceUrl || "#"
              });
            });
          }
        });
      }
    });

    setTopDeals(allProducts.slice(0, 10));
    setDealArticles(articlesData.articles.slice(0, 6));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT MAIN CONTENT */}
          <div className="lg:col-span-2">

            {/* BLACK FRIDAY LABEL */}
            <div className="bg-amber-500 text-white px-4 py-2 inline-block font-semibold rounded-lg mb-6">
              BLACK FRIDAY
            </div>

            {/* HERO DEAL SECTION */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Black Friday Deals"
                className="w-full h-96 object-cover"
              />

              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">
                  Laptops are already up to 40% off in early Black Friday deals
                </h1>

                <p className="text-gray-600 mb-4">
                  You don't have to wait until Black Friday to get great deals.
                  We're already seeing huge discounts on top-brand laptops.
                </p>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Related Reviews:</h3>

                  <div className="flex flex-wrap gap-2">
                    <a className="text-blue-600 hover:underline text-sm" href="#">
                      Best Laptop Backpacks
                    </a>
                    <a className="text-blue-600 hover:underline text-sm" href="#">
                      Best Laptop Computers
                    </a>
                    <a className="text-blue-600 hover:underline text-sm" href="#">
                      Best MacBooks
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* LATEST ARTICLES */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">THE LATEST</h2>

              <div className="space-y-4">
                {dealArticles.map((article) => (
                  <a
                    key={article.id}
                    href={`/article/${article.slug}`}
                    className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                  >
                    <p className="text-xs text-blue-600 mb-1 uppercase">HOLIDAY</p>
                    <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                      {article.title}
                    </h3>
                  </a>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR – TOP DEALS */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">

              <div className="bg-green-500 text-white px-4 py-2 inline-block font-semibold rounded-lg mb-6">
                TOP DEALS
              </div>

              <div className="space-y-6">
                {topDeals.map((deal) => (
                  <div key={deal.id} className="border-b border-gray-200 pb-4 last:border-0">

                    {deal.image_url && (
                      <img
                        src={deal.image_url}
                        alt={deal.title}
                        className="w-full h-40 object-cover rounded mb-3"
                      />
                    )}

                    <h3 className="font-semibold text-sm mb-2">{deal.title}</h3>

                    {deal.price && (
                      <p className="text-green-600 font-semibold text-lg mb-2">
                        ${deal.price}
                      </p>
                    )}

                    {deal.description && (
                      <p className="text-xs text-gray-600 mb-2">
                        {deal.description}
                      </p>
                    )}

                    {deal.link && (
                      <a
                        href={deal.link}
                        className="text-blue-600 text-sm hover:underline block"
                      >
                        View all deals →
                      </a>
                    )}

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
