import { z } from 'zod';
import { 
  TestimonialSchema, 
  ProjectSchema, 
  ProductPackageSchema 
} from '../schemas/zodSchemas';

export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type ProductPackage = z.infer<typeof ProductPackageSchema>;

export interface DataAdapter {
  getTestimonials(): Promise<Testimonial[]>;
  getProjects(): Promise<Project[]>;
  getPackages(): Promise<ProductPackage[]>;
}
