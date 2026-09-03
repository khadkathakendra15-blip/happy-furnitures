import React from 'react';

export default function SocialLinks() {
  const socials = [
    {
      name: 'Facebook',
      icon: (
        <span className="font-serif font-bold text-sm lowercase">f</span>
      ),
      href: 'https://facebook.com',
    },
    {
      name: 'LinkedIn',
      icon: (
        <span className="font-sans font-bold text-xs lowercase tracking-tighter">in</span>
      ),
      href: 'https://linkedin.com',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
        </svg>
      ),
      href: 'https://instagram.com',
    },
    {
      name: 'X',
      icon: (
        <span className="font-sans font-bold text-xs uppercase">X</span>
      ),
      href: 'https://x.com',
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-5">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-700/80 bg-slate-900/50 hover:bg-[#F18604] hover:border-[#F18604] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_18px_rgba(241,134,4,0.6)] active:scale-95 group"
        >
          <div className="group-hover:scale-110 transition-transform duration-200">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
