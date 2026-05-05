import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, Clock,
  MessageSquare, Shield, CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={24} />,
    label: "Call Us",
    value: "+91 12345 67890",
    sub: "Mon–Sat, 9am – 7pm",
    href: "tel:+911234567890",
  },
  {
    icon: <Mail size={24} />,
    label: "Email Us",
    value: "info@zenvora.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@zenvora.com",
  },
  {
    icon: <MapPin size={24} />,
    label: "Visit Us",
    value: "123, Main Street",
    sub: "Your City, India",
    href: null,
  },
  {
    icon: <Clock size={24} />,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 7:00 PM",
    href: null,
  },
];

const faqs = [
  { q: "How soon can you start an installation?", a: "We typically begin within 2–5 business days of receiving your confirmed order and site survey." },
  { q: "Do you offer AMC (Annual Maintenance) plans?", a: "Yes! We offer flexible AMC plans covering all equipment we install, with priority support and scheduled inspections." },
  { q: "Do you serve both residential and commercial clients?", a: "Absolutely. We work with homes, offices, factories, farms, and large industrial facilities." },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--bg-dark)", minHeight: "100vh", color: "var(--text-main)", fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ position: "relative", paddingTop: "8rem", paddingBottom: "4rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", background: "rgba(194,0,4,0.07)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ color: "var(--secondary)", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em" }}>
              Get In Touch
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", lineHeight: 1.1, margin: "0.75rem 0 1.25rem" }}>
              Let's Talk <span style={{ color: "var(--secondary)" }}>Security</span>
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto" }}>
              Whether you need a quote, technical advice, or just want to explore your options — our experts are ready to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── CONTACT INFO CARDS ── */}
      <div style={{ paddingBottom: "5rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {contactInfo.map((info, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              {info.href ? (
                <a href={info.href} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", textDecoration: "none", color: "var(--text-main)", transition: "border-color 0.3s, background 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(194,0,4,0.4)"; e.currentTarget.style.background = "rgba(194,0,4,0.04)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", background: "rgba(194,0,4,0.12)", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)", flexShrink: 0 }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.35rem" }}>{info.label}</p>
                    <p style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "0.2rem" }}>{info.value}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{info.sub}</p>
                  </div>
                </a>
              ) : (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", background: "rgba(194,0,4,0.12)", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)", flexShrink: 0 }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.35rem" }}>{info.label}</p>
                    <p style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "0.2rem" }}>{info.value}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{info.sub}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── FORM + FAQ ── */}
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "start" }}>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.5rem", padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <MessageSquare size={22} style={{ color: "var(--secondary)" }} />
                <h2 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Send a Message</h2>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Fill the form and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ width: "4rem", height: "4rem", background: "rgba(194,0,4,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)", margin: "0 auto 1.5rem" }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "0.75rem" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="John Doe"
                        style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", color: "var(--text-main)", outline: "none", fontSize: "0.95rem", boxSizing: "border-box", transition: "border-color 0.2s" }}
                        onFocus={e => (e.target.style.borderColor = "var(--secondary)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+91 98765 43210"
                        style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", color: "var(--text-main)", outline: "none", fontSize: "0.95rem", boxSizing: "border-box", transition: "border-color 0.2s" }}
                        onFocus={e => (e.target.style.borderColor = "var(--secondary)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Email Address *</label>
                    <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john@example.com"
                      style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", color: "var(--text-main)", outline: "none", fontSize: "0.95rem", boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={e => (e.target.style.borderColor = "var(--secondary)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(20,20,30,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", color: form.service ? "var(--text-main)" : "var(--text-muted)", outline: "none", fontSize: "0.95rem", boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={e => (e.target.style.borderColor = "var(--secondary)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}>
                      <option value="">Select a service…</option>
                      <option>CCTV Installation</option>
                      <option>Biometric Access</option>
                      <option>Networking Solutions</option>
                      <option>Drone Surveillance</option>
                      <option>Solar CCTV</option>
                      <option>Annual Maintenance</option>
                      <option>Computer & IT Sales</option>
                      <option>Wireless Security</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Your Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your requirements, site size, or any questions…"
                      style={{ width: "100%", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", color: "var(--text-main)", outline: "none", fontSize: "0.95rem", boxSizing: "border-box", resize: "vertical", fontFamily: "'Outfit', sans-serif", transition: "border-color 0.2s" }}
                      onFocus={e => (e.target.style.borderColor = "var(--secondary)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>

                  <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", padding: "1rem", background: "var(--secondary)", color: "#fff", fontWeight: "700", fontSize: "1rem", borderRadius: "0.75rem", border: "none", cursor: "pointer", transition: "opacity 0.2s, transform 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "scale(1.02)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            <div style={{ background: "linear-gradient(135deg, rgba(194,0,4,0.15), rgba(194,0,4,0.04))", border: "1px solid rgba(194,0,4,0.2)", borderRadius: "1.25rem", padding: "2rem", marginBottom: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Shield size={22} style={{ color: "var(--secondary)" }} />
                <h3 style={{ fontWeight: "800", fontSize: "1.1rem" }}>Quick Response Promise</h3>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                We guarantee a response within <strong style={{ color: "var(--text-main)" }}>24 hours</strong> on all enquiries. Emergency support clients receive a callback within <strong style={{ color: "var(--text-main)" }}>4 hours</strong>.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MessageSquare size={18} style={{ color: "var(--secondary)" }} /> Frequently Asked
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ padding: "1.25rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.875rem" }}>
                    <p style={{ fontWeight: "700", marginBottom: "0.6rem", fontSize: "0.95rem" }}>{faq.q}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: "1.7" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
