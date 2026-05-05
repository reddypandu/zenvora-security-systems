import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src={heroImage}
          alt="Security Technology"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b to-bg-dark"></div> */}
        {/* <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary opacity-20 rounded-full blur-[120px]"></div> */}
        {/* <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent opacity-20 rounded-full blur-[120px]"></div> */}
      </div>

      <div className="container grid grid-cols-1 md-grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20"
        >
          <span className="section-subtitle text-left" style={{ textAlign: 'left' }}>Next-Gen Security Solutions</span>
          <h1 className="text-4xl md-text-5xl mb-6">
            Secure Your World with <span className="gradient-text">Zenvora</span> Intelligence
          </h1>
          <p className="text-lg text-text-muted mb-8 max-w-xl">
            We provide state-of-the-art security systems, from AI-powered CCTV to advanced biometric access control. Protect what matters most with Zenvora.
          </p>

          <div className="flex flex-col sm-flex-row gap-4 mb-10">
            <button className="btn btn-primary gap-2">
              Explore Services <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-glass-border">
            {[
              { label: 'Projects', value: '500+' },
              { label: 'Support', value: '24/7' },
              { label: 'Satisfaction', value: '99%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center md-items-start"
              >
                <span className="text-2xl font-bold font-outfit">{stat.value}</span>
                <span className="text-sm text-text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-morphism p-8 rounded-2xl relative z-10">
            <h3 className="text-2xl mb-6">Get a Free Quote</h3>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-muted">Full Name</label>
                <input type="text" className="input-field" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-muted">Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-muted">Service Interested In</label>
                <select className="input-field">
                  <option>CCTV Installation</option>
                  <option>Biometric Systems</option>
                  <option>Networking Solutions</option>
                  <option>Drone Security</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">Request Quote</button>
            </form>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-morphism p-4 rounded-xl flex items-center gap-3 md-flex shadow-lg"
          >
            <div className="bg-secondary p-2 rounded-lg">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <div>
              <p className="text-xs text-text-muted">Certified</p>
              <p className="text-sm font-bold">Security Experts</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
