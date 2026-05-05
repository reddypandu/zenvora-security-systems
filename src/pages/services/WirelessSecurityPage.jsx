import React from 'react';
import { ShieldAlert, Fingerprint, Camera } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import biometricImg from '../../assets/service_biometric.png';
import cctvImg from '../../assets/service_wireless.png';

const related = [
  { slug: 'biometric-access', title: 'Biometric Access', desc: 'Fingerprint & facial recognition entry control.', image: biometricImg, icon: <Fingerprint size={40} /> },
  { slug: 'cctv-installation', title: 'CCTV Installation', desc: 'HD cameras with AI motion detection.', image: cctvImg, icon: <Camera size={40} /> },
  { slug: 'annual-maintenance', title: 'Annual Maintenance', desc: 'Keep your systems always operational.', image: null, icon: null },
];

const WirelessSecurityPage = () => (
  <ServicePageLayout
    title="Wireless Security"
    subtitle="Smart Alarm Experts"
    fullDesc="Protect your home or business without the hassle of wires. Our next-generation wireless security systems feature PIR motion sensors, door and window magnetic contacts, glass-break detectors, and smart sirens — all installable in under an hour with zero damage to walls or ceilings. Control everything from our mobile app and get instant push notifications on any alarm event, anywhere in the world."
    features={[
      'Wire-Free Installation (No Drilling)',
      'Smartphone App Control & Alerts',
      'PIR Motion & Infrared Sensors',
      'Door, Window & Glass-break Detectors',
      'GSM + Wi-Fi Dual Communication',
      'Built-in Battery Backup (24hr+)',
      'Pet-immune Sensor Options',
      'Expandable — Add Zones Anytime',
    ]}
    image={cctvImg}
    icon={<ShieldAlert size={48} />}
    iconSm={<ShieldAlert size={28} />}
    related={related}
  />
);

export default WirelessSecurityPage;
