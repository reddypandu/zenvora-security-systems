import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        <div className="glass-morphism p-8 md-p-12 rounded-3xl overflow-hidden relative">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 -z-10 translate-x-1/4"></div>
          
          <div className="grid md-grid-cols-2 gap-12 relative z-10">
            <div>
              <span className="section-subtitle text-left" style={{ textAlign: 'left' }}>Contact Us</span>
              <h2 className="section-title text-left mb-6" style={{ textAlign: 'left' }}>Ready to <span className="gradient-text">Secure</span> Your Future?</h2>
              <p className="text-text-muted mb-8">
                Have questions or need a custom quote? Reach out to our team of experts. We're here to help you design the perfect security system for your needs.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Call Us</p>
                    <p className="text-lg font-bold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Email Us</p>
                    <p className="text-lg font-bold">info@zenvora.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Visit Us</p>
                    <p className="text-lg font-bold">123 Security Plaza, Tech City, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-2xl bg-primary/30">
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-text-muted">First Name</label>
                    <input type="text" className="input-field" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-text-muted">Last Name</label>
                    <input type="text" className="input-field" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-text-muted">Subject</label>
                  <input type="text" className="input-field" placeholder="General Inquiry" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-text-muted">Message</label>
                  <textarea rows="4" className="input-field" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary gap-2 mt-2">
                  Send Message <MessageSquare size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
