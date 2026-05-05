import React from 'react';
import { Monitor, Network, Settings } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import networkingImg from '../../assets/service_computer_it.png';

const related = [
  { slug: 'networking-solutions', title: 'Networking Solutions', desc: 'Enterprise Wi-Fi, cabling & firewalls.', image: networkingImg, icon: <Network size={40} /> },
  { slug: 'annual-maintenance', title: 'Annual Maintenance', desc: 'Keep all your systems always operational.', image: null, icon: <Settings size={40} /> },
  { slug: 'cctv-installation', title: 'CCTV Installation', desc: 'HD cameras with AI motion detection.', image: null, icon: null },
];

const ComputerITSalesPage = () => (
  <ServicePageLayout
    title="Computer & IT Sales"
    subtitle="Hardware & IT Experts"
    fullDesc="Your security operations center is only as powerful as its hardware. We supply and configure high-performance servers, NVR/DVR recording units, multi-channel monitoring workstations, and ultra-high-resolution displays — all optimised for 24/7 security operations. Every system we sell is sourced from certified vendors and comes with full warranty support and post-installation configuration."
    features={[
      'NVR / DVR Recording Servers',
      'High-Resolution Monitoring Displays',
      'Security Operations Workstations',
      'Custom-built IT Servers & NAS',
      'UPS & Power Backup Systems',
      'Full Hardware Warranty Coverage',
      'Post-Sale Setup & Configuration',
      'Trade-in & Upgrade Programs',
    ]}
    image={networkingImg}
    icon={<Monitor size={48} />}
    iconSm={<Monitor size={28} />}
    related={related}
  />
);

export default ComputerITSalesPage;
