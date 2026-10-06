import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Heart, Image, Calendar, MapPin, Mail, Menu, X } from 'lucide-react';

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show floating navigation only after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check which section is in view
      const sections = ['hero', 'story', 'gallery', 'events', 'venue', 'rsvp'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const lenisInstance = window.__lenis || window.lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -120, duration: 1.3 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'story', label: 'Story', icon: Heart },
    { id: 'gallery', label: 'Moments', icon: Image },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'venue', label: 'Venue', icon: MapPin },
    { id: 'rsvp', label: 'RSVP', icon: Mail }
  ];

  return (
    <>
      {/* Top Right Royal Hamburger Menu Button */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsMenuOpen(true)}
          className="p-2.5 sm:p-3 rounded-full bg-[#071C18]/85 backdrop-blur-md border border-[#D8B56A]/50 text-[#E8CF91] hover:text-white hover:border-[#D8B56A] shadow-lg transition-colors cursor-pointer"
          aria-label="Open Full Menu"
        >
          <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>

      {/* Fullscreen Royal Menu Drawer with Cinematic Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#071C18]/96 backdrop-blur-2xl flex flex-col items-center justify-center p-6 overflow-hidden select-none"
          >
            {/* Ambient Gold Radial Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.35 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-[450px] h-[450px] rounded-full bg-[#D8B56A]/15 blur-[120px] pointer-events-none"
            />

            {/* Close Button with Rotation Reveal */}
            <motion.button
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2.5 sm:p-3 rounded-full bg-[#0D2923] border border-[#D8B56A]/50 text-[#E8CF91] hover:text-white hover:border-[#D8B56A] shadow-[0_0_20px_rgba(216,181,106,0.25)] transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Menu Header with Gentle Slide Down */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-8 sm:mb-10 z-10"
            >
              <span className="font-serif italic text-sm sm:text-base text-[#D8B56A] block mb-1 tracking-wider">
                The Royal Evening
              </span>
              <h2 className="font-script text-4xl sm:text-5xl text-[#F8F3E7] gold-text-shimmer py-1 px-3">
                Zohan &amp; Rose
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D8B56A] to-transparent mx-auto mt-3"
              />
            </motion.div>

            {/* Staggered Cascading Navigation Links */}
            <nav className="flex flex-col items-center gap-4 sm:gap-6 z-10">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15, transition: { duration: 0.2 } }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollTo(item.id)}
                    className={`group relative font-royal text-xl sm:text-3xl tracking-[0.25em] uppercase transition-all py-1.5 px-4 flex items-center gap-3 cursor-pointer ${
                      isActive ? 'text-[#E8CF91] font-bold' : 'text-[#F8F3E7]/90 hover:text-[#D8B56A]'
                    }`}
                  >
                    {isActive && (
                      <span className="text-[#D8B56A] text-xs sm:text-sm animate-pulse">✦</span>
                    )}
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-[#D8B56A] text-xs sm:text-sm animate-pulse">✦</span>
                    )}

                    {/* Underline expansion on hover */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D8B56A] to-transparent group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </motion.button>
                );
              })}
            </nav>

            {/* Bottom Royal Date Crest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 sm:mt-10 text-center text-[#D8B56A]/70 font-royal text-[10px] sm:text-xs tracking-[0.3em] uppercase z-10"
            >
              ✦ 24 · OCTOBER · 2026 ✦
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Floating Navigation Pill (Appears after scrolling past hero) */}
      <div
        className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out pointer-events-auto max-w-[94vw] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full bg-[#071C18]/92 backdrop-blur-xl border border-[#D8B56A]/50 shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative flex items-center justify-center p-2 min-[360px]:p-2.5 sm:px-3.5 sm:py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#123C32] text-[#E8CF91] shadow-[0_0_15px_rgba(216,181,106,0.3)]'
                    : 'text-[#C9C4B6] hover:text-[#E8CF91] hover:bg-[#0D2923]'
                }`}
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span
                  className={`hidden sm:inline font-royal text-[11px] tracking-wider uppercase ml-1.5 font-medium ${
                    isActive ? 'text-[#E8CF91]' : 'text-[#C9C4B6]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
