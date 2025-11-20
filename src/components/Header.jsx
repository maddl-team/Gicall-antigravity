import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Perché Gicall', href: '/#usp' },
    { name: 'Prodotti', href: '/#prodotti' },
    { name: 'Metodo', href: '/#metodo' },
    { name: 'Showroom', href: '/#showroom' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <img src="/Logo-Gicall.png" alt="GICALL" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-100'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contatti"
            className={`btn ${isScrolled ? 'btn-primary' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
          >
            Richiedi Preventivo
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-2xl ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 font-medium hover:text-amber-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contatti"
                className="btn btn-primary w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiPhone className="mr-2" /> Richiedi Preventivo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
