import React from 'react';
import { Quote } from 'lucide-react';
import { Logo } from './Logo';

export const CEOSection = () => {
  return (
    <section className="bg-[#3A3A3A] relative py-16 md:py-24 flex overflow-hidden">
      {/* Vertical Sidebar */}
      <div className="hidden lg:flex flex-col items-center justify-between w-20 text-white absolute left-0 top-0 bottom-0 py-16">
        <div className="flex-1 flex items-start justify-center mt-48">
          <p className="transform -rotate-90 whitespace-nowrap text-sm font-bold tracking-[0.2em] text-white/50">
            ECOLUME SOLAR CORPORATE PROFILE
          </p>
        </div>
        <div className="text-white/50 font-bold text-2xl">6</div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 lg:pl-28 relative z-10">
        {/* White Content Box */}
        <div className="bg-white shadow-2xl">
          
          {/* Top Half: Two Columns */}
          <div className="grid md:grid-cols-12">
            {/* Left Column: Image */}
            <div className="md:col-span-5 relative min-h-[400px] md:min-h-[500px] bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="CEO" 
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              {/* Logo Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent flex justify-center items-end">
                <Logo className="scale-100 md:scale-110 origin-bottom" />
              </div>
            </div>

            {/* Right Column: Quote & Banner */}
            <div className="md:col-span-7 flex flex-col">
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative">
                {/* Large decorative quote */}
                <div className="text-[#F48A29] text-9xl leading-none font-serif absolute top-4 left-4 opacity-10 select-none">"</div>
                
                <div className="flex gap-4 relative z-10">
                  <Quote className="w-12 h-12 text-[#F48A29] shrink-0 fill-current" />
                  <p className="text-2xl md:text-3xl italic text-[#3A3A3A] font-semibold leading-snug md:leading-relaxed">
                    "For every project, we ensure there are solar energy specialists and engineers with proficient renewable consulting services, as well as innovative energy intelligence approaches to outperform. As a result, we achieve repetitive and referral business opportunities through our integrated customer relationship management."
                  </p>
                </div>
              </div>
              
              {/* Dark Banner */}
              <div className="bg-[#3A3A3A] text-white p-8 md:px-12 md:py-8 border-l-8 border-[#F48A29]">
                <h3 className="text-xl md:text-2xl font-bold mb-1">PROFESSION, NAME MIDDLE NAME LAST NAME</h3>
                <p className="text-[#699C35] font-bold tracking-widest text-sm uppercase">CHIEF EXECUTIVE OFFICER</p>
              </div>
            </div>
          </div>

          {/* Bottom Half: Multi-column Text */}
          <div className="p-8 md:p-12 border-t border-gray-100">
            <div className="columns-1 lg:columns-2 gap-12 text-[#3A3A3A] text-lg leading-relaxed text-left md:text-justify">
              <p className="mb-6 break-inside-avoid">
                As a valuable partner for our clients, Ecolume Solar offers value-added renewable energy solutions to customers across the nation by crafting a mutually rewarding relationship that endows the highest level of quality in solar installations at fair and market-competitive rates.
              </p>
              <p className="mb-6 break-inside-avoid">
                Built on a foundation of experience and expertise in solar energy management, consulting, and finance, we are dedicated to utilizing our know-how, skills, and a wide range of technical tools to support green energy projects to blossom, while meeting budget constraints. Projects undertaken are free of high and costly delays, risks, and conflicts. We exhibit a high degree of timeliness, attention to detail, and service-minded attitudes to maintain the highest levels of professionalism, integrity, honesty, and fairness with our suppliers, subcontractors, professional associates, and customers.
              </p>
              <p className="mb-0 break-inside-avoid">
                Finally, with our long-standing experience, openness to future development, and dedication to sustainable energy planning as well as micro and macro grid development, we intend to hold more diversity to embrace upgrading and restoring residential and commercial power systems. In all we do, we will, as a team, always be dedicated to providing an exceptional and professional approach to constructing high-quality solar projects which meet budget and schedule goals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
