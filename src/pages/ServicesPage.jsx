import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { 
  Camera, 
  Fingerprint, 
  Network, 
  Plane, 
  Sun, 
  Settings, 
  Monitor, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Camera: <Camera className="text-secondary" size={32} />,
  Fingerprint: <Fingerprint className="text-accent" size={32} />,
  Network: <Network className="text-secondary" size={32} />,
  Plane: <Plane className="text-accent" size={32} />,
  Sun: <Sun className="text-secondary" size={32} />,
  Settings: <Settings className="text-accent" size={32} />,
  Monitor: <Monitor className="text-secondary" size={32} />,
  ShieldAlert: <ShieldAlert className="text-accent" size={32} />,
};

const ServicesPage = () => {
  return (
    <div className="bg-bg-dark min-h-screen">
      <Navbar />
      <div className="services-top pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="section-subtitle">Comprehensive Expertise</span>
            <h1 className="text-5xl md-text-7xl font-bold mb-6">Our <span className="gradient-text">Security</span> Portfolio</h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              From individual homes to massive industrial complexes, we provide tailored security solutions using the world's most advanced technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-morphism p-8 rounded-3xl hover:border-secondary transition-all duration-500 group min-h-full"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary-light rounded-xl group-hover:scale-110 transition-all duration-500">
                    {iconMap[service.iconName]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-text-muted mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    <Link 
                      to={`/service/${service.slug}`} 
                      className="inline-flex items-center gap-2 text-secondary font-bold hover:text-accent transition-colors group-hover:translate-x-2 duration-300"
                    >
                      Learn More <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
