import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent">
      {/* Golden Glowing Progress Bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-[#D8B56A] via-[#E8CF91] to-[#FFF5DC] origin-left shadow-[0_0_12px_rgba(216,181,106,0.9)]"
        style={{ scaleX }}
      />
    </div>
  );
};
