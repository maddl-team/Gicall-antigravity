import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    { name: 'Chi Siamo', href: '/chi-siamo' },
    {
      name: 'Prodotti',
      href: '/#prodotti',
      subLinks: [
        { name: 'Finestre in PVC', href: '/finestre-pvc' },
        { name: 'Finestre in Alluminio', href: '/finestre-alluminio' },
        { name: 'Legno Alluminio', href: '/finestre-legno-alluminio' },
        { name: 'Sistemi Scorrevoli', href: '/sistemi-scorrevoli' },
        { name: 'Porte Interne e Blindate', href: '/porte' },
        { name: 'Zanzariere', href: '/zanzariere' },
        { name: 'Outdoor (Tende e Pergole)', href: '/outdoor' },
      ]
    },
    { name: 'Metodo', href: '/#metodo' },
    { name: 'Showroom', href: '/#showroom' },
  ];

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

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
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.subLinks && handleDropdownEnter(link.name)}
              onMouseLeave={handleDropdownLeave}
            >
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 flex items-center gap-1 ${isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-100'
                  }`}
              >
                {link.name}
                {link.subLinks && <FiChevronDown />}
              </a>

              {/* Dropdown */}
              <AnimatePresence>
                {link.subLinks && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div className="space-y-2">
                      <div className="font-medium text-slate-900 flex items-center gap-2">
                        {link.name}
                      </div>
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-slate-100">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.href}
                            className="text-slate-600 hover:text-amber-500 text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-700 font-medium hover:text-amber-500 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="#contatti"
                className="btn btn-primary w-full justify-center mt-4"
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
