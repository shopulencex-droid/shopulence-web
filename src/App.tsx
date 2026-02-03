import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedPage from './components/AnimatedPage';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import BrandProducts from './pages/BrandProducts';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnsAndRefunds from './pages/ReturnsAndRefunds';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/about" 
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/brands" 
            element={
              <AnimatedPage>
                <Brands />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/brands/:brandSlug" 
            element={
              <AnimatedPage>
                <BrandProducts />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/terms-and-conditions" 
            element={
              <AnimatedPage>
                <TermsAndConditions />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/privacy-policy" 
            element={
              <AnimatedPage>
                <PrivacyPolicy />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/returns-and-refunds" 
            element={
              <AnimatedPage>
                <ReturnsAndRefunds />
              </AnimatedPage>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
