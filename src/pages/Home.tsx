import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowUp } from 'lucide-react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SolarCalculator } from '../components/SolarCalculator';
import { StorySection } from '../components/StorySection';
import { CEOSection } from '../components/CEOSection';
import { CoreValuesSection } from '../components/CoreValuesSection';
import { ProductPackages } from '../components/ProductPackages';
import { ProjectsSection } from '../components/ProjectsSection';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-forest-green/10 selection:text-forest-green relative">
      <Header />
      <main>
        <Hero />
        <SolarCalculator />
        <StorySection />
        <CEOSection />
        <CoreValuesSection />
        <ProductPackages />
        <ProjectsSection />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Fixed Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="bg-forest-green text-white p-3 rounded-full shadow-lg hover:bg-forest-green/90 transition-all hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="bg-[#699C35] p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="font-bold">Live Chat</span>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-64 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-3">
                <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-[#3A3A3A] max-w-[85%]">
                  Hi there! 👋 I'm from the Ecolume team. How can I help you with your solar journey today?
                </div>
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-2">
                  <input type="text" placeholder="Type your message..." className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#699C35]" />
                  <button className="bg-[#699C35] text-white px-4 py-2 rounded-lg text-sm font-bold">Send</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#F48A29] text-white px-6 py-4 rounded-full font-bold shadow-2xl shadow-[#F48A29]/40 hover:scale-105 transition-all flex items-center gap-2"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          <span className="hidden md:inline">Let's Build Your System</span>
        </button>
      </div>
    </div>
  );
};
