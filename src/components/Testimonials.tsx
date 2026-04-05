import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Our monthly bill went from ₱12,000 to ₱800. The calculator was spot on, and the installation team treated our home like their own.",
    author: "Maria Santos",
    role: "Homeowner, Quezon City",
    image: "https://i.pravatar.cc/150?u=ecolume1"
  },
  {
    text: "Ecolume handled everything perfectly. The 10kWp system with battery backup means we don't even notice when the grid goes down anymore.",
    author: "Juan Dela Cruz",
    role: "Business Owner, Cavite",
    image: "https://i.pravatar.cc/150?u=ecolume2"
  },
  {
    text: "Very professional team. They explained the ROI clearly without any confusing jargon. Best investment for our family.",
    author: "Elena Reyes",
    role: "Homeowner, Cebu",
    image: "https://i.pravatar.cc/150?u=ecolume3"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-forest-green text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>
        
        <div className="relative h-[350px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <Quote className="w-12 h-12 text-sunflower-yellow/40 mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 text-sunflower-yellow fill-current" />)}
              </div>
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed italic">
                "{TESTIMONIALS[currentIndex].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                  <img src={TESTIMONIALS[currentIndex].image} alt={TESTIMONIALS[currentIndex].author} referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sunflower-yellow">{TESTIMONIALS[currentIndex].author}</p>
                  <p className="text-sm opacity-80">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-sunflower-yellow w-8' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
