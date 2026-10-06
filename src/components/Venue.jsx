import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Sparkles } from 'lucide-react';
import { CornerFlourish, BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, FadeScale, SelfDrawingDivider } from './ScrollReveal';

export const Venue = ({ venue }) => {
  return (
    <section id="venue" className="relative py-16 sm:py-32 bg-[#071C18] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#123C32]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <span className="section-subtitle">Destination of Grandeur</span>
            <h2 className="section-title">
              {venue.title}
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-xl">
              "A breathtaking palace by the riverfront, where heritage meets romance."
            </p>
          </FadeUp>
        </div>

        {/* Venue Card with Large Image and Reveal */}
        <FadeScale scaleFrom={0.94} duration={0.95}>
          <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D8B56A]/50 bg-[#0D2923] shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative group">
            {/* Large Venue Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden">
              <motion.img
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 contrast-105"
                loading="lazy"
              />
              {/* Cinematic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2923] via-[#0D2923]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D2923]/70 via-transparent to-[#0D2923]/70" />

              {/* Floating Palace Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#071C18]/85 backdrop-blur-md border border-[#D8B56A]/50 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-royal text-[#E8CF91] tracking-widest uppercase">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D8B56A]" />
                Heritage Palace
              </div>
            </div>

            {/* Details & Actions Panel */}
            <div className="p-5 sm:p-10 md:p-12 relative -mt-6 sm:-mt-12 z-10 bg-gradient-to-b from-[#0D2923]/95 to-[#071C18] border-t border-[#D8B56A]/30">
              <CornerFlourish position="top-right" />
              <CornerFlourish position="bottom-left" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                {/* Text Info */}
                <div className="max-w-2xl">
                  <span className="text-[#D8B56A] font-royal text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
                    Official Wedding Destination
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-[#F8F3E7] font-semibold mt-1 mb-2">
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E8CF91] font-medium mb-3">
                    <MapPin className="w-4 h-4 text-[#D8B56A] flex-shrink-0" />
                    <span>{venue.city}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C9C4B6] font-sans leading-relaxed">
                    {venue.fullAddress}
                  </p>
                  <p className="mt-2.5 sm:mt-3 text-xs text-[#8E9B96] font-serif italic">
                    {venue.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={venue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-royal-gold whitespace-nowrap w-full sm:w-auto text-center"
                  >
                    <MapPin className="w-4 h-4" />
                    View Location
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={venue.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-royal-outline whitespace-nowrap w-full sm:w-auto text-center"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </FadeScale>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>
    </section>
  );
};
