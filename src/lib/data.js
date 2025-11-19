import mockData from "../data/mockData.json";

export const getCategories = () => {
  return mockData.categories;
};

export const getCategoryBySlug = (slug) => {
  return mockData.categories.find((cat) => cat.slug === slug);
};

export const getArticles = () => {
  return mockData.articles;
};

export const getArticleBySlug = (slug) => {
  return mockData.articles.find((a) => a.slug === slug);
};

export const getFeaturedArticles = (limit) => {
  const items = mockData.articles.filter((a) => a.is_featured);
  return limit ? items.slice(0, limit) : items;
};

export const getTrendingArticles = (limit) => {
  const items = mockData.articles.filter((a) => a.is_trending);
  return limit ? items.slice(0, limit) : items;
};

export const getArticlesByCategory = (categoryId) => {
  return mockData.articles.filter((a) => a.category_id === categoryId);
};

export const getRelatedArticles = (categoryId, currentSlug, limit) => {
  const items = mockData.articles.filter(
    (a) => a.category_id === categoryId && a.slug !== currentSlug
  );
  return limit ? items.slice(0, limit) : items;
};

export const getProducts = () => {
  return mockData.products;
};

export const getProductsByCategory = (categoryId) => {
  return mockData.products.filter((p) => p.category_id === categoryId);
};

export const getDeals = () => {
  return mockData.deals;
};

export const getFeaturedDeals = (limit) => {
  const items = mockData.deals.filter((d) => d.is_featured);
  return limit ? items.slice(0, limit) : items;
};
