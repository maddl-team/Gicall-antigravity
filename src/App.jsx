import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import HomePage from './pages/HomePage';
import PvcWindowsPage from './pages/PvcWindowsPage';
import AluminumWindowsPage from './pages/AluminumWindowsPage';
import WoodAluminumWindowsPage from './pages/WoodAluminumWindowsPage';
import DoorsPage from './pages/DoorsPage';
import MosquitoNetsPage from './pages/MosquitoNetsPage';

import SlidingSystemsPage from './pages/SlidingSystemsPage';
import OutdoorPage from './pages/OutdoorPage';
import AboutPage from './pages/AboutPage';

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
    <HelmetProvider>
      <Router>
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
      </Router>
    </HelmetProvider>
  );
}

export default App;
