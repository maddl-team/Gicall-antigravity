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
const SlidingSystemsPage = lazy(() => import('./pages/SlidingSystemsPage'));
const InteriorDoorsPage = lazy(() => import('./pages/InteriorDoorsPage'));
const SecurityDoorsPage = lazy(() => import('./pages/SecurityDoorsPage'));
const GratingsShuttersPage = lazy(() => import('./pages/GratingsShuttersPage'));
const MosquitoNetsPage = lazy(() => import('./pages/MosquitoNetsPage'));
const RollerShuttersPage = lazy(() => import('./pages/RollerShuttersPage'));
const PergolasPage = lazy(() => import('./pages/PergolasPage'));
const AwningsPage = lazy(() => import('./pages/AwningsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
        <Route path="/porte-interne" element={<PageTransition><InteriorDoorsPage /></PageTransition>} />
        <Route path="/porte-blindate" element={<PageTransition><SecurityDoorsPage /></PageTransition>} />
        <Route path="/grate-persiane" element={<PageTransition><GratingsShuttersPage /></PageTransition>} />
        <Route path="/zanzariere" element={<PageTransition><MosquitoNetsPage /></PageTransition>} />
        <Route path="/avvolgibili" element={<PageTransition><RollerShuttersPage /></PageTransition>} />
        <Route path="/pergole" element={<PageTransition><PergolasPage /></PageTransition>} />
        <Route path="/tende-da-sole" element={<PageTransition><AwningsPage /></PageTransition>} />
        <Route path="/servizi" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/contatti" element={<PageTransition><ContactsPage /></PageTransition>} />
        <Route path="/chi-siamo" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
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

    // Expose lenis globally so PageTransition can access it
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
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
