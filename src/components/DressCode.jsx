import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Crown } from 'lucide-react';
import { BotanicalFlourish, CornerFlourish } from './RoyalFlourish';
import { FadeUp, FadeScale, SlideIn, SelfDrawingDivider } from './ScrollReveal';

export const DressCode = ({ dressCode }) => {
  return (
    <section id="dress-code" className="relative py-16 sm:py-32 bg-[#0D2923] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#123C32]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <span className="section-subtitle">Sartorial Elegance</span>
            <h2 className="section-title">
              Dress Code: <span className="italic font-serif gold-text-gradient">Elegant Traditional</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-lg">
              "{dressCode.guideline}"
            </p>
          </FadeUp>
        </div>

        {/* Sophisticated Editorial Layout with Scale Reveal */}
        <FadeScale scaleFrom={0.93}>
          <div className="royal-card p-5 sm:p-10 md:p-14 relative">
            <CornerFlourish position="top-left" />
            <CornerFlourish position="top-right" />
            <CornerFlourish position="bottom-right" />
            <CornerFlourish position="bottom-left" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 relative">
              {/* Center Editorial Dividing Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#D8B56A]/40 to-transparent" />

              {/* Gentlemen (Slides from Left) */}
              <SlideIn direction="left" distance={25}>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#123C32] border border-[#D8B56A]/50 flex items-center justify-center text-[#E8CF91] mb-3 sm:mb-4">
                    <Shirt className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-royal text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#D8B56A] font-bold">
                    For Gentlemen
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3E7] font-semibold mt-1 mb-2.5 sm:mb-3">
                    Sherwani, Kurta &amp; Formal Attire
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9C4B6] leading-relaxed mb-3 sm:mb-4">
                    Tailored Bandhgalas, regal Sherwanis, embroidered Kurta sets with Nehru jackets, or timeless formal black tie.
                  </p>
                  <div className="text-xs font-serif italic text-[#D8B56A]">
                    Accent: Rich emerald velvet, midnight silks &amp; antique gold cufflinks.
                  </div>
                </div>
              </SlideIn>

              {/* Mobile Separator Line */}
              <div className="md:hidden w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D8B56A]/40 to-transparent mx-auto" />

              {/* Ladies (Slides from Right) */}
              <SlideIn direction="right" distance={25}>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#123C32] border border-[#D8B56A]/50 flex items-center justify-center text-[#E8CF91] mb-3 sm:mb-4">
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-royal text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#D8B56A] font-bold">
                    For Ladies
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3E7] font-semibold mt-1 mb-2.5 sm:mb-3">
                    Lehenga, Saree &amp; Ethnic Couture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9C4B6] leading-relaxed mb-3 sm:mb-4">
                    Grand heritage Lehengas, Banarasi / Kanjeevaram Sarees, elegant Anarkalis, or contemporary royal fusion silhouettes.
                  </p>
                  <div className="text-xs font-serif italic text-[#D8B56A]">
                    Accent: Shimmering zardozi, antique gold jewelry &amp; jewel undertones.
                  </div>
                </div>
              </SlideIn>
            </div>

            {/* Color Inspiration Palette Bar */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#D8B56A]/25 flex flex-col items-center">
              <span className="font-royal text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#D8B56A] mb-3 sm:mb-4 font-semibold">
                Recommended Color Harmony
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8">
                {dressCode.paletteNotes.map((color, i) => (
                  <motion.div
                    key={color.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#D8B56A]/60 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[11px] sm:text-xs font-royal tracking-wider text-[#E8CF91]">
                      {color.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeScale>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>
    </section>
  );
};
