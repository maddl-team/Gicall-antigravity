import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import HomePage from './pages/HomePage';
import PvcWindowsPage from './pages/PvcWindowsPage';
import AluminumWindowsPage from './pages/AluminumWindowsPage';

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
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
