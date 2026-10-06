import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Crown, Sparkles } from 'lucide-react';
import { CornerFlourish } from './RoyalFlourish';

export const IntroScreen = ({ onOpen, coupleNames = "Zohan & Rose", monogram = "Z & R" }) => {
  const [openingStep, setOpeningStep] = useState(0); // 0: Closed, 1: Seal glowing & cracking, 2: Flap open & card rising, 3: Fade out
  
  // Optical symmetry parsing for monograms with ampersand (e.g. "Z & R")
  const monogramParts = typeof monogram === 'string' && monogram.includes('&')
    ? monogram.split('&').map(s => s.trim())
    : null;

  const handleTouchToOpen = () => {
    if (openingStep > 0) return;

    // Step 1: Golden particles burst + seal illuminates
    setOpeningStep(1);

    confetti({
      particleCount: 65,
      spread: 85,
      origin: { y: 0.52 },
      colors: ['#D8B56A', '#E8CF91', '#FFF8E7', '#B38E46'],
      ticks: 220,
      gravity: 0.8,
      scalar: 0.95,
      disableForReducedMotion: true
    });

    // Step 2: Flap flips open and card slides up gracefully
    setTimeout(() => {
      setOpeningStep(2);
    }, 450);

    // Step 3: Screen transition dissolve
    setTimeout(() => {
      setOpeningStep(3);
    }, 2800);

    // Step 4: Complete reveal of main invitation
    setTimeout(() => {
      onOpen();
    }, 3500);
  };

  return (
    <div
      onClick={handleTouchToOpen}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-4 cursor-pointer select-none transition-all duration-1000 ${
        openingStep === 3
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100'
      }`}
      style={{
        background: openingStep >= 2
          ? 'radial-gradient(circle at center, #123C32 0%, #071C18 75%)'
          : 'radial-gradient(circle at center, #0D2923 0%, #071C18 100%)'
      }}
    >
      {/* Golden Background Ambient Glow */}
      <div
        className={`absolute w-[360px] sm:w-[550px] h-[360px] sm:h-[550px] rounded-full bg-[#D8B56A]/10 blur-[110px] transition-all duration-1000 pointer-events-none ${
          openingStep >= 1 ? 'scale-150 opacity-70 bg-[#D8B56A]/25' : 'scale-100 opacity-35'
        }`}
      />

      {/* Envelope Outer Stage with 3D Perspective */}
      <div
        className="relative w-full max-w-[320px] min-[375px]:max-w-[345px] sm:max-w-[430px] h-[255px] sm:h-[275px] transition-transform duration-700"
        style={{ perspective: '1400px' }}
      >
        {/* =========================================================================
            LAYER 1: ENVELOPE BASE CHASSIS & BACK WALL (Inside Cavity)
            ========================================================================= */}
        <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-[#051714] to-[#0A241E] border border-[#D8B56A]/60 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden z-0">
          {/* Subtle Royal Damask / Dot Grid Pattern inside cavity */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D8B56A_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Inner Inset Gold Stitch Frame */}
          <div className="absolute inset-1.5 rounded-[17px] border border-[#D8B56A]/30 border-dashed pointer-events-none" />
        </div>

        {/* =========================================================================
            LAYER 2: INNER ROYAL CARD (Slides up out of the pocket upon opening)
            ========================================================================= */}
        <div
          className="absolute inset-x-3 sm:inset-x-4 top-2 rounded-2xl bg-gradient-to-b from-[#FAF6EE] via-[#F6EFE2] to-[#EFE4D0] text-[#16231F] p-4 min-[360px]:p-5 sm:p-6 flex flex-col items-center justify-between border-2 border-[#D8B56A] shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
          style={{
            height: '235px',
            transform: openingStep >= 2
              ? 'translateY(-140px) scale(1.02)'
              : 'translateY(0) scale(0.95)',
            zIndex: openingStep >= 2 ? 35 : 5,
            opacity: openingStep >= 2 ? 1 : 0,
            pointerEvents: openingStep >= 2 ? 'auto' : 'none',
            transition: 'transform 1.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-in-out'
          }}
        >
          {/* Card Inner Decorative Border Inlay */}
          <div className="absolute inset-2 rounded-xl border border-[#D8B56A]/60 pointer-events-none" />
          <div className="absolute inset-2.5 rounded-lg border border-[#D8B56A]/30 border-dashed pointer-events-none" />

          {/* Card Corner Ornaments */}
          <div className="absolute top-3 left-3 text-[#A4833B] text-xs opacity-75">✦</div>
          <div className="absolute top-3 right-3 text-[#A4833B] text-xs opacity-75">✦</div>
          <div className="absolute bottom-3 left-3 text-[#A4833B] text-xs opacity-75">✦</div>
          <div className="absolute bottom-3 right-3 text-[#A4833B] text-xs opacity-75">✦</div>

          {/* Header */}
          <div className="flex flex-col items-center text-center mt-1">
            <Crown className="w-4 h-4 text-[#A4833B] mb-0.5" />
            <span className="text-[#A4833B] text-[9px] sm:text-[10px] font-royal tracking-[0.3em] pl-[0.3em] uppercase font-semibold">
              ✦ Royal Wedding Invitation ✦
            </span>
          </div>

          {/* Names */}
          <div className="text-center my-1">
            <h3 className="font-script text-3xl sm:text-4xl text-[#071C18] font-normal leading-tight">
              {coupleNames}
            </h3>
          </div>

          {/* Details */}
          <div className="flex flex-col items-center text-center mb-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-7 h-[1px] bg-[#D8B56A]/70" />
              <span className="text-[10px] font-royal tracking-widest pl-[0.15em] text-[#5C5549] uppercase font-medium">
                24 · October · 2026
              </span>
              <span className="w-7 h-[1px] bg-[#D8B56A]/70" />
            </div>
            <p className="text-[11px] font-serif italic text-[#3A4540]">
              The Grand Palace · Ahmedabad
            </p>
          </div>

          {/* Enter Button inside Card */}
          <div className="w-full pt-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
              className="w-full py-2 rounded-lg bg-[#071C18] text-[#E8CF91] border border-[#D8B56A] font-royal text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold flex items-center justify-center gap-1.5 shadow-md hover:bg-[#123C32] transition-colors"
            >
              <span>Enter The Royal Evening</span>
              <Sparkles className="w-3 h-3 text-[#D8B56A]" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            LAYER 3: ENVELOPE TOP FLAP (Calibrated V-apex at 110px with rx=22)
            ========================================================================= */}
        <div
          className="absolute top-0 inset-x-0 origin-top pointer-events-none"
          style={{
            height: '112px',
            transform: openingStep >= 2 ? 'rotateX(180deg)' : 'rotateX(0deg)',
            transformStyle: 'preserve-3d',
            transformOrigin: 'top center',
            zIndex: openingStep >= 2 ? 10 : 25,
            transition: 'transform 0.9s cubic-bezier(0.34, 1.15, 0.64, 1), z-index 0.25s'
          }}
        >
          <svg
            viewBox="0 0 420 112"
            className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.55)]"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#144338" />
                <stop offset="45%" stopColor="#0E2E26" />
                <stop offset="100%" stopColor="#081E18" />
              </linearGradient>
              <linearGradient id="goldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8CF91" />
                <stop offset="50%" stopColor="#D8B56A" />
                <stop offset="100%" stopColor="#B38E46" />
              </linearGradient>
              <pattern id="flapDots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.85" fill="#D8B56A" opacity="0.22" />
              </pattern>
            </defs>

            {/* Flap Body: Rounded top corners (rx=22) and diagonal V meeting at rounded apex (210, 110) */}
            <path
              d="M 0 22 Q 0 0 22 0 L 398 0 Q 420 0 420 22 L 420 24 L 214 107 Q 210 111 206 107 L 0 24 Z"
              fill="url(#flapGradient)"
              stroke="url(#goldStrokeGrad)"
              strokeWidth="1.5"
            />

            {/* Textured Dot Pattern fill inside Flap */}
            <path
              d="M 0 22 Q 0 0 22 0 L 398 0 Q 420 0 420 22 L 420 24 L 214 107 Q 210 111 206 107 L 0 24 Z"
              fill="url(#flapDots)"
            />

            {/* Inset Golden Dashed Stitch Line along the V-Edge */}
            <path
              d="M 12 24 L 206 101 Q 210 104 214 101 L 408 24"
              fill="none"
              stroke="#E8CF91"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.85"
            />

            {/* Flap Center Crest Decoration */}
            <g transform="translate(210, 40)">
              {/* Crown Icon */}
              <path
                d="M -10 -16 L -16 -4 L -7 0 L 0 -10 L 7 0 L 16 -4 L 10 -16 L 3 -13 L 0 -19 L -3 -13 Z"
                fill="#E8CF91"
                opacity="0.9"
              />
              <circle cx="0" cy="-6" r="1.2" fill="#071C18" />

              {/* Horizontal Filigree Accent Bars */}
              <line x1="-70" y1="-8" x2="-26" y2="-8" stroke="#D8B56A" strokeWidth="0.8" opacity="0.75" />
              <circle cx="-24" cy="-8" r="1.5" fill="#E8CF91" />
              <line x1="26" y1="-8" x2="70" y2="-8" stroke="#D8B56A" strokeWidth="0.8" opacity="0.75" />
              <circle cx="24" cy="-8" r="1.5" fill="#E8CF91" />

              {/* Text: ROYAL INVITATION */}
              <text
                x="0"
                y="14"
                textAnchor="middle"
                fill="#E8CF91"
                fontSize="8.5"
                fontFamily="Cinzel, serif"
                letterSpacing="3.5"
                fontWeight="600"
                opacity="0.95"
              >
                ROYAL INVITATION
              </text>
            </g>
          </svg>
        </div>

        {/* =========================================================================
            LAYER 4: ENVELOPE FRONT POCKET (Lower V-Pocket holding the card)
            ========================================================================= */}
        <div
          className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[22px]"
          style={{
            clipPath: 'polygon(0 22px, calc(50% - 6px) 110px, calc(50% + 6px) 110px, 100% 22px, 100% 100%, 0 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#061815] via-[#0A241E] to-[#0D2923] border border-[#D8B56A]/60 rounded-[22px]">
            {/* Subtle Textured Background on Pocket */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D8B56A_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Inner Gold Stitch along the lower borders */}
            <div className="absolute inset-1.5 rounded-[17px] border border-[#D8B56A]/30 border-dashed pointer-events-none" />

            {/* Lower Corners Flourish */}
            <CornerFlourish position="bottom-right" />
            <CornerFlourish position="bottom-left" />

            {/* Front Inscription on Lower Pocket: Perfectly centered both vertically & horizontally below wax seal */}
            <div className="absolute inset-x-0 top-[136px] sm:top-[142px] bottom-0 flex flex-col items-center justify-center text-center select-none z-10 pointer-events-none pb-2 sm:pb-2.5">
              {/* <span className="text-[#D8B56A] text-[10px] sm:text-xs mb-1.5 animate-pulse">✦</span> */}
              {monogramParts ? (
                <div className="flex items-center justify-center font-serif text-3xl sm:text-4xl text-[#E8CF91] font-light leading-none mb-1.5 select-none">
                  <span className="min-w-[36px] sm:min-w-[44px] text-right pr-2.5 sm:pr-3">{monogramParts[0]}</span>
                  <span className="text-xl sm:text-2xl text-[#D8B56A]/90 italic font-light select-none">&</span>
                  <span className="min-w-[36px] sm:min-w-[44px] text-left pl-2.5 sm:pl-3">{monogramParts[1]}</span>
                </div>
              ) : (
                <h2 className="font-serif text-3xl sm:text-4xl text-[#E8CF91] tracking-[0.25em] pl-[0.25em] font-light leading-none mb-1.5 text-center">
                  {monogram}
                </h2>
              )}
              <p className="font-royal text-[9px] sm:text-[10px] tracking-[0.35em] pl-[0.35em] uppercase text-[#D8B56A]/90 font-semibold text-center">
                The Wedding
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYER 5: WAX SEAL (Centered at apex y=110px, leaving ample room below)
            ========================================================================= */}
        <div
          className={`absolute top-[110px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 ${
            openingStep >= 1 ? 'scale-115' : ''
          } ${openingStep >= 2 ? 'opacity-0 scale-135 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="wax-seal w-[54px] h-[54px] sm:w-[62px] sm:h-[62px]">
            {/* Crown Emblem inside seal */}
            <div className="flex flex-col items-center justify-center text-[#2B1F05]">
              <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2B1F05] drop-shadow-sm mb-0.5" />
              <span className="font-royal text-[7.5px] sm:text-[8px] tracking-widest uppercase font-bold opacity-90">
                Seal
              </span>
            </div>

            {/* Glowing Crack Light Effect */}
            {openingStep >= 1 && (
              <div className="absolute inset-0 rounded-full bg-white/70 animate-ping" />
            )}
          </div>
        </div>
      </div>

      {/* Touch to Open Prompt */}
      <div
        className={`mt-8 sm:mt-10 flex flex-col items-center transition-all duration-500 ${
          openingStep >= 1 ? 'opacity-0 translate-y-3' : 'opacity-100'
        }`}
      >
        <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#D8B56A]/40 bg-[#0D2923]/70 backdrop-blur-md shadow-[0_0_25px_rgba(216,181,106,0.18)] group">
          <span className="w-2 h-2 rounded-full bg-[#D8B56A] animate-ping" />
          <span className="font-royal text-xs tracking-[0.25em] uppercase text-[#E8CF91] font-semibold group-hover:text-white transition-colors">
            Touch to Open
          </span>
          <span className="w-2 h-2 rounded-full bg-[#D8B56A] animate-ping" />
        </div>
        <p className="mt-3 text-[#8E9B96] text-xs font-serif italic tracking-wide">
          An intimate royal celebration awaits your presence
        </p>
      </div>

      {/* Skip button for quick testing */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] sm:text-[11px] font-royal tracking-widest text-[#D8B56A]/70 hover:text-[#D8B56A] uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded border border-[#D8B56A]/30 hover:border-[#D8B56A]/60 transition-all z-40 bg-[#071C18]/60 backdrop-blur-sm"
      >
        Enter Directly →
      </button>
    </div>
  );
};
