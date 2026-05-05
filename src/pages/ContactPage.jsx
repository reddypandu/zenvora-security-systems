import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => (
  <div className="min-h-screen bg-bg-dark text-text-main">
    <Navbar />
    <div className="container py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-bg-light/80 rounded-xl shadow-2xl p-10 border border-border">
        <h1 className="text-5xl font-extrabold mb-4 text-center text-accent flex items-center justify-center gap-3">
          <Send className="inline-block text-accent" size={40} /> Contact Us
        </h1>
        <p className="mb-8 text-center text-lg text-text-muted">
          Have questions or need a custom security solution? Reach out to us!
        </p>

        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm text-text-muted">Email Us</p>
              <a href="mailto:info@zenvora.com" className="text-lg font-medium hover:text-accent transition-colors">
                info@zenvora.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm text-text-muted">Call Us</p>
              <a href="tel:+911234567890" className="text-lg font-medium hover:text-accent transition-colors">
                +91 12345 67890
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-sm text-text-muted">Visit Us</p>
              <p className="text-lg font-medium">123, Main Street, Your City, India</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Name</label>
              <input
                className="w-full p-4 rounded-xl bg-bg-dark border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Email</label>
              <input
                className="w-full p-4 rounded-xl bg-bg-dark border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium ml-1">Message</label>
            <textarea
              className="w-full p-4 rounded-xl bg-bg-dark border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
              rows="5"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          <button
            className="w-full py-4 bg-accent text-bg-dark font-bold rounded-xl shadow-lg hover:bg-accent/90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            type="submit"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactPage;

