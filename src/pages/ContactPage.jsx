import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-bg-dark text-text-main">
    <Navbar />
import { Mail, Phone, MapPin, Send } from "lucide-react";
    <div className="container py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-bg-light/80 rounded-xl shadow-2xl p-10 border border-border">
        <h1 className="text-4xl font-bold mb-4 text-center text-accent">
          Contact Us
        </h1>
        <h1 className="text-5xl font-extrabold mb-4 text-center text-accent flex items-center justify-center gap-3">
          <Send className="inline-block text-accent" size={40} /> Contact Us
        </h1>
        <p className="mb-8 text-center text-lg">Have questions or need a custom security solution? Reach out to us!</p>
              <strong>Email:</strong>{" "}
              <a
            <div className="flex items-center gap-2 mb-2"><Mail className="text-accent" size={22}/><span className="font-semibold">Email:</span> <a href="mailto:info@zenvora.com" className="text-accent hover:underline">info@zenvora.com</a></div>
            <div className="flex items-center gap-2 mb-2"><Phone className="text-accent" size={22}/><span className="font-semibold">Phone:</span> <a href="tel:+911234567890" className="text-accent hover:underline">+91 12345 67890</a></div>
            <div className="flex items-center gap-2 mb-2"><MapPin className="text-accent" size={22}/><span className="font-semibold">Address:</span> 123, Main Street, Your City, India</div>
          <input
            className="w-full p-3 rounded-lg bg-white/90 text-black border border-border focus:ring-2 focus:ring-accent outline-none transition"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full p-3 rounded-lg bg-white/90 text-black border border-border focus:ring-2 focus:ring-accent outline-none transition"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="w-full p-3 rounded-lg bg-white/90 text-black border border-border focus:ring-2 focus:ring-accent outline-none transition"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="btn btn-primary w-full py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactPage;
