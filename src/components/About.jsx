import React from "react";
import { CheckCircle2, ShieldCheck, Users, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container grid md-grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] glass-morphism rounded-3xl overflow-hidden relative z-10 border-2 border-white/5 shadow-2xl">
            <img
              src={AboutImg}
              alt="Security Expert"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass-morphism p-8 rounded-3xl z-20 shadow-2xl animate-fadeIn border-l-4 border-l-secondary">
            <div className="flex items-center gap-4">
              <Award className="text-secondary" size={40} />
              <div>
                <p className="text-4xl font-bold font-outfit text-white">10+</p>
                <p className="text-sm text-text-muted font-medium">
                  Years of Trust
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            className="section-subtitle text-left"
            style={{ textAlign: "left" }}
          >
            The Zenvora Mission
          </span>
          <h2
            className="section-title text-left mb-8 md-text-5xl"
            style={{ textAlign: "left" }}
          >
            Redefining Safety through{" "}
            <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            At Zenvora Security Systems, we don't just install cameras; we build
            peace of mind. Our mission is to integrate AI and next-gen
            technology into daily safety, making premium security accessible to
            everyone.
          </p>

          <div className="grid grid-cols-1 sm-grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {[
              "AI-Driven Surveillance",
              "Military Grade Hardware",
              "Real-time Incident Alerts",
              "Seamless Integration",
              "Proactive Maintenance",
              "Expert On-site Training",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="bg-secondary/10 p-1 rounded-full group-hover:bg-secondary transition-colors">
                  <CheckCircle2
                    className="text-secondary group-hover:text-white"
                    size={18}
                  />
                </div>
                <span className="text-base font-medium text-text-main/90">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-accent">
                <Users size={24} />
                <h4 className="font-bold text-lg">50+ Specialists</h4>
              </div>
              <p className="text-sm text-text-muted">
                Dedicated support and installation engineers.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-accent">
                <Trophy size={24} />
                <h4 className="font-bold text-lg">ISO Certified</h4>
              </div>
              <p className="text-sm text-text-muted">
                Adhering to global quality and safety standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
