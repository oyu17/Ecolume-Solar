import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-slate-gray mb-6 leading-relaxed">
              Demystifying solar energy for Filipino homeowners. Simple, transparent, and built for the long haul.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-gray hover:text-forest-green transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-gray hover:text-forest-green transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-gray hover:text-forest-green transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-forest-green mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-gray">
              <li><a href="#story" className="hover:text-forest-green transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-forest-green transition-colors">Products</a></li>
              <li><a href="#projects" className="hover:text-forest-green transition-colors">Projects</a></li>
              <li><a href="#calculator" className="hover:text-forest-green transition-colors">Savings Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-forest-green mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-gray">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-forest-green" />
                ecolumesolar2@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-forest-green" />
                0942 120 7909
              </li>
              <li className="text-sm">
                123 Solar St, BGC, Taguig City,<br />Metro Manila, Philippines
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-forest-green mb-6">Newsletter</h4>
            <p className="text-sm text-slate-gray mb-4">Get solar tips and local energy news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-forest-green outline-none text-sm"
              />
              <button className="bg-forest-green text-white px-4 py-2 rounded-lg text-sm font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Ecolume Solar Company. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-forest-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-forest-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
