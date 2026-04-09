import { DataAdapter, Testimonial, Project, ProductPackage } from '../contracts/types';

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "Our monthly bill went from ₱12,000 to ₱800. The calculator was spot on, and the installation team treated our home like their own.",
    author: "Maria Santos",
    role: "Homeowner, Quezon City",
    image: "https://i.pravatar.cc/150?u=ecolume1"
  },
  {
    id: '2',
    text: "Ecolume handled everything perfectly. The 10kWp system with battery backup means we don't even notice when the grid goes down anymore.",
    author: "Juan Dela Cruz",
    role: "Business Owner, Cavite",
    image: "https://i.pravatar.cc/150?u=ecolume2"
  },
  {
    id: '3',
    text: "Very professional team. They explained the ROI clearly without any confusing jargon. Best investment for our family.",
    author: "Elena Reyes",
    role: "Homeowner, Cebu",
    image: "https://i.pravatar.cc/150?u=ecolume3"
  }
];

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'SUPERSYSTEMS & Metalfab Inc.',
    location: '30kWp GRID-TIED SOLAR PV SYSTEM',
    capacity: 'Features a 3-Phase SUNGROW Inverter, engineered for industrial-grade performance, stability, and maximum efficiency. Designed for Heavy Equipment & Industrial Loads.',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'JMC Printing Project',
    location: '8KWP SOLAR + 12KWH Battery Storage',
    capacity: 'Client supplied equipment, while our team handled professional installation, testing, and full commissioning. Clean, organized, and properly protected.',
    type: 'Hybrid',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Glorious Bible Baptist Church',
    location: 'Las Piñas',
    capacity: 'Lower electricity bills and continuous power even during brownouts. Saving thousands every month while staying powered 24/7.',
    type: 'Church',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800'
  }
];

const MOCK_PACKAGES: ProductPackage[] = [
  {
    id: 'starter',
    name: 'The Starter',
    capacity: '3kWp',
    idealFor: 'Small homes / bills under ₱6k',
    pricePHP: 150000,
    features: ['Tier 1 Solar Panels', 'Grid-Tie Inverter', 'Standard Installation', '10-Year Warranty'],
  },
  {
    id: 'independent',
    name: 'The Independent',
    capacity: '5kWp',
    idealFor: 'Medium families',
    pricePHP: 250000,
    popular: true,
    features: ['High-Efficiency Panels', 'Hybrid Ready Inverter', 'Premium Mounting', '15-Year Warranty'],
  },
  {
    id: 'offgrid',
    name: 'The Off-Grid Master',
    capacity: '10kWp + Battery',
    idealFor: 'Large estates & zero-bill goals',
    pricePHP: 550000,
    features: ['Ultra-High Efficiency Panels', '10kWh Battery Storage', 'Smart Energy Manager', '25-Year Warranty'],
  },
];

export const DemoAdapter: DataAdapter = {
  getTestimonials: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_TESTIMONIALS), 500));
  },
  getProjects: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_PROJECTS), 500));
  },
  getPackages: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_PACKAGES), 500));
  }
};
