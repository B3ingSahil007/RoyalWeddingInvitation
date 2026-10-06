import React from 'react';
import { motion } from 'framer-motion';
import { RoyalCenterpieceFrame, BotanicalFlourish } from './RoyalFlourish';
import { Countdown } from './Countdown';
import { FadeScale, FadeUp } from './ScrollReveal';

export const MainWeddingSection = ({ groom, bride, formattedDate, weddingDate }) => {
  return (
    <section className="relative py-16 sm:py-36 bg-[#0D2923] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(18,60,50,0.8)_0%,_rgba(7,28,24,0.95)_100%)] pointer-events-none" />

      <div className="section-container relative z-10 max-w-4xl mx-auto">
        <FadeScale scaleFrom={0.92} duration={1}>
          <RoyalCenterpieceFrame className="text-center">
            {/* Eyebrow */}
            <FadeUp delay={0.2}>
              <div className="text-[11px] sm:text-sm font-royal tracking-[0.3em] sm:tracking-[0.35em] text-[#D8B56A] uppercase mb-3 sm:mb-4">
                And So The Journey Begins
              </div>
            </FadeUp>

            {/* Couple Names */}
            <FadeUp delay={0.35}>
              <h2 className="font-script text-4xl min-[360px]:text-5xl sm:text-7xl md:text-8xl text-[#F8F3E7] my-2 overflow-visible">
                <span className="gold-text-shimmer px-2 sm:px-6 py-1 sm:py-2 inline-block overflow-visible">{groom.firstName}</span>
                <span className="font-serif italic text-2xl sm:text-5xl text-[#D8B56A] mx-1 sm:mx-4 font-light inline-block">
                  &amp;
                </span>
                <span className="gold-text-shimmer px-3 sm:px-8 py-1 sm:py-2 inline-block overflow-visible">{bride.firstName}</span>
              </h2>
            </FadeUp>

            <BotanicalFlourish className="mx-auto my-3 sm:my-4" />

            {/* Date */}
            <FadeUp delay={0.5}>
              <div className="space-y-1 mb-6 sm:mb-8">
                <p className="font-royal text-sm sm:text-xl tracking-[0.2em] sm:tracking-[0.25em] text-[#E8CF91] uppercase font-medium">
                  {formattedDate}
                </p>
                <p className="font-serif italic text-xs sm:text-base text-[#C9C4B6]">
                  Under starlit Ahmedabad skies
                </p>
              </div>
            </FadeUp>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D8B56A]/60 to-transparent my-4 sm:my-6"
            />

            {/* Countdown Sub-heading */}
            <FadeUp delay={0.6}>
              <p className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#D8B56A]/80 font-medium">
                Counting Every Precious Moment Until Forever
              </p>
            </FadeUp>

            {/* Countdown Timer */}
            <FadeUp delay={0.75}>
              <Countdown targetDate={weddingDate} />
            </FadeUp>
          </RoyalCenterpieceFrame>
        </FadeScale>
      </div>
    </section>
  );
};
