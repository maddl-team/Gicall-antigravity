import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop />
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: '#0a0a0a'
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/finestre-pvc" element={<PvcWindowsPage />} />
          <Route path="/finestre-alluminio" element={<AluminumWindowsPage />} />
          <Route path="/finestre-legno-alluminio" element={<WoodAluminumWindowsPage />} />
          <Route path="/sistemi-scorrevoli" element={<SlidingSystemsPage />} />
          <Route path="/porte" element={<DoorsPage />} />
          <Route path="/zanzariere" element={<MosquitoNetsPage />} />
          <Route path="/outdoor" element={<OutdoorPage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
