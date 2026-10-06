import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SelfDrawingDivider } from './ScrollReveal';

export const Hero = ({ data }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentY = useTransform(scrollY, [0, 600], [0, 70]);
  const contentOpacity = useTransform(scrollY, [0, 480], [1, 0.25]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#071C18]"
    >
      {/* Background Image with Cinematic Slow Zoom & Parallax */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ y: bgY }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={data.hero.backgroundImage}
          alt="Zohan and Rose - Royal Wedding"
          className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05]"
          loading="eager"
        />
        {/* Cinematic Midnight Garden Dark Emerald Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071C18] via-[#071C18]/60 to-[#071C18]/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#071C18]/40 to-[#071C18]" />
      </motion.div>

      {/* Hero Content Container with Smooth Scroll Fade */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 section-container text-center py-16 sm:py-24 px-4 flex flex-col items-center justify-center max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 mb-3 sm:mb-4 opacity-95"
        >
          <span className="w-6 sm:w-8 h-[1px] bg-[#D8B56A]" />
          <span className="font-royal text-[11px] sm:text-sm tracking-[0.35em] uppercase text-[#E8CF91] font-semibold">
            {data.hero.eyebrow}
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-[#D8B56A]" />
        </motion.div>

        {/* Large Couple Names with Staggered Entrance */}
        <div className="flex flex-col items-center my-2 sm:my-4 overflow-visible w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 font-script hero-script-names text-[#F8F3E7] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] overflow-visible">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="gold-text-shimmer leading-normal py-1 sm:py-2 px-2.5 sm:px-6 inline-block overflow-visible"
            >
              {data.groom.firstName}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="font-serif italic text-2xl sm:text-5xl text-[#D8B56A] font-light leading-none -my-2 sm:my-0 select-none inline-block px-1"
            >
              &amp;
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="gold-text-shimmer leading-normal py-1 sm:py-2 px-3 sm:px-8 inline-block overflow-visible"
            >
              {data.bride.firstName}
            </motion.span>
          </div>
        </div>

        {/* Self-drawing Golden Divider */}
        <SelfDrawingDivider className="my-4 sm:my-5" />

        {/* Date Display */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-royal text-xs sm:text-lg tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#E8CF91] font-medium drop-shadow-md"
        >
          {data.hero.dateDisplay}
        </motion.div>

        {/* Emotional Invitation Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 text-[#C9C4B6] font-serif italic text-sm sm:text-xl max-w-xl mx-auto leading-relaxed drop-shadow"
        >
          "{data.hero.invitationNote}"
        </motion.p>

        {/* Venue Quick Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-5 sm:mt-6 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-royal tracking-widest text-[#D8B56A]/90 uppercase"
        >
          <span>{data.venue.name}</span>
          <span>·</span>
          <span>{data.venue.city}</span>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator - Perfectly Centered */}
      <div
        className={`absolute bottom-4 sm:bottom-8 inset-x-0 z-20 flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none ${
          scrolled ? 'opacity-0' : 'opacity-85'
        }`}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-royal text-[10px] tracking-[0.3em] uppercase text-[#D8B56A] font-medium">
            Scroll to Discover
          </span>
          <ChevronDown className="w-5 h-5 text-[#D8B56A]" />
        </motion.div>
      </div>
    </section>
  );
};
