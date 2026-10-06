import React from 'react';
import { Heart } from 'lucide-react';
import { FadeUp } from './ScrollReveal';

export const Footer = ({ monogram = "Z & R" }) => {
  return (
    <footer className="relative pt-10 sm:pt-10 pb-20 sm:pb-20 md:pb-24 bg-[#051411] border-t border-[#D8B56A]/20 text-center select-none overflow-hidden">
      <div className="section-container relative z-10 flex flex-col items-center">
        <FadeUp delay={0.1}>
          {/* Monogram Emblem */}
          <div className="w-12 h-12 rounded-full border border-[#D8B56A]/40 flex items-center justify-center bg-[#071C18] text-[#E8CF91] font-serif italic text-lg shadow-[0_0_20px_rgba(216,181,106,0.2)] mb-3 mx-auto">
            {monogram}
          </div>

          <p className="font-serif italic text-sm text-[#C9C4B6] flex items-center justify-center gap-1.5 mb-2">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#D8B56A] fill-current" /> for a royal union
          </p>

          <p className="font-royal text-[11px] sm:text-xs tracking-[0.25em] pl-[0.25em] text-[#8E9B96] uppercase">
            The Royal Evening · © 2026
          </p>
        </FadeUp>
      </div>
    </footer>
  );
};
