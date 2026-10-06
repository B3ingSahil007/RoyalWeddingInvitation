import React from 'react';

// Elegant horizontal gold ornament with center diamond
export const DividerFlourish = ({ className = "my-6", width = 280 }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
    <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#D8B56A] to-[#E8CF91] opacity-70" />
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D8B56A] animate-pulse-glow">
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        fill="#D8B56A"
        stroke="#E8CF91"
        strokeWidth="0.75"
      />
      <circle cx="12" cy="12" r="2.5" fill="#071C18" stroke="#D8B56A" strokeWidth="0.75" />
    </svg>
    <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-l from-transparent via-[#D8B56A] to-[#E8CF91] opacity-70" />
  </div>
);

// Botanical leaf motif for section headers
export const BotanicalFlourish = ({ className = "" }) => (
  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className={`text-[#D8B56A] opacity-70 ${className}`} aria-hidden="true">
    <path
      d="M30 10C24 4 14 3 6 7C14 10 22 13 30 10Z"
      fill="#D8B56A"
      opacity="0.8"
    />
    <path
      d="M30 10C36 4 46 3 54 7C46 10 38 13 30 10Z"
      fill="#D8B56A"
      opacity="0.8"
    />
    <circle cx="30" cy="10" r="2" fill="#E8CF91" />
  </svg>
);

// Ornate Corner Flourish for luxury cards
export const CornerFlourish = ({ position = "top-left" }) => {
  const classes = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2 rotate-90",
    "bottom-right": "bottom-2 right-2 rotate-180",
    "bottom-left": "bottom-2 left-2 -rotate-90"
  };

  return (
    <div className={`absolute pointer-events-none ${classes[position]}`} aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="text-[#D8B56A] opacity-60">
        <path
          d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
          stroke="#D8B56A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 34V14C8 10.6863 10.6863 8 14 8H34"
          stroke="#E8CF91"
          strokeWidth="1"
          strokeDasharray="2 3"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2.5" fill="#D8B56A" />
      </svg>
    </div>
  );
};

// Royal Centerpiece Arch / Frame SVG
export const RoyalCenterpieceFrame = ({ children, className = "" }) => (
  <div className={`relative p-5 sm:p-8 md:p-14 border border-[#D8B56A]/40 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0D2923]/90 via-[#071C18]/95 to-[#0D2923]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8)] ${className}`}>
    {/* 4 Ornate Corners */}
    <CornerFlourish position="top-left" />
    <CornerFlourish position="top-right" />
    <CornerFlourish position="bottom-right" />
    <CornerFlourish position="bottom-left" />

    {/* Top Crown Emblem */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#071C18] px-3.5 sm:px-4 py-1 border border-[#D8B56A]/60 rounded-full flex items-center gap-2">
      <span className="text-[#D8B56A] text-[10px] sm:text-xs font-serif tracking-widest uppercase">✦ Royal Union ✦</span>
    </div>

    {children}
  </div>
);
