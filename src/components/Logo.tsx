import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center bg-[#F48A29] px-3 py-1.5 rounded-lg w-fit ${className}`}>
      <svg width="56" height="40" viewBox="0 0 140 100" className="mr-[-6px] z-10 shrink-0">
        <circle cx="50" cy="50" r="30" fill="#699C35" />
        <circle cx="50" cy="50" r="14" fill="#3A3A3A" />
        <circle cx="50" cy="50" r="6" fill="#F48A29" />

        <path d="M 100 15 
                 L 65 15 
                 C 40 15, 40 45, 65 45 
                 L 80 45 
                 C 85 45, 85 55, 80 55 
                 L 65 55 
                 C 40 55, 40 85, 65 85 
                 L 100 85 
                 L 100 70 
                 L 70 70 
                 C 60 70, 60 65, 70 65 
                 L 90 65 
                 C 105 65, 105 35, 90 35 
                 L 70 35 
                 C 60 35, 60 30, 70 30 
                 L 100 30 Z" 
              fill="#F48A29" 
              stroke="#FFFFFF" 
              strokeWidth="4" 
              strokeLinejoin="round"/>
      </svg>
      
      <div className="flex flex-col z-0">
        <div className="text-[28px] font-black tracking-[-1.2px] leading-[0.9] font-sans">
          <span className="text-white">EC</span><span className="text-[#699C35]">O</span><span className="text-[#3A3A3A]">LUME</span>
        </div>
        <div className="text-[4.5px] text-[#3A3A3A] tracking-[0.8px] mt-[2px] text-right font-sans font-bold">
          EMPOWERING GREEN TRANSFORMATION
        </div>
      </div>
    </div>
  );
};
