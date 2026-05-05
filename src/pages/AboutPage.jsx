import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, Users, Award, HeartHandshake, Star } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-text-main">
    <Navbar />
    <div className="container py-20 max-w-4xl mx-auto">
      <div className="bg-white/10 rounded-2xl shadow-2xl p-10 border border-border backdrop-blur-md">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-accent drop-shadow-lg flex items-center justify-center gap-3">
          <Shield className="inline-block text-accent" size={48} /> About
          Zenvora Security Systems
        </h1>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Award className="text-yellow-400" size={28} /> Who We Are
          </h2>
          <p className="text-lg leading-relaxed">
            Zenvora Security Systems is dedicated to providing state-of-the-art
            security solutions for residential and commercial needs. Our
            expertise spans CCTV installation, biometric access, networking,
            drone surveillance, and more. We pride ourselves on delivering
            reliable, innovative, and eco-friendly security systems tailored to
            your requirements.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <HeartHandshake className="text-pink-400" size={28} /> Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            To empower individuals and organizations with advanced, easy-to-use,
            and affordable security solutions that ensure peace of mind and
            safety for all.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Star className="text-blue-400" size={28} /> Our Values
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 md:ml-8 text-lg">
            <li>Innovation & Technology Leadership</li>
            <li>Customer-Centric Approach</li>
            <li>Integrity & Trust</li>
            <li>Quality & Reliability</li>
            <li>Sustainability & Responsibility</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Shield className="text-accent" size={28} /> Why Choose Us?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 md:ml-8 text-lg">
            <li>Expert team with years of industry experience</li>
            <li>Cutting-edge technology and solutions</li>
            <li>Personalized service and support</li>
            <li>Comprehensive after-sales assistance</li>
            <li>Proven track record of satisfied clients</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Users className="text-green-400" size={28} /> Our Team
          </h2>
          <p className="text-lg leading-relaxed">
            Our team of professionals ensures seamless installation,
            integration, and ongoing support. With a focus on quality and
            customer satisfaction, Zenvora is your trusted partner for a safer
            tomorrow.
          </p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
