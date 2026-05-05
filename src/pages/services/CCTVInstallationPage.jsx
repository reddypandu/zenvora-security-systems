import React from 'react';
import { Camera, Network, Fingerprint, Plane, Sun, Settings, Monitor, ShieldAlert } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import cctvImg from '../../assets/service_cctv.png';
import biometricImg from '../../assets/service_biometric.png';
import networkingImg from '../../assets/service_networking.png';
import droneImg from '../../assets/service_drone.png';

const related = [
  { slug: 'biometric-access',     title: 'Biometric Access',     desc: 'Fingerprint & facial recognition for secure entry.',   image: biometricImg, icon: <Fingerprint size={40} /> },
  { slug: 'networking-solutions', title: 'Networking Solutions',  desc: 'Enterprise Wi-Fi, cabling & secure VPN setups.',       image: networkingImg, icon: <Network size={40} /> },
  { slug: 'drone-surveillance',   title: 'Drone Surveillance',    desc: 'Autonomous drones for perimeter monitoring.',          image: droneImg,     icon: <Plane size={40} /> },
];

const CCTVInstallationPage = () => (
  <ServicePageLayout
    title="CCTV Installation"
    subtitle="Surveillance Experts"
    fullDesc="Our CCTV solutions are engineered for both residential and commercial properties. We deploy 4K resolution cameras with AI-powered motion detection that sends instant alerts to your mobile device. Whether you need a single camera or a complex multi-site surveillance network spanning hundreds of nodes, our certified engineers deliver a system tailored to your environment, budget, and security goals."
    features={[
      '4K Ultra HD Resolution',
      'AI Motion Detection & Smart Alerts',
      'Night Vision & Low-Light Performance',
      'Remote Mobile Access Anywhere',
      'Cloud & Local NVR Storage',
      'License Plate Recognition (LPR)',
      'Multi-site Centralized Monitoring',
      'Weatherproof Outdoor Housings',
    ]}
    image={cctvImg}
    icon={<Camera size={48} />}
    iconSm={<Camera size={28} />}
    related={related}
  />
);

export default CCTVInstallationPage;
