import React from 'react';
import { Camera, Fingerprint, Network } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import cctvImg from '../../assets/service_cctv.png';
import biometricImg from '../../assets/service_biometric.png';
import networkingImg from '../../assets/service_networking.png';

const related = [
  { slug: 'cctv-installation',    title: 'CCTV Installation',    desc: 'HD cameras with AI motion detection.',                image: cctvImg,       icon: <Camera size={40} /> },
  { slug: 'networking-solutions', title: 'Networking Solutions',  desc: 'Enterprise Wi-Fi, cabling & secure VPN setups.',      image: networkingImg, icon: <Network size={40} /> },
  { slug: 'wireless-security',    title: 'Wireless Security',     desc: 'Smart wireless alarms & sensors.',                    image: null,          icon: null },
];

const BiometricAccessPage = () => (
  <ServicePageLayout
    title="Biometric Access"
    subtitle="Access Control Experts"
    fullDesc="Eliminate the risk of lost keys and unauthorized access with our cutting-edge biometric systems. We integrate fingerprint scanners, facial recognition cameras, and RFID card readers into a unified access control platform. Perfect for offices, high-security server rooms, gated residential complexes, and industrial facilities requiring strict entry logs and multi-factor authentication."
    features={[
      'Facial Recognition Technology',
      'Fingerprint Scanning (FAR < 0.001%)',
      'RFID & Smart Card Integration',
      'Time & Attendance Tracking',
      'Centralized Web Dashboard',
      'Multi-door & Multi-zone Control',
      'Anti-passback & Tailgating Alerts',
      'Offline Fallback Mode',
    ]}
    image={biometricImg}
    icon={<Fingerprint size={48} />}
    iconSm={<Fingerprint size={28} />}
    related={related}
  />
);

export default BiometricAccessPage;
