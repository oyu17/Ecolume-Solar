import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Battery, Home, Building2, ShieldCheck } from 'lucide-react';
import { useCurrency } from '../hooks/useCurrency';
import { PACKAGES } from '../constants';

export const ProductPackages = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">Solar Packages Built for Humans</h2>
          <p className="text-lg text-slate-gray max-w-2xl mx-auto">
            No engineering jargon. Just clear solutions for your home and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border-2 transition-all hover:shadow-2xl ${
                idx === 1 ? 'border-forest-green shadow-xl scale-105 z-10' : 'border-gray-100'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-forest-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-forest-green mb-1">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-slate-gray text-sm mb-4">
                  <Zap className="w-4 h-4 text-sunflower-yellow" />
                  {pkg.capacity}
                </div>
                <p className="text-sm text-slate-gray font-medium mb-6">{pkg.idealFor}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-forest-green">{formatPrice(pkg.pricePHP)}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 bg-forest-green/10 p-0.5 rounded-full">
                      <Check className="w-3 h-3 text-forest-green" />
                    </div>
                    <span className="text-sm text-slate-gray">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                idx === 1 
                  ? 'bg-forest-green text-white hover:bg-opacity-90' 
                  : 'bg-gray-100 text-forest-green hover:bg-gray-200'
              }`}>
                Select This Package
              </button>
            </motion.div>
          ))}
        </div>

        {/* Battery Feature Section */}
        <div className="mt-20 bg-gray-50 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="bg-sunflower-yellow/20 text-sunflower-yellow px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-6">
                New Feature
              </div>
              <h3 className="text-3xl font-bold text-forest-green mb-6">Keep the lights on when the grid goes dark.</h3>
              <p className="text-lg text-slate-gray mb-8">
                Our smart battery systems store excess sun during the day so you can power your home at night or during brownouts. It's true energy independence.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Battery className="w-6 h-6 text-forest-green" />
                  </div>
                  <div>
                    <p className="font-bold text-forest-green">Self-Sufficiency</p>
                    <p className="text-sm text-slate-gray">Use 100% of the energy you generate.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-forest-green" />
                  </div>
                  <div>
                    <p className="font-bold text-forest-green">Backup Power</p>
                    <p className="text-sm text-slate-gray">Automatic switch-over during outages.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620216519058-76063f19fa19?auto=format&fit=crop&q=80&w=800" 
                alt="Solar battery storage" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
