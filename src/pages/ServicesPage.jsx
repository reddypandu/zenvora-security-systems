import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Camera, Fingerprint, Network, Plane,
  Sun, Settings, Monitor, ShieldAlert, ArrowRight
} from 'lucide-react';
import cctvImg from '../assets/service_cctv.png';
import biometricImg from '../assets/service_biometric.png';
import networkingImg from '../assets/service_networking.png';
import droneImg from '../assets/service_drone.png';
import solarImg from '../assets/service_solar_cctv.png';
import maintenanceImg from '../assets/service_maintenance.png';
import computerImg from '../assets/service_computer_it.png';
import wirelessImg from '../assets/service_wireless.png';


const services = [
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
  {
    slug: 'drone-surveillance',
    title: 'Drone Surveillance',
    desc: 'Autonomous security drones for large perimeter monitoring and aerial inspection.',
    icon: <Plane size={32} />,
    image: droneImg,
    color: 'var(--accent)',
  },
  {
    slug: 'solar-cctv',
    title: 'Solar CCTV',
    desc: 'Eco-friendly, self-powered security cameras for remote locations and farmsteads.',
    icon: <Sun size={32} />,
    image: solarImg,
    color: 'var(--secondary)',
  },
  {
    slug: 'annual-maintenance',
    title: 'Annual Maintenance',
    desc: 'Reliable AMC services to ensure your security infrastructure is always operational.',
    icon: <Settings size={32} />,
    image: maintenanceImg,
    color: 'var(--accent)',
  },
  {
    slug: 'computer-it-sales',
    title: 'Computer & IT Sales',
    desc: 'Premium hardware sales, including servers, workstations, and security peripherals.',
    icon: <Monitor size={32} />,
    image: computerImg,
    color: 'var(--secondary)',
  },
  {
    slug: 'wireless-security',
    title: 'Wireless Security',
    desc: 'Next-gen wireless alarm systems and sensors for hassle-free installation.',
    icon: <ShieldAlert size={32} />,
    image: wirelessImg,
    color: 'var(--accent)',
  },
];

const ServicesPage = () => (
  <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', color: 'var(--text-main)', fontFamily: "'Outfit', sans-serif" }}>
    <Navbar />

    {/* Hero */}
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'rgba(194,0,4,0.07)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
            Comprehensive Expertise
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: '800', lineHeight: 1.1, margin: '1rem 0 1.5rem' }}>
            Our <span style={{ color: 'var(--secondary)' }}>Security</span> Portfolio
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', lineHeight: '1.8' }}>
            From individual homes to massive industrial complexes, we provide tailored security solutions using the world's most advanced technology.
          </p>
        </motion.div>
      </div>
    </div>

    {/* Services Grid */}
    <div style={{ paddingBottom: '6rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to={`/services/${service.slug}`}
              style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1.25rem', overflow: 'hidden', textDecoration: 'none', color: 'var(--text-main)', transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,0,4,0.5)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Image or icon banner */}
              {service.image ? (
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.target.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.8), transparent)' }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(194,0,4,0.15)', backdropFilter: 'blur(4px)', border: '1px solid rgba(194,0,4,0.3)', borderRadius: '0.6rem', padding: '0.5rem', color: service.color }}>
                    {service.icon}
                  </div>
                </div>
              ) : (
                <div style={{ height: '200px', background: 'linear-gradient(135deg, rgba(194,0,4,0.12), rgba(10,10,20,0.9))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ color: service.color, opacity: 0.5, transform: 'scale(2.5)' }}>{service.icon}</div>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(194,0,4,0.12)', border: '1px solid rgba(194,0,4,0.25)', borderRadius: '0.6rem', padding: '0.5rem', color: service.color }}>
                    {service.icon}
                  </div>
                </div>
              )}

              {/* Content */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem', flex: 1 }}>{service.desc}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.5rem', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', transition: 'gap 0.2s' }}>
                  Learn More <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>

    <Footer />
  </div>
);

export default ServicesPage;
