import mockData from '../data/mockData.json';

// ----------------------
// CATEGORY FUNCTIONS
// ----------------------

export const getCategories = () => {
  return mockData.categories;
};

export const getCategoryBySlug = (slug) => {
  return mockData.categories.find(cat => cat.slug === slug);
};

// ----------------------
// ARTICLE FUNCTIONS
// ----------------------

export const getArticles = () => {
  return mockData.articles;
};

export const getArticleBySlug = (slug) => {
  return mockData.articles.find(article => article.slug === slug);
};

export const getFeaturedArticles = (limit) => {
  const articles = mockData.articles.filter(article => article.is_featured);
  return limit ? articles.slice(0, limit) : articles;
};

export const getTrendingArticles = (limit) => {
  const articles = mockData.articles.filter(article => article.is_trending);
  return limit ? articles.slice(0, limit) : articles;
};

export const getArticlesByCategory = (categoryId) => {
  return mockData.articles.filter(article => article.category_id === categoryId);
};

// ----------------------
// PRODUCT FUNCTIONS
// ----------------------

export const getProducts = () => {
  return mockData.products;
};

export const getProductsByCategory = (categoryId) => {
  return mockData.products.filter(product => product.category_id === categoryId);
};

// ----------------------
// DEAL FUNCTIONS
// ----------------------

export const getDeals = () => {
  return mockData.deals;
};

export const getFeaturedDeals = (limit) => {
  const deals = mockData.deals.filter(deal => deal.is_featured);
  return limit ? deals.slice(0, limit) : deals;
};
