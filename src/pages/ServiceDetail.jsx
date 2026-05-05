import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Camera, 
  Fingerprint, 
  Network, 
  Plane, 
  Sun, 
  Settings, 
  Monitor, 
  ShieldAlert 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const iconMap = {
  Camera: <Camera size={48} />,
  Fingerprint: <Fingerprint size={48} />,
  Network: <Network size={48} />,
  Plane: <Plane size={48} />,
  Sun: <Sun size={48} />,
  Settings: <Settings size={48} />,
  Monitor: <Monitor size={48} />,
  ShieldAlert: <ShieldAlert size={48} />,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-dark text-text-main">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Service Not Found</h1>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-dark min-h-screen text-text-main font-outfit">
      <Navbar />
      
      {/* Service Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/10 via-transparent to-bg-dark -z-10"></div>
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
        
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-secondary mb-10 transition-colors group">
            <div className="bg-white/5 p-2 rounded-full group-hover:bg-secondary/20">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back to Overview</span>
          </Link>

          <div className="grid grid-cols-1 lg-grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="bg-secondary/10 p-4 rounded-2xl text-secondary border border-secondary/20">
                    {iconMap[service.iconName]}
                 </div>
                 <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">Security Expertise</span>
              </div>
              <h1 className="text-5xl md-text-7xl font-bold mb-8 leading-tight">
                {service.title.split(' ').map((word, i) => (
                  i === service.title.split(' ').length - 1 ? <span key={i} className="gradient-text">{word}</span> : word + ' '
                ))}
              </h1>
              <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                {service.fullDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-morphism p-1 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
               <div className="aspect-video bg-primary-light relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent z-10"></div>
                  {/* Placeholder for service image - in real app would be dynamic */}
                  <div className="w-full h-full flex items-center justify-center text-secondary opacity-20 group-hover:scale-110 transition-transform duration-700">
                    {iconMap[service.iconName]}
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-white font-bold text-lg flex items-center gap-2">
                      <ShieldAlert size={20} className="text-secondary" /> Professional Installation Included
                    </p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-24 container">
        <div className="grid lg-grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg-col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-8">What is {service.title}?</h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                Our {service.title} services are engineered for maximum reliability. We use state-of-the-art equipment and follow international safety standards to ensure your property is protected 24/7.
              </p>
              <div className="grid sm-grid-cols-2 gap-4 mt-10">
                {service.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all group"
                  >
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-secondary/10 to-transparent p-10 rounded-3xl border border-secondary/10">
               <h3 className="text-2xl font-bold mb-4">Why Choose Zenvora for this?</h3>
               <p className="text-text-muted leading-relaxed">
                 With over a decade of experience in {service.title}, our team of certified engineers provides end-to-end support. From initial site survey to final installation and ongoing maintenance, we handle everything.
               </p>
            </section>
          </div>

          {/* Inquiry Form Sidebar */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-morphism p-8 rounded-3xl sticky top-32 border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-2">Request Information</h3>
              <p className="text-sm text-text-muted mb-8">Fill out the form and our expert will contact you within 24 hours.</p>
              <form className="flex flex-col gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                  <input type="text" className="input-field" placeholder="Enter your name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Work Email</label>
                  <input type="email" className="input-field" placeholder="email@company.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
                  <textarea rows="4" className="input-field" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full mt-4 py-4 text-lg">Send Request</button>
              </form>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-dark bg-primary-light flex items-center justify-center text-[10px] font-bold">Z</div>
                    ))}
                 </div>
                 <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Join 500+ secure clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
