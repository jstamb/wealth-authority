import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import CityPage from './pages/CityPage';
import TopicHub from './pages/TopicHub';
import FindAdvisor from './pages/FindAdvisor';
import ArticlePage from './pages/ArticlePage';
import Strategies from './pages/Strategies';
import CityDirectory from './pages/CityDirectory';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

// ScrollToTop component to handle scroll behavior and GA pageview tracking on route change
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Track pageview in Google Analytics for SPA navigation
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-HF7WFWX4KQ', {
        page_path: pathname,
      });
    }
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:slug" element={<CityPage />} />
            <Route path="/hub/:slug" element={<TopicHub />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/find-advisor" element={<FindAdvisor />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/cities" element={<CityDirectory />} />
            <Route path="*" element={<div className="pt-20 text-center pb-20"><h1 className="text-3xl font-serif font-bold">404 - Page Not Found</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;