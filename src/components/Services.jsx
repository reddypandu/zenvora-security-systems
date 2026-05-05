import React from 'react';
import { Camera, Fingerprint, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cctvImg      from '../assets/service_cctv.png';
import biometricImg from '../assets/service_biometric.png';
import networkingImg from '../assets/service_networking.png';

// Show only 3 featured services on the homepage
const featuredServices = [
  {
    slug: 'cctv-installation',
    title: 'CCTV Installation',
    desc: 'High-definition surveillance cameras with AI motion detection and remote monitoring.',
    icon: <Camera size={32} />,
    image: cctvImg,
    color: 'var(--secondary)',
  },
  {
    slug: 'biometric-access',
    title: 'Biometric Access',
    desc: 'Advanced fingerprint and facial recognition systems for secure entry management.',
    icon: <Fingerprint size={32} />,
    image: biometricImg,
    color: 'var(--accent)',
  },
  {
    slug: 'networking-solutions',
    title: 'Networking Solutions',
    desc: 'Enterprise-grade networking, Wi-Fi 6 setup, and structured cabling for businesses.',
    icon: <Network size={32} />,
    image: networkingImg,
    color: 'var(--secondary)',
  },
];

const Services = () => (
  <section id="services" className="section-padding relative">
    <div className="container">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <span className="section-subtitle">Our Expertise</span>
        <h2 className="section-title">
          Comprehensive <span className="gradient-text">Security</span> Solutions
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '560px', margin: '1rem auto 0', lineHeight: '1.8' }}>
          From individual homes to massive industrial complexes, we provide tailored security solutions using the world's most advanced technology.
        </p>
      </motion.div>

      {/* Cards — same style as ServicesPage */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {featuredServices.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={`/services/${service.slug}`}
              style={{
                display: 'flex', flexDirection: 'column', height: '100%',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '1.25rem', overflow: 'hidden',
                textDecoration: 'none', color: 'var(--text-main)',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(194,0,4,0.5)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image banner */}
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                  onMouseEnter={e => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.target.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.8), transparent)' }} />
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  background: 'rgba(194,0,4,0.15)', backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(194,0,4,0.3)', borderRadius: '0.6rem',
                  padding: '0.5rem', color: service.color,
                }}>
                  {service.icon}
                </div>
              </div>

              {/* Text */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem', flex: 1 }}>{service.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  marginTop: '1.5rem', color: 'var(--secondary)',
                  fontWeight: '700', fontSize: '0.9rem',
                }}>
                  Learn More →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center' }}
      >
        <Link to="/services" className="btn btn-outline px-10">View All Services</Link>
      </motion.div>
    </div>
  </section>
);

export default Services;
