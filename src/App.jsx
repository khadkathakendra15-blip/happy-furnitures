import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import NotifyModal from './components/NotifyModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const progressPercent = 78;

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-ambient-radial text-white overflow-hidden select-none">
      {/* Subtle Background Lighting & Ambient Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header / Brand Banner */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 my-auto py-10 relative z-10">
        <div className="w-full max-w-3xl text-center flex flex-col items-center">
          
          {/* Main Headings */}
          <h1 className="font-display font-black tracking-tight leading-none mb-1 sm:mb-2">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              UNDER
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E62B3A] glow-text-red mt-1 sm:mt-2">
              CONSTRUCTION
            </span>
          </h1>

          {/* Subtitle with accent lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-6 sm:my-8 w-full max-w-md">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#E62B3A]" />
            <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase">
              Site Nearly Ready
            </span>
            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#E62B3A]" />
          </div>

          {/* Progress Bar Section */}
          <div className="w-full max-w-lg mb-8 sm:mb-10 px-2">
            {/* The Bar */}
            <div className="w-full h-2 sm:h-2.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/40 p-[1px] relative">
              <div
                className="h-full bg-gradient-to-r from-[#E62B3A] via-[#FF3B4E] to-[#FF6B6B] rounded-full glow-bar relative transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              >
                {/* Shimmer light effect */}
                <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
              </div>
            </div>

            {/* Labels 0% and 100% */}
            <div className="flex justify-between text-[11px] sm:text-xs font-semibold text-slate-400 mt-2 px-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Call to Action Button: NOTIFY ME */}
          <div className="mb-10 sm:mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 sm:px-11 py-3.5 sm:py-4 bg-[#E62B3A] hover:bg-[#ff3b4e] text-white font-black text-xs sm:text-sm tracking-[0.18em] uppercase rounded-lg shadow-[0_6px_25px_rgba(230,43,58,0.7)] hover:shadow-[0_8px_35px_rgba(230,43,58,0.9)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Notify Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="mb-6">
            <SocialLinks />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-slate-400/90 relative z-10 px-4">
        <p className="tracking-wide">
          © 2026 by{' '}
          <span className="text-white/80 font-medium">Happy Furnitures Pvt. Ltd.</span>{' '}
          Under Construction.
        </p>
      </footer>

      {/* Interactive Modal */}
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
