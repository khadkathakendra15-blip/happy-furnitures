import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between relative z-20">
      {/* Brand Banner */}
      <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
        {/* White Rounded Badge with Logo */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-[0_4px_20px_rgba(241,134,4,0.2)] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/logo.jpg"
            alt="Happy Furnitures Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Brand Text */}
        <div className="flex items-center gap-2 font-display">
          <span className="text-white font-black tracking-wider text-base sm:text-lg lg:text-xl uppercase drop-shadow-sm">
            Happy Furnitures
          </span>
          <span className="text-[#F18604] font-bold text-xs sm:text-sm tracking-wider uppercase">
            Pvt. Ltd.
          </span>
        </div>
      </div>

      {/* Navigation - HOME Button */}
      <div>
        <a
          href="#home"
          className="inline-block border border-[#F18604]/50 hover:border-[#F18604] text-white/90 hover:text-white px-5 sm:px-7 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(241,134,4,0.5)] hover:bg-[#F18604]/10 active:scale-95"
        >
          Home
        </a>
      </div>
    </header>
  );
}
