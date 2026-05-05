import cctvImg from '../assets/service_cctv.png';
import biometricImg from '../assets/service_biometric.png';
import networkingImg from '../assets/service_networking.png';
import droneImg from '../assets/service_drone.png';

export const servicesData = [
  {
    slug: 'cctv-installation',
    title: 'CCTV Installation',
    desc: 'High-definition surveillance cameras with AI motion detection and remote monitoring.',
    iconName: 'Camera',
    image: cctvImg,
    fullDesc: 'Our CCTV solutions are designed for both residential and commercial properties. We offer 4K resolution, night vision, and AI-powered motion detection that alerts you instantly on your mobile device. Whether you need a single camera or a complex multi-site surveillance network, we have the expertise to deliver.',
    features: ['4K Ultra HD Quality', 'Night Vision & Low Light Performance', 'AI Motion Detection', 'Remote Mobile Access', 'Cloud & Local Storage Options']
  },
  {
    slug: 'biometric-access',
    title: 'Biometric Access',
    desc: 'Advanced fingerprint and facial recognition systems for secure entry management.',
    iconName: 'Fingerprint',
    image: biometricImg,
    fullDesc: 'Secure your premises with the latest biometric technology. Our systems support fingerprint, facial recognition, and RFID card access. Perfect for offices, high-security zones, and residential complexes looking to eliminate the risk of lost keys or unauthorized access.',
    features: ['Facial Recognition', 'Fingerprint Scanning', 'RFID Integration', 'Time & Attendance Tracking', 'Centralized Management']
  },
  {
    slug: 'networking-solutions',
    title: 'Networking Solutions',
    desc: 'Enterprise-grade networking, Wi-Fi setup, and structured cabling for businesses.',
    iconName: 'Network',
    image: networkingImg,
    fullDesc: 'Reliable connectivity is the backbone of modern security. We provide end-to-end networking services, including high-speed Wi-Fi 6 installations, structured cabling, and secure VPN setups for remote access to your security systems.',
    features: ['Wi-Fi 6 Implementation', 'Fiber Optic Cabling', 'Network Security & Firewalls', 'Server Rack Management', 'Point-to-Point Wireless']
  },
  {
    slug: 'drone-surveillance',
    title: 'Drone Surveillance',
    desc: 'Autonomous security drones for large perimeter monitoring and aerial inspection.',
    iconName: 'Plane',
    image: droneImg,
    fullDesc: 'Monitor large areas with ease using our autonomous security drones. Ideal for industrial sites, large estates, and agricultural monitoring. Drones can perform scheduled patrols and provide high-resolution thermal imaging for nighttime security.',
    features: ['Autonomous Patrols', 'Thermal Imaging', 'Real-time Video Feed', 'Object Tracking', 'Long-range Connectivity']
  },
  {
    slug: 'solar-cctv',
    title: 'Solar CCTV',
    desc: 'Eco-friendly, self-powered security cameras for remote locations and farmsteads.',
    iconName: 'Sun',
    image: null,
    fullDesc: 'No power? No problem. Our solar-powered CCTV systems are perfect for remote locations like farms, construction sites, and highways. These systems are self-sustaining and connect via 4G/LTE to provide reliable security anywhere.',
    features: ['100% Solar Powered', '4G/LTE Connectivity', 'Weatherproof Design', 'Long-life Battery Backup', 'Remote Monitoring']
  },
  {
    slug: 'annual-maintenance',
    title: 'Annual Maintenance',
    desc: 'Reliable AMC services to ensure your security infrastructure is always operational.',
    iconName: 'Settings',
    image: null,
    fullDesc: 'Ensure your security systems never fail when you need them most. Our Annual Maintenance Contracts (AMC) include regular inspections, software updates, and hardware repairs for all your security equipment.',
    features: ['Scheduled Inspections', 'Priority Support', 'Software Updates', 'Hardware Repairs', 'System Health Reports']
  },
  {
    slug: 'computer-it-sales',
    title: 'Computer & IT Sales',
    desc: 'Premium hardware sales, including servers, workstations, and security peripherals.',
    iconName: 'Monitor',
    image: null,
    fullDesc: 'We provide high-performance hardware tailored for security operations centers. From heavy-duty servers for video storage to high-resolution monitors and workstations for real-time monitoring.',
    features: ['NVR & Storage Servers', 'Monitoring Workstations', 'High-res Displays', 'Custom IT Builds', 'Full Warranty Support']
  },
  {
    slug: 'wireless-security',
    title: 'Wireless Security',
    desc: 'Next-gen wireless alarm systems and sensors for hassle-free installation.',
    iconName: 'ShieldAlert',
    image: null,
    fullDesc: 'Protect your home or office without the mess of wires. Our wireless security systems include motion sensors, door/window contacts, and smart sirens that can be installed in minutes and controlled via an app.',
    features: ['Zero-wire Installation', 'Smartphone Integration', 'Battery Backup', 'Pet-friendly Sensors', 'Expandable Systems']
  }
];
