import React from 'react';
import { Camera, Network, Fingerprint } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import cctvImg from '../../assets/service_cctv.png';
import biometricImg from '../../assets/service_biometric.png';
import networkingImg from '../../assets/service_networking.png';

const related = [
  { slug: 'cctv-installation',  title: 'CCTV Installation',  desc: 'HD cameras with AI motion detection.',           image: cctvImg,      icon: <Camera size={40} /> },
  { slug: 'biometric-access',   title: 'Biometric Access',   desc: 'Fingerprint & facial recognition entry control.', image: biometricImg, icon: <Fingerprint size={40} /> },
  { slug: 'wireless-security',  title: 'Wireless Security',  desc: 'Smart wireless alarms & sensors.',                image: null,         icon: null },
];

const NetworkingSolutionsPage = () => (
  <ServicePageLayout
    title="Networking Solutions"
    subtitle="Connectivity Experts"
    fullDesc="Reliable connectivity is the backbone of every modern security system. We deliver end-to-end networking solutions including Wi-Fi 6 installations, fiber optic and structured copper cabling, network segmentation for security devices, and secure site-to-site VPN setups. Our team designs networks that are fast, redundant, and secure — ensuring your cameras and access systems are always online."
    features={[
      'Wi-Fi 6 (802.11ax) Deployment',
      'Fiber Optic & Cat6A Cabling',
      'Network Security & Next-Gen Firewalls',
      'Managed Switch & VLAN Configuration',
      'Server Rack Design & Installation',
      'Point-to-Point Wireless Bridges',
      'Remote Network Monitoring',
      'Redundant Internet Failover',
    ]}
    image={networkingImg}
    icon={<Network size={48} />}
    iconSm={<Network size={28} />}
    related={related}
  />
);

export default NetworkingSolutionsPage;
