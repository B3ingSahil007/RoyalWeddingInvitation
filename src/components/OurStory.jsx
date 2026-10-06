import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, SlideIn, SelfDrawingDivider } from './ScrollReveal';

export const OurStory = ({ story }) => {
  return (
    <section id="story" className="relative py-16 sm:py-32 bg-[#071C18] overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#123C32]/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#D8B56A]/10 blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <FadeUp>
            <span className="section-subtitle">A Journey of Two Souls</span>
            <h2 className="section-title">
              Two Lives. <span className="italic font-serif gold-text-gradient">One Beautiful Story.</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-xl">
              "Every step of our path was written in the stars, leading us to this royal evening."
            </p>
          </FadeUp>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Glowing Golden Timeline Line (Draws down smoothly on scroll) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] z-10 pointer-events-none">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full origin-top bg-gradient-to-b from-[#D8B56A]/20 via-[#D8B56A] to-[#D8B56A]/20 shadow-[0_0_15px_rgba(216,181,106,0.5)]"
            />
          </div>

          {/* Chapters */}
          <div className="flex flex-col gap-10 md:gap-24">
            {story.chapters.map((chapter, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={chapter.number}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 items-center"
                >
                  {/* Central Milestone Badge (Desktop) - Absolutely Centered on the Line */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.7, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
                      className="w-12 h-12 rounded-full bg-[#0D2923] border-2 border-[#D8B56A] shadow-[0_0_25px_rgba(216,181,106,0.6)] flex items-center justify-center pointer-events-auto"
                    >
                      <span className="font-royal text-xs font-bold text-[#E8CF91]">
                        {chapter.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Image Column */}
                  <div className={`w-full ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <SlideIn
                      direction={isEven ? "left" : "right"}
                      distance={35}
                      delay={0.1}
                    >
                      <div className="relative group rounded-2xl overflow-hidden border border-[#D8B56A]/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] aspect-[4/3]">
                        <img
                          src={chapter.image}
                          alt={chapter.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071C18]/90 via-[#071C18]/20 to-transparent" />

                        {/* Photo Tag */}
                        <div className="absolute bottom-4 left-4 z-10 bg-[#071C18]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#D8B56A]/40 text-[11px] sm:text-xs font-royal text-[#E8CF91] tracking-widest uppercase">
                          {chapter.date}
                        </div>
                      </div>
                    </SlideIn>
                  </div>

                  {/* Text Content Column */}
                  <div className={`w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <SlideIn
                      direction={isEven ? "right" : "left"}
                      distance={35}
                      delay={0.2}
                    >
                      <div className="royal-card p-5 sm:p-9 relative">
                        <CornerFlourish position={isEven ? 'top-right' : 'top-left'} />

                        {/* Mobile chapter pill */}
                        <div className="md:hidden inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#123C32]/70 border border-[#D8B56A]/50 text-xs font-royal text-[#E8CF91]">
                          <span>Chapter {chapter.number}</span>
                          <span>·</span>
                          <span>{chapter.date}</span>
                        </div>

                        <div className="text-[#D8B56A] font-serif text-sm italic mb-1">
                          {chapter.highlight}
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3E7] font-semibold mb-3">
                          {chapter.number} — {chapter.title}
                        </h3>

                        <p className="text-[#C9C4B6] font-sans text-sm sm:text-base leading-relaxed">
                          {chapter.description}
                        </p>
                      </div>
                    </SlideIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>
    </section>
  );
};
