import React from 'react';
import { Users, Handshake, Star, Target, Eye } from 'lucide-react';

export const CoreValuesSection = () => {
  return (
    <section className="relative w-full flex flex-col font-sans overflow-hidden">
      {/* Vertical Sidebar spanning both sections */}
      <div className="hidden lg:flex flex-col items-center justify-between w-20 absolute left-0 top-0 bottom-0 py-16 z-20 pointer-events-none">
        <div className="flex-1 flex items-start justify-center mt-48">
          <p className="transform -rotate-90 whitespace-nowrap text-sm font-bold tracking-[0.2em] text-gray-400">
            ECOLUME SOLAR CORPORATE PROFILE
          </p>
        </div>
        <div className="text-gray-400 font-bold text-2xl">8</div>
      </div>

      {/* Top Section (White Background) */}
      <div className="bg-white relative w-full lg:pl-20 flex flex-col md:flex-row min-h-[500px]">
        {/* Left: Skyline Silhouette */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
          <svg 
            className="absolute bottom-0 left-0 w-full h-[80%] text-[#006080] opacity-10" 
            viewBox="0 0 1000 300" 
            fill="currentColor" 
            preserveAspectRatio="none"
          >
            <path d="M0,300 L0,200 L40,200 L40,150 L80,150 L80,220 L120,220 L120,100 L180,100 L180,180 L220,180 L220,80 L280,80 L280,160 L320,160 L320,50 L380,50 L380,190 L420,190 L420,120 L480,120 L480,210 L520,210 L520,90 L580,90 L580,170 L620,170 L620,110 L680,110 L680,230 L720,230 L720,140 L780,140 L780,200 L820,200 L820,130 L880,130 L880,260 L920,260 L920,180 L980,180 L980,300 Z" />
          </svg>
        </div>

        {/* Right: Banners */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
          
          {/* Banner 1 */}
          <div className="mb-10">
            <div className="bg-[#003B4A] text-white px-8 py-3 border-r-8 border-[#006080] shadow-lg flex items-center w-full max-w-md">
              <h2 className="text-xl font-bold tracking-widest m-0">CORE PURPOSE</h2>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-[#F48A29] rounded-full p-2 shrink-0 shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Make a difference in the lives of our people, customers and community.
              </p>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="mb-10">
            <div className="bg-[#003B4A] text-white px-8 py-3 border-r-8 border-[#D0B000] shadow-lg flex items-center w-full max-w-md">
              <h2 className="text-xl font-bold tracking-widest m-0">OUR VISION</h2>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-[#F48A29] rounded-full p-2 shrink-0 shadow-md">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                To be the highest value provider of solar energy solutions and technical expertise.
              </p>
            </div>
          </div>

          {/* Banner 3 */}
          <div>
            <div className="bg-[#003B4A] text-white px-8 py-3 border-r-8 border-[#F48A29] shadow-lg flex items-center w-full max-w-md">
              <h2 className="text-xl font-bold tracking-widest m-0">CORE VALUES</h2>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section (Dark Teal Background) */}
      <div className="bg-[#003B4A] relative w-full lg:pl-20 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#F48A29] rounded-full p-5 mb-6 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-[#F48A29] text-2xl font-bold mb-6 uppercase tracking-wider">Teamwork</h3>
              <p className="text-white/90 leading-relaxed text-justify max-w-[70ch] mx-auto">
                We recognize our primary asset is people. To be successful, Ecolume Solar must be a rewarding place to help our people reach their potential. We work with our clients as a team. Mutual respect provides the foundation of our success.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#F48A29] rounded-full p-5 mb-6 shadow-xl">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-[#F48A29] text-2xl font-bold mb-6 uppercase tracking-wider">Integrity</h3>
              <p className="text-white/90 leading-relaxed text-justify max-w-[70ch] mx-auto">
                We remain true to our founding values of quality, honesty and hard work. We have the highest ethical standards in the industry. We "do the right thing." Ecolume Solar is a business based on trust. Ecolume Solar is consistently associated with the high standards of service, quality, personal attention to clients, and integrity. Because of this reputation the company has the privilege of leading high profile renewable energy projects in the country.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#F48A29] rounded-full p-5 mb-6 shadow-xl">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-[#F48A29] text-2xl font-bold mb-6 uppercase tracking-wider">Commitment</h3>
              <p className="text-white/90 leading-relaxed text-justify max-w-[70ch] mx-auto">
                We are proactive in finding solutions for our Clients that best achieve their goals. We understand that lasting relationships are the lifeblood of our business so we pay personal attention to our clients by focusing on them as individuals. Our CEO, PROFESSION, NAME MIDDLE NAME LAST NAME, referred to our clients, appropriately, as our "respected friends."
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Skyline */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-32 text-black/20 pointer-events-none" 
          viewBox="0 0 1000 100" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,100 L0,80 L30,80 L30,50 L60,50 L60,70 L90,70 L90,40 L120,40 L120,60 L150,60 L150,30 L180,30 L180,90 L210,90 L210,20 L240,20 L240,70 L270,70 L270,40 L300,40 L300,80 L330,80 L330,50 L360,50 L360,90 L390,90 L390,30 L420,30 L420,60 L450,60 L450,10 L480,10 L480,80 L510,80 L510,40 L540,40 L540,70 L570,70 L570,20 L600,20 L600,60 L630,60 L630,30 L660,30 L660,80 L690,80 L690,50 L720,50 L720,90 L750,90 L750,40 L780,40 L780,70 L810,70 L810,20 L840,20 L840,80 L870,80 L870,50 L900,50 L900,90 L930,90 L930,30 L960,30 L960,70 L1000,70 L1000,100 Z" />
        </svg>
      </div>
    </section>
  );
};
