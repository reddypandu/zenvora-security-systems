import React from 'react';
import { Camera, Plane, Network } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import cctvImg from '../../assets/service_cctv.png';
import droneImg from '../../assets/service_drone.png';
import networkingImg from '../../assets/service_networking.png';

const related = [
  { slug: 'cctv-installation',    title: 'CCTV Installation',    desc: 'HD cameras with AI motion detection.',        image: cctvImg,       icon: <Camera size={40} /> },
  { slug: 'solar-cctv',           title: 'Solar CCTV',           desc: 'Self-powered cameras for remote locations.',  image: null,          icon: null },
  { slug: 'networking-solutions', title: 'Networking Solutions',  desc: 'Enterprise Wi-Fi, cabling & secure VPNs.',   image: networkingImg, icon: <Network size={40} /> },
];

const DroneSurveillancePage = () => (
  <ServicePageLayout
    title="Drone Surveillance"
    subtitle="Aerial Security Experts"
    fullDesc="Monitor vast areas with unprecedented coverage using our autonomous security drones. Ideal for industrial plants, large agricultural estates, construction sites, and event security. Our drones perform pre-programmed patrol routes and provide real-time thermal and 4K video feeds directly to your operations center, with instant alerts on perimeter breaches or detected threats."
    features={[
      'Autonomous Scheduled Patrol Routes',
      'Thermal Imaging (FLIR) Cameras',
      'Real-time 4K Video Streaming',
      'AI Object & Person Detection',
      'Long-range 4G/LTE Connectivity',
      'Weatherproof IP55 Rated Body',
      'Automatic Return-to-Home',
      'Integrated Spotlight & Siren',
    ]}
    image={droneImg}
    icon={<Plane size={48} />}
    iconSm={<Plane size={28} />}
    related={related}
  />
);

export default DroneSurveillancePage;
