import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Users, Award, Target, Eye, Zap,
  CheckCircle2, ArrowRight, Phone,
} from "lucide-react";
import aboutImg from "../assets/about.png";

const stats = [
  { value: "10+",  label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "50+",  label: "Expert Engineers" },
  { value: "24/7", label: "Support Available" },
];

const values = [
  { icon: <Zap size={22} />,        title: "Innovation",      desc: "We continuously adopt the latest security technologies to stay ahead of threats." },
  { icon: <Users size={22} />,      title: "Customer First",  desc: "Every solution is tailored to the client's specific environment and needs." },
  { icon: <Shield size={22} />,     title: "Integrity",       desc: "Transparent pricing, honest advice, and no hidden fees — ever." },
  { icon: <Award size={22} />,      title: "Quality",         desc: "Only certified, internationally-sourced equipment on every installation." },
  { icon: <Eye size={22} />,        title: "Vigilance",       desc: "24/7 monitoring support so you're never left unprotected." },
  { icon: <Target size={22} />,     title: "Reliability",     desc: "Proven track record with a 99% client satisfaction rate." },
];

const whyUs = [
  "Certified & background-verified engineers",
  "End-to-end service — survey to installation",
  "International-grade equipment only",
  "Transparent, no-surprise quotes",
  "Priority AMC & emergency response",
  "Serving homes, offices & industrial sites",
];

const AboutPage = () => (
  <div style={{ background: "var(--bg-dark)", minHeight: "100vh", color: "var(--text-main)", fontFamily: "'Outfit', sans-serif" }}>
    <Navbar />

    {/* ── HERO ── */}
    <div style={{ position: "relative", paddingTop: "8rem", paddingBottom: "5rem", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", background: "rgba(194,0,4,0.07)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "0", left: "-60px", width: "400px", height: "400px", background: "rgba(194,0,4,0.05)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />

      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
        {/* Left: Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: "var(--secondary)", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em" }}>
            About Zenvora
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", lineHeight: "1.1", margin: "1rem 0 1.5rem" }}>
            Protecting What <span style={{ color: "var(--secondary)" }}>Matters</span> Most
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.9", marginBottom: "2rem" }}>
            Zenvora Security Systems is a premier provider of advanced security solutions for residential, commercial, and industrial clients across India. With over a decade of field expertise, we deliver technology-driven protection that gives you complete peace of mind.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.9", marginBottom: "2.5rem" }}>
            From AI-powered CCTV networks to off-grid solar surveillance and enterprise biometric systems — every solution we design is built around your unique environment, budget, and security goals.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", padding: "0.85rem 2rem" }}>
            <Phone size={18} /> Get in Touch
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ borderRadius: "1.5rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)", position: "relative" }}>
          <img src={aboutImg} alt="Zenvora Security Team" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,6,23,0.7) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Shield size={18} style={{ color: "var(--secondary)" }} />
            <span style={{ fontWeight: "700", fontSize: "0.875rem" }}>ISO-Certified Security Partner</span>
          </div>
        </motion.div>
      </div>
    </div>

    {/* ── STATS ── */}
    <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ padding: "2.5rem 1rem", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none", textAlign: "center" }}>
            <p style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--secondary)", lineHeight: 1 }}>{s.value}</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── MISSION & VISION ── */}
    <div style={{ padding: "6rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {[
          { icon: <Target size={28} />, title: "Our Mission", text: "To empower individuals and organisations with advanced, accessible, and reliable security solutions — ensuring peace of mind and safety for everyone, everywhere." },
          { icon: <Eye size={28} />,    title: "Our Vision",  text: "To become India's most trusted security systems company by consistently delivering innovation, integrity, and excellence in every project we undertake." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            style={{ padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem" }}>
            <div style={{ width: "3rem", height: "3rem", background: "rgba(194,0,4,0.12)", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)", marginBottom: "1.25rem" }}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem" }}>{item.title}</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.9", fontSize: "1.02rem" }}>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── VALUES ── */}
    <div style={{ padding: "5rem 0", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "var(--secondary)", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em" }}>What We Stand For</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "800", marginTop: "0.75rem" }}>Our Core Values</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ padding: "1.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", transition: "border-color 0.3s, background 0.3s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(194,0,4,0.4)"; e.currentTarget.style.background = "rgba(194,0,4,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
              <div style={{ width: "2.5rem", height: "2.5rem", background: "rgba(194,0,4,0.12)", borderRadius: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)", marginBottom: "1rem" }}>
                {v.icon}
              </div>
              <h4 style={{ fontWeight: "700", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{v.title}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7" }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* ── WHY CHOOSE US ── */}
    <div style={{ padding: "6rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span style={{ color: "var(--secondary)", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em" }}>Our Advantage</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "800", margin: "0.75rem 0 1.5rem" }}>Why Clients Choose Zenvora</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.9", fontSize: "1.05rem" }}>
            We don't just sell products — we build long-term security partnerships. From the initial consultation to installation and beyond, our team is with you every step of the way.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {whyUs.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.85rem", padding: "1rem 1.25rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.75rem" }}>
              <div style={{ color: "var(--secondary)", flexShrink: 0 }}><CheckCircle2 size={20} /></div>
              <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* ── CTA ── */}
    <div style={{ background: "linear-gradient(135deg, rgba(194,0,4,0.2), rgba(194,0,4,0.05))", borderTop: "1px solid rgba(194,0,4,0.2)", padding: "5rem 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: "800", marginBottom: "1rem" }}>
          Ready to secure your world?
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
          Get a free consultation from our security experts today.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2.25rem", fontSize: "1rem" }}>
            <Phone size={18} /> Contact Us
          </Link>
          <Link to="/services" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2.25rem", fontSize: "1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "0.5rem", color: "var(--text-main)", textDecoration: "none", fontWeight: "600", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
            Our Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default AboutPage;
