export const CONVERSION_RATE = 0.0166; // 1 PHP = 0.0166 USD

export type Currency = 'PHP' | 'USD';

export const PACKAGES = [
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

export const CALCULATOR_DEFAULTS = {
  ANNUAL_INFLATION: 0.05,
  PANEL_DEGRADATION: 0.005,
  SPECIFIC_YIELD: 1450, // kWh/kWp per year (typical for Philippines)
  CO2_PER_KWH: 0.7, // kg CO2 per kWh
  TREE_CO2_ABSORPTION: 21, // kg per tree per year
  GAS_SAVED_PER_KWH: 0.08, // gallons per kWh
};
