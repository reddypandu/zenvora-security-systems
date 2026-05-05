import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-bg-dark pt-20 pb-10 border-t border-glass-border">
      <div className="container">
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="ZENVORA Logo" style={{ width: '80px', borderRadius: '20px' }} />
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Leading the way in intelligent security solutions. We protect your homes, businesses, and futures with state-of-the-art technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-primary-light p-2 rounded-lg hover:bg-secondary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-primary-light p-2 rounded-lg hover:bg-secondary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-primary-light p-2 rounded-lg hover:bg-secondary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-primary-light p-2 rounded-lg hover:bg-secondary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-sm text-text-muted hover:text-secondary">Home</a></li>
              <li><a href="#services" className="text-sm text-text-muted hover:text-secondary">Services</a></li>
              <li><a href="#about" className="text-sm text-text-muted hover:text-secondary">About Us</a></li>
              <li><a href="#contact" className="text-sm text-text-muted hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-sm text-text-muted hover:text-secondary">CCTV Surveillance</a></li>
              <li><a href="#" className="text-sm text-text-muted hover:text-secondary">Biometric Systems</a></li>
              <li><a href="#" className="text-sm text-text-muted hover:text-secondary">Networking</a></li>
              <li><a href="#" className="text-sm text-text-muted hover:text-secondary">Drone Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-text-muted mb-4">Subscribe to get the latest security news and offers.</p>
            <form className="flex flex-col gap-2">
              <input type="email" className="input-field" placeholder="Your Email" />
              <button className="btn btn-primary text-sm">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md-flex-row justify-between items-center pt-10 border-t border-glass-border">
          <p className="text-xs text-text-muted mb-4 md-mb-0">
            © 2026 Zenvora Security Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-secondary">Privacy Policy</a>
            <a href="#" className="text-xs text-text-muted hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
