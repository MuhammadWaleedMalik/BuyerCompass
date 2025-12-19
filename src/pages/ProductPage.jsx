import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

export default function ProductPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Theme colors
    const themeLight = "#51A2D5";
    const themeDark = "#15324E";

    // CTA texts (random)
    const ctaTexts = [
        "Check today’s Amazon price",
        "View on Amazon (limited stock)",
        "See price before it sells out",
    ];

    const [ctaText, setCtaText] = useState("");

    useEffect(() => {
        if (!slug) return;

        let foundProduct = null;

        const isMatch = (item) => {
            const itemSlug =
                item.slug ||
                item.name
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\w-]+/g, "");
            return itemSlug === slug;
        };

        for (const cat of data.categories) {
            if (cat.products) {
                for (const sub of cat.products) {
                    if (sub.item) {
                        const items = Array.isArray(sub.item)
                            ? sub.item
                            : [sub.item];
                        for (const item of items) {
                            if (isMatch(item)) {
                                foundProduct = {
                                    ...item,
                                    category_name: cat.name,
                                };
                                break;
                            }
                        }
                    }
                    if (foundProduct) break;
                }
            }
            if (foundProduct) break;
        }

        setProduct(foundProduct);

        // Pick random CTA on each page load
        setCtaText(
            ctaTexts[Math.floor(Math.random() * ctaTexts.length)]
        );

        setLoading(false);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-600 text-xl">Loading product...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-600 text-xl">Product not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* IMAGE SECTION */}
                        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
                            <img
                                src={
                                    product.image ||
                                    "https://placehold.co/600x400?text=No+Image"
                                }
                                alt={product.name}
                                className="max-w-full max-h-[500px] object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* DETAILS SECTION */}
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                {product.category_name || "Product"}
                            </span>

                            <h1
                                className="text-3xl md:text-4xl font-bold mb-4"
                                style={{ color: themeDark }}
                            >
                                {product.name}
                            </h1>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            {/* THEME-BASED CTA BUTTON */}
                            {product.priceUrl && (
                                <a
                                    href={product.priceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 px-7 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                    style={{
                                        backgroundColor: themeDark,
                                        color: "#ffffff",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                            themeLight)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                            themeDark)
                                    }
                                >
                                    {ctaText}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
