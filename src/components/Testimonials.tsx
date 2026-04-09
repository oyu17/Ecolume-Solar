import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { DataService } from '../services/dataService';
import { Testimonial } from '../contracts/types';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await DataService.getTestimonials();
      setTestimonials(data);
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (loading) {
    return <section className="py-24 bg-forest-green text-white flex justify-center"><div className="animate-pulse">Loading testimonials...</div></section>;
  }

  if (testimonials.length === 0) return null;

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
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sunflower-yellow">{testimonials[currentIndex].author}</p>
                  <p className="text-sm opacity-80">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
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
