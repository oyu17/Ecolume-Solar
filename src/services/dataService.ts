import { adapter } from '../adapters';
import { 
  TestimonialSchema, 
  ProjectSchema, 
  ProductPackageSchema 
} from '../schemas/zodSchemas';
import { z } from 'zod';

export const DataService = {
  async getTestimonials() {
    try {
      const data = await adapter.getTestimonials();
      return z.array(TestimonialSchema).parse(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  },

  async getProjects() {
    try {
      const data = await adapter.getProjects();
      return z.array(ProjectSchema).parse(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  async getPackages() {
    try {
      const data = await adapter.getPackages();
      return z.array(ProductPackageSchema).parse(data);
    } catch (error) {
      console.error('Error fetching packages:', error);
      return [];
    }
  }
};
