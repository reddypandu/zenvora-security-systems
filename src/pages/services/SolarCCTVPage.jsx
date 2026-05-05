import React from 'react';
import { Camera, Sun, Plane } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import cctvImg from '../../assets/service_solar_cctv.png';
import droneImg from '../../assets/service_drone.png';

const related = [
  { slug: 'cctv-installation', title: 'CCTV Installation', desc: 'HD cameras with AI motion detection.', image: cctvImg, icon: <Camera size={40} /> },
  { slug: 'drone-surveillance', title: 'Drone Surveillance', desc: 'Autonomous drones for perimeter monitoring.', image: droneImg, icon: <Plane size={40} /> },
  { slug: 'annual-maintenance', title: 'Annual Maintenance', desc: 'Keep your systems always operational.', image: null, icon: null },
];

const SolarCCTVPage = () => (
  <ServicePageLayout
    title="Solar CCTV"
    subtitle="Off-Grid Security Experts"
    fullDesc="No power grid? No problem. Our solar-powered CCTV systems are purpose-built for remote locations — farms, highways, construction sites, forest boundaries, and rural properties. Each unit is completely self-sustaining, powered by high-efficiency solar panels with a multi-day battery backup, and streams live footage over 4G/LTE directly to your phone or monitoring centre."
    features={[
      '100% Solar Powered Operation',
      '4G/LTE Live Streaming',
      'Multi-day Battery Backup',
      'IP67 Weatherproof Enclosure',
      'AI Motion Detection & Alerts',
      'Night Vision (up to 30m)',
      'Zero Trenching — Quick Deploy',
      'Remote Configuration & Updates',
    ]}
    image={cctvImg}
    icon={<Sun size={48} />}
    iconSm={<Sun size={28} />}
    related={related}
  />
);

export default SolarCCTVPage;
