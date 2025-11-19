import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/About";
import TrendingPage from "./pages/TrendingPage";
import DealsPage from "./pages/DealsPage";
import GiftGuidesPage from "./pages/GiftGuidesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Terms from "./pages/Terms";
import About from "./pages/About";



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/gift-guides" element={<GiftGuidesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />

        

          <Route path="/article/:slug" element={<ArticlePage />} />

          {/* The correct dynamic route */}
          <Route path="/category/:catSlug/:subSlug" element={<CategoryPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
