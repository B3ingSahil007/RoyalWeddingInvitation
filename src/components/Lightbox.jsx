import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Lightbox = ({ images, activeIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  if (activeIndex === null || !images[activeIndex]) return null;
  const currentImage = images[activeIndex];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#071C18]/95 backdrop-blur-xl transition-all duration-300 select-none"
    >
      {/* Top Bar with Counter and Close */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20"
      >
        <div className="font-royal text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-[#E8CF91] uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0D2923]/80 border border-[#D8B56A]/40">
          Moment {activeIndex + 1} of {images.length}
        </div>

        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-[#0D2923]/80 border border-[#D8B56A]/40 text-[#E8CF91] hover:text-white hover:border-[#D8B56A] transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center px-8 sm:px-0"
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#D8B56A]/60 shadow-[0_0_50px_rgba(216,181,106,0.25)]">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[65vh] sm:max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-3 sm:mt-4 text-center">
          <h4 className="font-serif text-lg sm:text-2xl text-[#F8F3E7] font-semibold">
            {currentImage.title}
          </h4>
          <p className="font-sans text-[11px] sm:text-xs tracking-wider text-[#D8B56A] uppercase mt-0.5">
            {currentImage.subtitle}
          </p>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#0D2923]/80 border border-[#D8B56A]/40 text-[#E8CF91] hover:text-white hover:border-[#D8B56A] transition-all z-20"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-[#0D2923]/80 border border-[#D8B56A]/40 text-[#E8CF91] hover:text-white hover:border-[#D8B56A] transition-all z-20"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};
