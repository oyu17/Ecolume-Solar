import { DataAdapter } from '../contracts/types';
import { DemoAdapter } from './demoAdapter';
import { LiveAdapter } from './liveAdapter';

// Default to true (DemoAdapter) unless explicitly set to 'false'
const useDemoData = import.meta.env.VITE_USE_DEMO_DATA !== 'false';

export const adapter: DataAdapter = useDemoData ? DemoAdapter : LiveAdapter;
