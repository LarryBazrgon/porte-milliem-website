import React from 'react';

export default function Logo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric logo symbol */}
      <div className="relative w-12 h-12">
        {/* Outer frame */}
        <div className="absolute inset-0 border-2 border-[#A32035] rounded-sm rotate-45" />
        {/* Inner diamond */}
        <div className="absolute inset-2 bg-[#A32035] rounded-sm rotate-45 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#c9a87c] rounded-full" />
        </div>
      </div>
      
      {/* Company name */}
      <div className="flex flex-col leading-tight">
        <span className={`text-2xl font-light tracking-wider ${light ? 'text-white' : 'text-gray-800'}`}>
          PORTE
        </span>
        <span className={`text-xl font-serif italic ${light ? 'text-[#c9a87c]' : 'text-[#A32035]'}`}>
          Milliem
        </span>
      </div>
    </div>
  );
}