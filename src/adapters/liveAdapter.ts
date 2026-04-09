import { GraphQLClient, gql } from 'graphql-request';
import { DataAdapter, Testimonial, Project, ProductPackage } from '../contracts/types';

let endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT;
if (!endpoint || endpoint === '#' || !endpoint.startsWith('http')) {
  endpoint = 'https://api.example.com/graphql';
}

const client = new GraphQLClient(endpoint);

export const LiveAdapter: DataAdapter = {
  getTestimonials: async () => {
    const query = gql`
      query GetTestimonials {
        testimonials {
          id
          text
          author
          role
          image
        }
      }
    `;
    const data = await client.request<{ testimonials: Testimonial[] }>(query);
    return data.testimonials;
  },
  
  getProjects: async () => {
    const query = gql`
      query GetProjects {
        projects {
          id
          title
          location
          capacity
          type
          image
        }
      }
    `;
    const data = await client.request<{ projects: Project[] }>(query);
    return data.projects;
  },

  getPackages: async () => {
    const query = gql`
      query GetPackages {
        packages {
          id
          name
          capacity
          idealFor
          pricePHP
          popular
          features
        }
      }
    `;
    const data = await client.request<{ packages: ProductPackage[] }>(query);
    return data.packages;
  }
};
