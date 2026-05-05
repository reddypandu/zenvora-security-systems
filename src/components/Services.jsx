import React from 'react';
import {
  Camera, Fingerprint, Network, Plane,
  Sun, Settings, Monitor, ShieldAlert
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { slug: 'cctv-installation',    title: 'CCTV Installation',    desc: 'HD surveillance cameras with AI motion detection & remote monitoring.', iconName: 'Camera',      tag: 'Popular' },
  { slug: 'biometric-access',     title: 'Biometric Access',     desc: 'Fingerprint & facial recognition systems for secure entry control.',    iconName: 'Fingerprint', tag: null },
  { slug: 'networking-solutions', title: 'Networking Solutions',  desc: 'Enterprise Wi-Fi 6, structured cabling & secure VPN setups.',           iconName: 'Network',     tag: null },
  { slug: 'drone-surveillance',   title: 'Drone Surveillance',   desc: 'Autonomous drones for large perimeter monitoring & aerial inspection.',  iconName: 'Plane',       tag: 'New' },
  { slug: 'solar-cctv',          title: 'Solar CCTV',           desc: 'Eco-friendly, self-powered cameras for remote & off-grid locations.',    iconName: 'Sun',         tag: null },
  { slug: 'annual-maintenance',   title: 'Annual Maintenance',   desc: 'AMC plans to keep your entire security infrastructure operational.',     iconName: 'Settings',    tag: null },
  { slug: 'computer-it-sales',    title: 'Computer & IT Sales',  desc: 'Premium NVR servers, workstations, and security peripherals.',           iconName: 'Monitor',     tag: null },
  { slug: 'wireless-security',    title: 'Wireless Security',    desc: 'Smart wireless alarm systems & sensors with app-based control.',         iconName: 'ShieldAlert', tag: null },
];

const iconMap = {
  Camera:      <Camera className="text-secondary" size={32} />,
  Fingerprint: <Fingerprint className="text-accent" size={32} />,
  Network:     <Network className="text-secondary" size={32} />,
  Plane:       <Plane className="text-accent" size={32} />,
  Sun:         <Sun className="text-secondary" size={32} />,
  Settings:    <Settings className="text-accent" size={32} />,
  Monitor:     <Monitor className="text-secondary" size={32} />,
  ShieldAlert: <ShieldAlert className="text-accent" size={32} />,
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-morphism p-8 rounded-2xl flex flex-col gap-4 group hover:border-secondary transition-all duration-500 relative overflow-hidden"
  >
    {service.tag && (
      <span className="service-tag">{service.tag}</span>
    )}
    <div className="mb-2 p-4 bg-primary-light rounded-xl w-fit group-hover:scale-110 transition-all duration-500">
      {iconMap[service.iconName]}
    </div>
    <h3 className="text-xl font-bold">{service.title}</h3>
    <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
    <Link
      to={`/services/${service.slug}`}
      className="mt-4 text-sm font-bold flex items-center gap-2 group-hover:text-secondary transition-colors"
    >
      Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
    </Link>
  </motion.div>
);

const Services = () => (
  <section id="services" className="section-padding relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">Our Expertise</span>
        <h2 className="section-title mb-12">
          Comprehensive <span className="gradient-text">Security</span> Solutions
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <Link to="/services" className="btn btn-outline px-10">View All Solutions</Link>
      </motion.div>
    </div>
  </section>
);

export default Services;
