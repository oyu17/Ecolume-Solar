import { z } from 'zod';

export const TestimonialSchema = z.object({
  id: z.string().optional(),
  text: z.string(),
  author: z.string(),
  role: z.string(),
  image: z.string().url(),
});

export const ProjectSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  location: z.string().optional(),
  capacity: z.string(),
  type: z.string(),
  image: z.string().url(),
});

export const ProductPackageSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  capacity: z.string(),
  idealFor: z.string(),
  pricePHP: z.number(),
  features: z.array(z.string()),
  popular: z.boolean().optional(),
});

export const GraphQLResponseSchema = z.object({
  testimonials: z.array(TestimonialSchema).optional(),
  projects: z.array(ProjectSchema).optional(),
  packages: z.array(ProductPackageSchema).optional(),
});
