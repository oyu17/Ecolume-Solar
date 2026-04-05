import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-sunflower-yellow/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-forest-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-green/5 text-forest-green text-sm font-bold mb-6">
              <Zap className="w-4 h-4 fill-current" />
              Empowering 500+ Homes in the Philippines
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-forest-green leading-[1.1] mb-6">
              Stop Renting Your Power. <span className="text-sunflower-yellow">Own the Sun.</span>
            </h1>
            <p className="text-xl text-slate-gray mb-10 leading-relaxed max-w-xl">
              Solar energy shouldn't feel like a math test. We make it simple, transparent, and human-centric. See your savings in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-forest-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-forest-green/20 flex items-center justify-center gap-2"
              >
                Calculate My Savings
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-forest-green border-2 border-forest-green px-8 py-4 rounded-full text-lg font-bold hover:bg-forest-green hover:text-white transition-all"
              >
                View Our Packages
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-forest-green">₱85M+</p>
                <p className="text-sm text-slate-gray">Total Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest-green">15k+</p>
                <p className="text-sm text-slate-gray">Panels Installed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest-green">25yr</p>
                <p className="text-sm text-slate-gray">Warranty</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern home with solar panels" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-sunflower-yellow p-2 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-forest-green">Lifetime Support</p>
              </div>
              <p className="text-sm text-slate-gray">We're with you from the first quote to the 25th year of power.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
