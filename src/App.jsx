import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Individual Service Pages
import CCTVInstallationPage    from "./pages/services/CCTVInstallationPage";
import BiometricAccessPage     from "./pages/services/BiometricAccessPage";
import NetworkingSolutionsPage from "./pages/services/NetworkingSolutionsPage";
import DroneSurveillancePage   from "./pages/services/DroneSurveillancePage";
import SolarCCTVPage           from "./pages/services/SolarCCTVPage";
import AnnualMaintenancePage   from "./pages/services/AnnualMaintenancePage";
import ComputerITSalesPage     from "./pages/services/ComputerITSalesPage";
import WirelessSecurityPage    from "./pages/services/WirelessSecurityPage";

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <div className="app">
        <Routes>
          {/* Main pages */}
          <Route path="/"        element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Individual service pages */}
          <Route path="/services/cctv-installation"    element={<CCTVInstallationPage />} />
          <Route path="/services/biometric-access"     element={<BiometricAccessPage />} />
          <Route path="/services/networking-solutions" element={<NetworkingSolutionsPage />} />
          <Route path="/services/drone-surveillance"   element={<DroneSurveillancePage />} />
          <Route path="/services/solar-cctv"           element={<SolarCCTVPage />} />
          <Route path="/services/annual-maintenance"   element={<AnnualMaintenancePage />} />
          <Route path="/services/computer-it-sales"    element={<ComputerITSalesPage />} />
          <Route path="/services/wireless-security"    element={<WirelessSecurityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
