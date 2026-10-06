import React from 'react';
import { CornerFlourish, BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, FadeScale, SlideIn, SelfDrawingDivider } from './ScrollReveal';

export const FamilySection = ({ families, groom, bride }) => {
  return (
    <section id="family" className="relative py-16 sm:py-32 bg-[#071C18] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#123C32]/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <span className="section-subtitle">Sacred Blessings</span>
            <h2 className="section-title">
              With the Blessings of <span className="italic font-serif gold-text-gradient">Our Families</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-lg">
              "Roots that hold us grounded, love that gives us wings."
            </p>
          </FadeUp>
        </div>

        {/* Two-Column Royal Card with Reveal */}
        <FadeScale scaleFrom={0.93}>
          <div className="royal-card p-5 sm:p-10 md:p-14 relative">
            <CornerFlourish position="top-left" />
            <CornerFlourish position="top-right" />
            <CornerFlourish position="bottom-right" />
            <CornerFlourish position="bottom-left" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
              {/* Center Divider on Desktop */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#D8B56A]/40 to-transparent" />

              {/* Groom's Family */}
              <SlideIn direction="left" distance={25}>
                <div className="flex flex-col items-center">
                  <span className="font-royal text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#D8B56A] font-bold mb-1.5 sm:mb-2">
                    {families.groom.side}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3E7] font-semibold mb-1.5 sm:mb-2">
                    {families.groom.parents}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-royal tracking-widest text-[#E8CF91] uppercase mb-2.5 sm:mb-3">
                    Parents of {groom.firstName}
                  </p>
                  <p className="text-xs sm:text-sm text-[#C9C4B6] font-sans leading-relaxed max-w-xs">
                    {families.groom.description}
                  </p>
                </div>
              </SlideIn>

              {/* Mobile Separator Line */}
              <div className="md:hidden w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D8B56A]/40 to-transparent mx-auto" />

              {/* Bride's Family */}
              <SlideIn direction="right" distance={25}>
                <div className="flex flex-col items-center">
                  <span className="font-royal text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#D8B56A] font-bold mb-1.5 sm:mb-2">
                    {families.bride.side}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3E7] font-semibold mb-1.5 sm:mb-2">
                    {families.bride.parents}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-royal tracking-widest text-[#E8CF91] uppercase mb-2.5 sm:mb-3">
                    Parents of {bride.firstName}
                  </p>
                  <p className="text-xs sm:text-sm text-[#C9C4B6] font-sans leading-relaxed max-w-xs">
                    {families.bride.description}
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </FadeScale>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>
    </section>
  );
};
