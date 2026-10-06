import React from 'react';
import { motion } from 'framer-motion';
import { DividerFlourish } from './RoyalFlourish';
import { FadeUp } from './ScrollReveal';

export const FinalSection = ({ groom, bride, shortDate, backgroundImage }) => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#071C18]">
      {/* Background Image with Cinematic Slow Zoom */}
      <motion.div
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={backgroundImage}
          alt="Until we celebrate together"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.1]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071C18] via-[#071C18]/60 to-[#071C18]" />
      </motion.div>

      <div className="relative z-10 section-container text-center py-16 sm:py-20 px-4 max-w-3xl mx-auto">
        <FadeUp delay={0.1}>
          <span className="font-serif italic text-base sm:text-2xl text-[#E8CF91] tracking-wide block mb-2 sm:mb-3">
            Until we celebrate together...
          </span>
        </FadeUp>

        {/* Couple Names */}
        <FadeUp delay={0.25}>
          <div className="my-3 sm:my-4">
            <h2 className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-5 font-script hero-script-names text-[#F8F3E7] overflow-visible">
              <span className="gold-text-shimmer px-2.5 sm:px-6 py-1 sm:py-2 inline-block overflow-visible">{groom.firstName}</span>
              <span className="font-serif italic text-2xl sm:text-5xl text-[#D8B56A] font-light leading-none -my-2 sm:my-0 select-none px-1">
                &amp;
              </span>
              <span className="gold-text-shimmer px-3 sm:px-8 py-1 sm:py-2 inline-block overflow-visible">{bride.firstName}</span>
            </h2>
          </div>
        </FadeUp>

        <DividerFlourish className="my-5 sm:my-6" />

        <FadeUp delay={0.4}>
          <div className="font-royal text-xs sm:text-base tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#E8CF91] font-semibold mb-5 sm:mb-6">
            {shortDate}
          </div>
        </FadeUp>

        <FadeUp delay={0.55}>
          <p className="font-serif italic text-sm sm:text-xl text-[#C9C4B6] max-w-md mx-auto">
            "With eternal love and gratitude,<br />
            <span className="gold-text-gradient font-script text-2xl sm:text-3xl not-italic mt-2 inline-block">
              {groom.firstName} &amp; {bride.firstName}
            </span>"
          </p>
        </FadeUp>
      </div>
    </section>
  );
};
