import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Standard luxury fade up reveal
export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.9,
  yOffset = 45,
  className = "",
  once = true,
  amount = 0.12,
  margin = "0px 0px -40px 0px"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Luxury Scale & Fade Reveal
export const FadeScale = ({
  children,
  delay = 0,
  duration = 0.95,
  scaleFrom = 0.92,
  className = "",
  once = true,
  amount = 0.15,
  margin = "0px 0px -40px 0px"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Slide In from Left or Right
export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.95,
  className = "",
  distance = 50,
  once = true,
  amount = 0.15,
  margin = "0px 0px -40px 0px"
}) => {
  const xOffset = direction === "left" ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Container for list of cards or badges
export const StaggerContainer = ({
  children,
  staggerDelay = 0.18,
  className = "",
  once = true,
  amount = 0.1,
  margin = "0px 0px -40px 0px"
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item (child of StaggerContainer)
export const StaggerItem = ({
  children,
  className = "",
  yOffset = 45,
  duration = 0.85
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// Self-drawing Ornamental Gold Line
export const SelfDrawingDivider = ({ className = "my-6" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -30px 0px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] w-24 sm:w-36 origin-right bg-gradient-to-r from-transparent via-[#D8B56A] to-[#E8CF91] opacity-80"
      />

      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -30px 0px" }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D8B56A]">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="#D8B56A"
            stroke="#E8CF91"
            strokeWidth="0.75"
          />
          <circle cx="12" cy="12" r="2.5" fill="#071C18" stroke="#D8B56A" strokeWidth="0.75" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -30px 0px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] w-24 sm:w-36 origin-left bg-gradient-to-l from-transparent via-[#D8B56A] to-[#E8CF91] opacity-80"
      />
    </div>
  );
};

// Parallax Float container for decorative floating ornaments on scroll
export const ParallaxOrnament = ({ children, speed = 40, className = "" }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
