import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Wrench, Zap, ShieldCheck, Users } from 'lucide-react';

export const StorySection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 xl:pl-20">
        
        {/* Header Block inspired by PDF */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-4 bg-sunflower-yellow shrink-0 hidden md:block"></div>
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-forest-green mb-4 uppercase tracking-tight">
              Corporate<br />Profile
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl">
              We founded Ecolume because solar felt like a math test. We wanted to build a company that speaks human.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: About & Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-forest-green text-white p-8 rounded-none border-l-8 border-sunflower-yellow">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Engineering Service</h3>
              <p className="opacity-90 mb-8 leading-relaxed">
                At Ecolume Solar Energy, we don't just install solar — we engineer energy solutions that drive business growth and empower homeowners. We make sure that every system is properly installed, fully tested, and ready for reliable operation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-sunflower-yellow" />
                  </div>
                  <span className="font-medium">0942 120 7909</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-sunflower-yellow" />
                  </div>
                  <span className="font-medium">ecolumesolar2@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Wrench className="w-5 h-5 text-sunflower-yellow" />
                  </div>
                  <span className="font-medium">Professional Installation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Values / Services */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6 h-full">
              <div className="bg-white p-8 border-2 border-gray-100 hover:border-forest-green transition-colors group">
                <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-forest-green transition-colors">
                  <Users className="w-8 h-8 text-forest-green group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-forest-green mb-3">Transparency First</h4>
                <p className="text-slate-gray">
                  No hidden fees, no over-promising. Just real data you can trust. We speak human, not jargon.
                </p>
              </div>
              
              <div className="bg-white p-8 border-2 border-gray-100 hover:border-forest-green transition-colors group">
                <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-forest-green transition-colors">
                  <ShieldCheck className="w-8 h-8 text-forest-green group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-forest-green mb-3">Local Expertise</h4>
                <p className="text-slate-gray">
                  We understand the Philippine climate and grid better than anyone. Built for local conditions.
                </p>
              </div>

              <div className="bg-white p-8 border-2 border-gray-100 hover:border-forest-green transition-colors group">
                <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-forest-green transition-colors">
                  <Zap className="w-8 h-8 text-forest-green group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-forest-green mb-3">High-Performance</h4>
                <p className="text-slate-gray">
                  From 3-Phase Commercial Configurations to residential hybrids, we engineer for maximum efficiency.
                </p>
              </div>

              <div className="bg-sunflower-yellow p-8 text-white flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">Workmanship & Commissioning</h4>
                <p className="opacity-90">
                  Critical to long-term performance. We ensure clean, organized installations with proper protection and wiring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
