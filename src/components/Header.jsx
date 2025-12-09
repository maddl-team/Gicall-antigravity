"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

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
      name: 'Infissi & Serramenti',
      subLinks: [
        { name: 'Finestre in PVC', href: '/finestre-pvc' },
        { name: 'Finestre in Alluminio', href: '/finestre-alluminio' },
        { name: 'Legno Alluminio', href: '/finestre-legno-alluminio' },
        { name: 'Sistemi Scorrevoli', href: '/sistemi-scorrevoli' },
      ]
    },
    {
      name: 'Porte & Sicurezza',
      subLinks: [
        { name: 'Porte da Interno', href: '/porte-interne' },
        { name: 'Porte Blindate', href: '/porte-blindate' },
        { name: 'Grate e Persiane Blindate', href: '/grate-persiane' },
      ]
    },
    {
      name: 'Outdoor',
      subLinks: [
        { name: 'Zanzariere', href: '/zanzariere' },
        { name: 'Avvolgibili e Cassonetti', href: '/avvolgibili-cassonetti' },
        { name: 'Tende da Sole', href: '/tende-da-sole' },
        { name: 'Pergole & Arredo Giardino', href: '/pergole-bioclimatiche' },
        { name: 'Lavorazioni in Ferro', href: '/lavorazioni-ferro' },
      ]
    },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Contatti', href: '/contatti' },
  ];

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleKeyDown = (event, linkName, hasSubmenu) => {
    if (!hasSubmenu) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveDropdown((prev) => (prev === linkName ? null : linkName));
    }
    if (event.key === 'Escape') {
      setActiveDropdown(null);
    }
    if (event.key === 'Tab') {
      // Close dropdown when tabbing away
      setActiveDropdown(null);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${pathname === '/' && !isScrolled
        ? 'bg-transparent py-6'
        : 'bg-white shadow-md py-4'
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="relative h-12 w-[127px]">
            <Image
              src="/Logo-Gicall.png"
              alt="GICALL"
              fill
              className="object-contain"
              sizes="127px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const submenuId = link.subLinks
              ? `${link.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-submenu`
              : undefined;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && handleDropdownEnter(link.name)}
                onMouseLeave={handleDropdownLeave}
                onBlur={(e) => {
                  // Close when focus leaves the dropdown container
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    handleDropdownLeave();
                  }
                }}
              >

                {link.subLinks ? (
                  <button
                    type="button"
                    aria-expanded={activeDropdown === link.name}
                    aria-controls={submenuId}
                    className={`text-sm font-medium transition-colors hover:text-amber-500 flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 focus:outline-none ${isScrolled || pathname !== '/' ? 'text-slate-700' : 'text-slate-100'
                      }`}
                    onKeyDown={(e) => handleKeyDown(e, link.name, true)}
                    onClick={() => setActiveDropdown((prev) => (prev === link.name ? null : link.name))}
                  >
                    {link.name}
                    <FiChevronDown />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-amber-500 flex items-center gap-1 ${isScrolled || pathname !== '/' ? 'text-slate-700' : 'text-slate-100'
                      }`}
                  >
                    {link.name}
                  </Link>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {link.subLinks && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
                    id={submenuId}
                    role="menu"
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors focus:outline-none focus:bg-amber-50"
                        role="menuitem"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            );
          })}
          <a
            href="#contatti"
            className={`btn ${isScrolled ? 'btn-primary' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
          >
            Richiedi Preventivo
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-slate-900"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
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
            className="md:hidden bg-white overflow-hidden"
            id="mobile-menu"
            role="menu"
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
                            href={subLink.href}
                            className="text-slate-600 hover:text-amber-500 text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-700 font-medium hover:text-amber-500 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
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
