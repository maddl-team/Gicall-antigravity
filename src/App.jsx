import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { PageTransition } from './components/PageTransition';

// Lazy load all page components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const PvcWindowsPage = lazy(() => import('./pages/PvcWindowsPage'));
const AluminumWindowsPage = lazy(() => import('./pages/AluminumWindowsPage'));
const WoodAluminumWindowsPage = lazy(() => import('./pages/WoodAluminumWindowsPage'));
const DoorsPage = lazy(() => import('./pages/DoorsPage'));
const MosquitoNetsPage = lazy(() => import('./pages/MosquitoNetsPage'));
const SlidingSystemsPage = lazy(() => import('./pages/SlidingSystemsPage'));
const OutdoorPage = lazy(() => import('./pages/OutdoorPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Wrapper component to use useLocation inside Router
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/finestre-pvc" element={<PageTransition><PvcWindowsPage /></PageTransition>} />
        <Route path="/finestre-alluminio" element={<PageTransition><AluminumWindowsPage /></PageTransition>} />
        <Route path="/finestre-legno-alluminio" element={<PageTransition><WoodAluminumWindowsPage /></PageTransition>} />
        <Route path="/sistemi-scorrevoli" element={<PageTransition><SlidingSystemsPage /></PageTransition>} />
        <Route path="/porte" element={<PageTransition><DoorsPage /></PageTransition>} />
        <Route path="/zanzariere" element={<PageTransition><MosquitoNetsPage /></PageTransition>} />
        <Route path="/outdoor" element={<PageTransition><OutdoorPage /></PageTransition>} />
        <Route path="/chi-siamo" element={<PageTransition><AboutPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', // gestureDirection -> orientation (or gestureOrientation in some versions, but 'orientation' is the main one for direction)
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      syncTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: '#ffffff'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(255, 0, 0, 0.2)',
            borderTop: '3px solid #ff0000',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
        </div>
      }>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
