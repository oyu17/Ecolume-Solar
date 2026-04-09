import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DataService } from '../services/dataService';
import { Project } from '../contracts/types';

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await DataService.getProjects();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-24 bg-gray-50 relative" id="projects">
      {/* Decorative background element inspired by PDF */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-forest-green/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-1 bg-sunflower-yellow"></div>
               <h2 className="text-sm font-bold text-forest-green uppercase tracking-widest">Completed Projects</h2>
             </div>
            <h3 className="text-4xl md:text-5xl font-bold text-forest-green mb-4 uppercase tracking-tight">Real Homes.<br/>Real Savings.</h3>
            <p className="text-lg text-slate-gray">
              Explore our recent installations across the Philippines. From residential villas to industrial metal fabrication plants.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-forest-green font-bold">Loading projects...</div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              return (
                <motion.div
                  key={project.id || project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-sunflower-yellow flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
                      <p className="text-sunflower-yellow text-sm font-medium">{project.location}</p>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate-gray text-sm mb-6 flex-1">{project.capacity}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="bg-gray-100 text-forest-green px-2 py-1 text-xs font-bold rounded-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Savings Ticker */}
        <div className="mt-20 bg-forest-green p-12 text-center text-white relative overflow-hidden border-l-8 border-sunflower-yellow">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
          <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">Total Savings by Ecolume Customers</p>
          <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-sunflower-yellow">
            ₱85,420,150
          </div>
          <p className="text-lg opacity-90">And counting every second...</p>
        </div>
      </div>
    </section>
  );
};
