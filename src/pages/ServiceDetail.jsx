import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Camera,
  Fingerprint,
  Network,
  Plane,
  Sun,
  Settings,
  Monitor,
  ShieldAlert,
  Phone,
  Star,
  Clock,
  Users,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const iconMap = {
  Camera:      <Camera size={48} />,
  Fingerprint: <Fingerprint size={48} />,
  Network:     <Network size={48} />,
  Plane:       <Plane size={48} />,
  Sun:         <Sun size={48} />,
  Settings:    <Settings size={48} />,
  Monitor:     <Monitor size={48} />,
  ShieldAlert: <ShieldAlert size={48} />,
};

const iconMapSm = {
  Camera:      <Camera size={28} />,
  Fingerprint: <Fingerprint size={28} />,
  Network:     <Network size={28} />,
  Plane:       <Plane size={28} />,
  Sun:         <Sun size={28} />,
  Settings:    <Settings size={28} />,
  Monitor:     <Monitor size={28} />,
  ShieldAlert: <ShieldAlert size={28} />,
};

const stats = [
  { icon: <Star size={20} />,  label: 'Client Rating',      value: '4.9/5' },
  { icon: <Clock size={20} />, label: 'Support',             value: '24/7' },
  { icon: <Users size={20} />, label: 'Happy Clients',       value: '500+' },
  { icon: <Award size={20} />, label: 'Years Experience',    value: '10+' },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);
  const related = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', color: 'var(--text-main)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Service Not Found</h1>
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', color: 'var(--text-main)', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ position: 'relative', paddingTop: '7rem', paddingBottom: '0', overflow: 'hidden' }}>
        {/* gradient blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'rgba(194,0,4,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-80px', width: '400px', height: '400px', background: 'rgba(194,0,4,0.05)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div className="container">
          {/* Back link */}
          <Link
            to="/services"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s', fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--secondary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem', borderRadius: '50%', display: 'flex' }}>
              <ArrowLeft size={16} />
            </div>
            Back to Services
          </Link>

          {/* Two-column hero */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(194,0,4,0.1)', border: '1px solid rgba(194,0,4,0.25)', borderRadius: '9999px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--secondary)' }}>{iconMapSm[service.iconName]}</div>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Zenvora Security</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                {service.title.split(' ').map((word, i, arr) =>
                  i === arr.length - 1
                    ? <span key={i} style={{ color: 'var(--secondary)' }}>{word}</span>
                    : <span key={i}>{word} </span>
                )}
              </h1>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '560px', marginBottom: '2.5rem' }}>
                {service.fullDesc}
              </p>

              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '0.85rem 2rem' }}>
                <Phone size={18} /> Get a Free Quote
              </Link>
            </motion.div>

            {/* Image panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', position: 'relative' }}
            >
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div style={{ width: '100%', height: '380px', background: 'linear-gradient(135deg, rgba(194,0,4,0.15), rgba(26,26,26,0.9))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ color: 'var(--secondary)', opacity: 0.5, transform: 'scale(2.5)' }}>{iconMapSm[service.iconName]}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '2rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{service.title}</p>
                </div>
              )}
              {/* gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.8) 0%, transparent 60%)' }} />
              {/* bottom label */}
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldAlert size={18} style={{ color: 'var(--secondary)' }} />
                <span style={{ fontWeight: '700', fontSize: '0.875rem' }}>Professional Installation Included</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ padding: '1.5rem 1rem', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ color: 'var(--secondary)' }}>{stat.icon}</div>
                <div>
                  <p style={{ fontWeight: '800', fontSize: '1.25rem', lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div style={{ padding: '5rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '3rem' }}
          >
            <p style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>What's Included</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800' }}>Key Features & Capabilities</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'border-color 0.3s, background 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,0,4,0.4)'; e.currentTarget.style.background = 'rgba(194,0,4,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                <div style={{ background: 'rgba(194,0,4,0.12)', padding: '0.6rem', borderRadius: '0.6rem', color: 'var(--secondary)', flexShrink: 0 }}>
                  <CheckCircle2 size={20} />
                </div>
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY ZENVORA ── */}
      <div style={{ padding: '5rem 0', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>Our Advantage</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '1.5rem' }}>Why Choose Zenvora?</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              With over a decade of experience in {service.title}, our certified engineers deliver end-to-end support — from initial site survey to final installation and ongoing maintenance. Every system is tailored to your exact needs.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem' }}>
              We use only internationally-certified equipment, backed by our industry-leading AMC plans. Whether it's a single site or a multi-location enterprise deployment, we have the scale and expertise to deliver on time, every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {[
              { title: 'Certified Engineers', desc: 'All our technicians are industry-certified and background-verified.' },
              { title: 'End-to-End Service', desc: 'Survey, supply, install, configure, and maintain — all under one roof.' },
              { title: '24/7 Support', desc: 'Round-the-clock support line with guaranteed 4-hour response time.' },
              { title: 'Transparent Pricing', desc: 'No hidden costs. Detailed quotes provided before any work begins.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.875rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', background: 'rgba(194,0,4,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0, fontWeight: '800', fontSize: '0.85rem' }}>
                  {i + 1}
                </div>
                <div>
                  <p style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{item.title}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── RELATED SERVICES ── */}
      <div style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>Explore More</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800' }}>Related Services</h2>
            </div>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none', transition: 'gap 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.gap = '0.75rem'}
              onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {related.map((rel, i) => (
              <motion.div
                key={rel.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${rel.slug}`}
                  style={{ display: 'block', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', overflow: 'hidden', textDecoration: 'none', color: 'var(--text-main)', transition: 'border-color 0.3s, transform 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,0,4,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {rel.image ? (
                    <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                      <img src={rel.image} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.7), transparent)' }} />
                    </div>
                  ) : (
                    <div style={{ height: '160px', background: 'linear-gradient(135deg, rgba(194,0,4,0.12), rgba(26,26,26,0.9))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', opacity: 0.6 }}>
                      {iconMap[rel.iconName]}
                    </div>
                  )}
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontWeight: '700', marginBottom: '0.4rem', fontSize: '1rem' }}>{rel.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{rel.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div style={{ background: 'linear-gradient(135deg, rgba(194,0,4,0.2), rgba(194,0,4,0.05))', borderTop: '1px solid rgba(194,0,4,0.2)', padding: '4rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: '800', marginBottom: '0.5rem' }}>
              Ready to secure your premises?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Talk to our experts today — no obligation, no hidden fees.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', fontSize: '1rem' }}>
              <Phone size={18} /> Contact Us
            </Link>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: '600', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
