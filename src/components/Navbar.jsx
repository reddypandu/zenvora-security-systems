import React, { useState, useEffect } from "react";
import { Shield, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { servicesData } from "../data/servicesData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? "glass-morphism py-3" : "bg-transparent py-5"}`}
      style={{ borderBottom: isScrolled || !isHome ? "1px solid rgba(255,255,255,0.05)" : "none" }}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "80px", borderRadius: "20px" }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="md-flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <Link to="/services" className="nav-link flex items-center gap-1" style={{ display: 'flex', alignItems: 'center' }}>
              Services 
              <ChevronDown 
                size={16} 
                style={{ 
                  transition: 'transform 0.3s', 
                  transform: desktopServicesOpen ? 'rotate(180deg)' : 'rotate(0)' 
                }} 
              />
            </Link>
            
            {desktopServicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 rounded-xl flex flex-col p-2 shadow-2xl animate-fadeIn"
                style={{ 
                  minWidth: '260px', 
                  background: 'rgba(2, 6, 23, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}
              >
                {servicesData.map((service, index) => (
                  <Link 
                    key={service.slug} 
                    to={`/services/${service.slug}`} 
                    className="p-3 text-sm text-text-main hover:text-accent transition-colors"
                    style={{ borderBottom: index < servicesData.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                    onClick={() => setDesktopServicesOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <button className="btn btn-primary text-sm">Get a Quote</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md-hidden text-text-main"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md-hidden fixed inset-0 w-full h-screen animate-fadeIn overflow-y-auto"
          style={{
            top: "70px",
            height: "calc(100vh - 70px)",
            backgroundColor: "rgba(2, 6, 23, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 40,
            borderTop: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <div className="flex flex-col p-6 gap-6">
            <Link 
              to="/" 
              className="text-2xl font-bold text-text-main transition-colors"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
              <div 
                className="flex items-center justify-between text-2xl font-bold text-text-main cursor-pointer"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown 
                  size={24} 
                  style={{ 
                    transition: 'transform 0.3s', 
                    transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' 
                  }} 
                />
              </div>
              
              {mobileServicesOpen && (
                <div className="flex flex-col gap-4 mt-4 animate-fadeIn" style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--accent)' }}>
                  <Link 
                    to="/services" 
                    className="text-lg text-text-main hover:text-accent transition-colors" 
                    onClick={closeMobileMenu}
                  >
                    All Services
                  </Link>
                  {servicesData.map(service => (
                    <Link 
                      key={service.slug} 
                      to={`/services/${service.slug}`} 
                      className="text-lg text-text-main opacity-80 hover:opacity-100 hover:text-accent transition-all"
                      onClick={closeMobileMenu}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-2xl font-bold text-text-main transition-colors"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-2xl font-bold text-text-main transition-colors"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            
            <button className="btn btn-primary w-full mt-4 py-4 text-lg" onClick={closeMobileMenu}>
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
