import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedPage from './components/AnimatedPage';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Contact from './pages/Contact';

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
            path="/contact" 
            element={
              <AnimatedPage>
                <Contact />
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
