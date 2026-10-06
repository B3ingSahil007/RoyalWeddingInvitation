import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';
import { BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, SelfDrawingDivider, StaggerContainer, StaggerItem } from './ScrollReveal';
import { Eye } from 'lucide-react';

export const CoupleGallery = ({ gallery }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="relative py-16 sm:py-32 bg-[#0D2923] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#123C32]/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <span className="section-subtitle">Visual Keepsakes</span>
            <h2 className="section-title">
              A Few Moments <span className="italic font-serif gold-text-gradient">in Time</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-xl">
              "Fleeting seconds captured forever in the warmth of our love."
            </p>
          </FadeUp>
        </div>

        {/* Staggered Masonry Gallery Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto"
        >
          {gallery.map((item, index) => (
            <StaggerItem
              key={item.id}
              yOffset={35}
              className={
                index === 0
                  ? 'sm:col-span-2 md:col-span-2 md:row-span-2 min-h-[280px] sm:min-h-[460px]'
                  : 'min-h-[220px] sm:min-h-[260px]'
              }
            >
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                onClick={() => openLightbox(index)}
                className="group relative h-full w-full rounded-2xl overflow-hidden cursor-pointer border border-[#D8B56A]/30 hover:border-[#D8B56A] transition-all duration-500 shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92] contrast-[1.05]"
                  loading="lazy"
                />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C18]/90 via-[#071C18]/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Gold Highlight Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#D8B56A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between z-10">
                  <div>
                    <h3 className="font-serif text-lg sm:text-2xl text-[#F8F3E7] font-semibold group-hover:text-[#E8CF91] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-royal tracking-widest text-[#D8B56A] uppercase mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#071C18]/80 border border-[#D8B56A]/60 flex items-center justify-center text-[#E8CF91] transform translate-y-2 sm:translate-y-3 opacity-90 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={gallery}
        activeIndex={activePhotoIndex}
        onClose={closeLightbox}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </section>
  );
};
