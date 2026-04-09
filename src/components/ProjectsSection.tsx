import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { DataService } from '../services/dataService';
import { Project } from '../contracts/types';

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await DataService.getProjects();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-sunflower-yellow flex flex-col cursor-pointer"
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
                    <p className="text-slate-gray text-sm mb-6 flex-1 line-clamp-3">{project.capacity}</p>
                    
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto flex flex-col">
                <div className="mb-6">
                  <span className="bg-forest-green/10 text-forest-green px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-4">
                    {selectedProject.type}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-forest-green leading-tight mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sunflower-yellow font-bold text-lg">
                    {selectedProject.location}
                  </p>
                </div>
                
                <div className="prose prose-sm text-slate-gray mb-8 flex-1">
                  <p className="text-base leading-relaxed">{selectedProject.capacity}</p>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-forest-green mb-2">Project Highlights</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Custom-engineered solar solution</li>
                      <li>Professional installation & commissioning</li>
                      <li>Long-term reliability and efficiency</li>
                      <li>Significant reduction in energy costs</li>
                    </ul>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-full bg-gray-100 text-forest-green font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
