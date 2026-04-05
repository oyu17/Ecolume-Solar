import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useCurrency } from '../hooks/useCurrency';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export const Header = () => {
  const { currency, setCurrency } = useCurrency();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Products', href: '#products' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-gray hover:text-forest-green transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Currency Toggle */}
            <div className="flex items-center bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setCurrency('PHP')}
                className={cn(
                  "px-3 py-1 text-xs font-bold rounded-full transition-all",
                  currency === 'PHP' ? "bg-white text-forest-green shadow-sm" : "text-gray-400"
                )}
              >
                ₱ PHP
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={cn(
                  "px-3 py-1 text-xs font-bold rounded-full transition-all",
                  currency === 'USD' ? "bg-white text-forest-green shadow-sm" : "text-gray-400"
                )}
              >
                $ USD
              </button>
            </div>

            <button className="bg-forest-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-forest-green/20">
              Get My Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <div className="flex items-center bg-gray-100 p-1 rounded-full scale-90">
              <button
                onClick={() => setCurrency('PHP')}
                className={cn(
                  "px-2 py-1 text-[10px] font-bold rounded-full transition-all",
                  currency === 'PHP' ? "bg-white text-forest-green shadow-sm" : "text-gray-400"
                )}
              >
                ₱
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={cn(
                  "px-2 py-1 text-[10px] font-bold rounded-full transition-all",
                  currency === 'USD' ? "bg-white text-forest-green shadow-sm" : "text-gray-400"
                )}
              >
                $
              </button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-gray">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-slate-gray"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-forest-green text-white px-6 py-3 rounded-xl font-semibold">
            Get My Quote
          </button>
        </motion.div>
      )}
    </header>
  );
};
