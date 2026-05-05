import React from 'react';
import { Camera, Settings, ShieldAlert } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';
import cctvImg from '../../assets/service_maintenance.png';

const related = [
  { slug: 'cctv-installation', title: 'CCTV Installation', desc: 'HD cameras with AI motion detection.', image: cctvImg, icon: <Camera size={40} /> },
  { slug: 'wireless-security', title: 'Wireless Security', desc: 'Smart wireless alarms & sensors.', image: null, icon: <ShieldAlert size={40} /> },
  { slug: 'computer-it-sales', title: 'Computer & IT Sales', desc: 'Premium hardware for security ops centers.', image: null, icon: null },
];

const AnnualMaintenancePage = () => (
  <ServicePageLayout
    title="Annual Maintenance"
    subtitle="AMC & Support Experts"
    fullDesc="A security system is only as good as its last maintenance check. Our Annual Maintenance Contracts (AMC) ensure your entire security infrastructure — cameras, access systems, alarms, and networking hardware — is always operating at peak performance. We schedule proactive visits, handle emergency repairs with priority response, and keep all firmware and software up-to-date."
    features={[
      'Scheduled Quarterly Inspections',
      'Priority Emergency Response (4hr SLA)',
      'Firmware & Software Updates',
      'Camera Cleaning & Realignment',
      'Hardware Repair & Replacement',
      'System Health & Performance Reports',
      'Dedicated Account Manager',
      'Remote Diagnostics & Support',
    ]}
    image={cctvImg}
    icon={<Settings size={48} />}
    iconSm={<Settings size={28} />}
    related={related}
  />
);

export default AnnualMaintenancePage;
