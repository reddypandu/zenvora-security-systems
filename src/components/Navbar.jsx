import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/#home' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'glass-morphism py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" style={{ width: '80px', borderRadius: '20px' }} />
        </Link>

        {/* Desktop Links */}
        <div className="md-flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
          <button className="btn btn-primary text-sm">Get a Quote</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md-hidden text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md-hidden fixed inset-0 w-full h-screen glass-morphism animate-fadeIn" style={{ position: 'fixed', top: 0, left: 0, zIndex: 100, backgroundColor: 'rgba(2, 6, 23, 0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
          <button
            className="absolute"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <X size={40} />
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-outfit"
                style={{ fontSize: '2.5rem', fontWeight: '800', textDecoration: 'none', color: 'white' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="btn btn-primary w-full" style={{ maxWidth: '300px' }}>Get a Quote</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
